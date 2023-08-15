import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { images } from '../../constants';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className="ps-0 border-0  gap-2">
           <div className="logo ">
            <img src={images.logo} alt="logo" />            
                 
           </div>
           <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quam libero ut similique dolorum sit aperiam commodi eaque?
            </p>
            </div>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Courses</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Apps</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Web Site</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>UX/IX</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Full Stack</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Graphic Design</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>IOS</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>.NET</Link>
                </ListGroupItem>
              </ListGroup>
              
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/courses'>Courses</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/all-course'>All Courses</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/contact'>Privacy Policy</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/offer'>Offer</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/order'>Order</Link>
                </ListGroupItem>
              </ListGroup>
              
            </div>
          </Col>
          <Col lg='3' md='4' >
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>            
                  </span>
                  <h5>MiniMart fedPoly Ede, Osun State.</h5>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span>
                    <i class="ri-phone-line"></i>                    
                  </span>
                  <h5>111 222 333</h5>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span>
                    <i class="ri-mail-line"></i>
                  </span>                  
                  <h5>newteck@gmail.com</h5>
                </ListGroupItem>                
              </ListGroup>              
            </div>
          </Col>
          <Col lg='12'>
           <h4 className="footer__copyright">
             &copy; {year} Developed by Student Project, Supervice by Mr M.A Rahmon.  All Right Reserve
           </h4>  
          </Col>
        </Row>
      </Container>



     
    </div>
  )
}

export default Footer