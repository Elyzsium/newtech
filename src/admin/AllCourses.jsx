import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import useGetData from '../customHooks/useGetData';
import { toast } from 'react-toastify';

const AllCourses = () => {

  const {data:coursesData, loading} = useGetData("courses");

  const deleteCourse = async id => {
    await deleteDoc(doc(db, 'courses', id))
    toast.success("deleted!")
  }
  
  return <section>
    <Container>
      <Row>
        <Col lg='12'>
          <table className='table'>
            <thead>
              <tr>
                <th>image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
              loading ? <h3 className='py-5 text-center fw-bold '>Loading...</h3> : coursesData.map(item => 
                (
                  <tr key={item.id}>
                <td><img src={item.imgUrl} alt="" /></td>
                <td>{item.courseName}</td>
                <td>{item.category}</td>
                <td> ₦{item.price}</td>
                <td>
                  <button 
                  onClick={()=>{deleteCourse(item.id);}}
                  className='btn-danger'>
                    Delete
                  </button>
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

export default AllCourses