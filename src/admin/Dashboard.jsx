import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Dashboard.css';
import useGetData from '../customHooks/useGetData';


const Dashboard = () => {

  const {data: courses} = useGetData('courses')
  const {data: users} = useGetData('users')

  return <>
  <section>
    <Container >
      <Row >
        <Col className="3">
          <div className="revenue__box">
            <h5>Total Sales</h5>
            <span>₦8790</span>
          </div>
        </Col>
        <Col className="3">
        <div className="order__box">
            <h5>Order</h5>
            <span>570</span>
          </div>
        </Col>
        <Col className="3">
        <div className="Courses__box">
            <h5>Total Courses</h5>
            <span>{courses.length}</span>
          </div>
        </Col>
        <Col className="3">
        <div className="users__box">
            <h5>Total Users</h5>
            <span>{users.length}</span>
          </div>
        </Col>
        <Col className="3"></Col>
      </Row>
    </Container>
  </section>
  </>
}

export default Dashboard