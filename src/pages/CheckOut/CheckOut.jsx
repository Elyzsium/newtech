import React from 'react';
import { Container, Row, Col, Form, FormGroup,  } from 'reactstrap';
import CommonSection from '../../components/UI/CommonSection';
import '../../styles/CheckOut.css'
import Card from "../../components/Card/Card";
// import styles from "../../components/Card/Card.module.scss";
import { useSelector } from 'react-redux';


const CheckOut = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return <>
  <CommonSection title='CheckOut'/>

  <section>
    <Container>
      <Row>
        <Col lg='8'>
          <h5 className='mb-4 fw-bold'>Billing Infomation</h5>
          <Form className='billing__form'>
             {/* <Card cardClass={styles.card}> */}
            <FormGroup className="form__group">
              <input type="text" placeholder='Name' />
            </FormGroup>

            <FormGroup className="form__group">
              <input type="email" placeholder='Email' />
            </FormGroup>

            <FormGroup className="form__group">
              <input type="number" placeholder='Phone Number' />
            </FormGroup>

            <FormGroup className="form__group">
              <input type="text" placeholder='Address' />
            </FormGroup>

            <FormGroup className="form__group">
              <input type="text" placeholder='Country' />
            </FormGroup>
            {/* </Card> */}
          </Form>
        </Col>
        <Col lg='4'>
          <div className="checkout__cart">
            <h5>
              Total Qty: <span>{totalQty} items</span>
            </h5>
            <h5>
              Subtotal: <span>₦ {totalAmount}</span>
            </h5>
            <h3> 
              Total Cost: <span> {totalAmount} </span>
            </h3>
            <button className="buy__btn auth__btn w-100">Place Order</button>
          </div>
         
        </Col>
      </Row>
    </Container>
  </section>

  </>
}

export default CheckOut