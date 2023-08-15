import React from 'react'
import '../../styles/Cart.css';
import CommonSection from '../../components/UI/CommonSection';
import { Container, Row, Col} from "reactstrap";
import { motion } from 'framer-motion';
import { cartActions } from '../../redux/slice/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card"



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return <>
  <CommonSection title= 'Cart'/>  
  <section>
    <Container>
      <Row>
        <Col lg='9'>
          {cartItems.length === 0 ? (
            <h2 className='fs-4 text-center'> No item added to the cart </h2>
            ) :(
              <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>           
              <tbody>
               {
                cartItems.map((item, index) => (
                 <Tr item={item} key={index} />
                ))
               }
              </tbody> 
            </table>
            )}        
        </Col>
        <Col lg='3'>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='fs-2 fw-bold'>
              SubTotal
            </h5>
            <span className='fs-1 fw-bold'>₦{totalAmount}</span>           
          </div>
          <p className='fs-3 mt-2'>taxes will calculate in checkout</p>
          <div className="">         

            <button className='buy__btn courses__btn w-100 '>
              <Link to='/checkout' >
                CheckOut
              </Link>
            </button>

            <button className='buy__btn courses__btn w-100 mt-2'>
              <Link to='/course'>
                Continue Buying
              </Link>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
};

const Tr = ({item}) =>{
  const dispatch = useDispatch()

  const deleteCourse = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return  <tr>
  <td>
    <img src={item.imgUrl} alt="" />
  </td>
  <td>{item.courseName}</td>
  <td>₦{item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i 
  whileTap={{ scale:1.2 }} 
  onClick={deleteCourse}
  className='ri-delete-bin-line'
  ></motion.i></td>
</tr>
}

export default Cart