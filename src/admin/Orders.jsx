import React from 'react'
import { Container, Row, Col  } from 'reactstrap';
import useGetData from '../customHooks/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';

const Orders = () => {
    const {data: ordersData, loading} = useGetData('users');

    const deleteOrder = async (id) => {
        await deleteDoc(doc(db, 'orders', id))
        toast.success('Order deleted')
    }

  return <section>
  <Container>
      <Row>
          <Col lg='12'>
          <h3 className='fw-bold mb-5 '>Orders</h3>                        
          </Col>
          <Col lg='12' className='pt-5'>
          <table className='table'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order image</th>
              <th>Username</th>
              <th>Order</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
             {
              loading ? <h5 className='pt-5 fw-bold'>Loading.....</h5>
              : ordersData?.map(user => (
              <tr key={user.uid}>
                  <td><img src={user.photoURL} alt="" /></td>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>
                  <button className='btn-danger'
                  onClick={()=>{deleteOrder(user.uid);}}>
                      Delete
                  </button>
                   {" "}
                  </td>
              </tr>
              )) 
             }
          </tbody>
          </table>
          </Col>
      </Row>
  </Container>
</section>
}

export default Orders