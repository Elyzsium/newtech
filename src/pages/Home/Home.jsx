import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import Services from '../Services/Services';
import { Container, Row, Col } from 'reactstrap';
import CoursesList from '../../components/UI/CoursesList';
import { images } from '../../constants';
import Clock from '../../components/UI/Clock';
import { Link } from 'react-router-dom';
import './Home.scss';
import useGetData from '../../customHooks/useGetData';




const Home = () => {

  const {data: courses, loading} = useGetData('courses')

  const [trendingCourses, setTrendingCourses] = useState([]);

  useEffect(()=>{
    const filteredTrendingCourses = courses.filter((item) => item.category 
    );
    setTrendingCourses(filteredTrendingCourses)
  }, [courses]);

  return (   
  <>
  <section className='section__one'>
    <div className='app__header app__flex'>
      <div className='app__profile-container'>
        <div className='app__profile-parent'>
          <div className='app__profile-details'>       
            <div className='app__profile-details-name'>
              <span className='primary-text'>
              <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition = {{duration: 1.5}}
                className = "app__header-info"
                >
                  <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                      <span>👋</span>
                      <div style={{marginleft: 20}}>
                        <h3 className='p-text'>Welcome to </h3> 
                        <h3 className='head-text'>New<span>Tech</span> Solution </h3>
                      </div>
                    </div> 
                    
                  </div>

              </motion.div>     
              </span>    
            </div>

            <div className='app__profile-details-role'>           
            <span >
               <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition = {{duration: 1.5}}
                className = "app__header-info">

                  {""}
                  <h1>
                    {""}
                    <Typical 
                    loop={Infinity}
                    steps={[
                      "Full Stack Developer🌞",
                      1000,                      
                      "Web Developer💻",
                      1000,
                      "Mobile Developer📱",
                      1000,
                      "Graphic Design👍",
                      1000,                    

                    ]}
                  />
                  </h1>
                  <span className='app__profile-role-tagling'>
                  😎Contact me on building your application with frontend and backend operation
                  </span>
                  </motion.div>
              </span>
            </div>

            <div className='app__profile-option'>
              <button className='btn primary-btn'>               
                Hire Me              
              </button>
              <a >
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>       
            </div>
          </div>         
        </div>
      </div>
     
    </div>    
    </section>
    <Services/>
    <section className='section__course'>
     <Container>
      <Row>
        <Col lg='12' className='text-center'> 
        <h2 className='section__title'>Trending Courses</h2>         
        </Col>
        {
          loading ? <h5 className='fw-bold'>Loading.....</h5>:
          <CoursesList data={trendingCourses} />
        }
        
      </Row>
     </Container>
    </section>
    {/* <Work /> */}
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg ='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
              <h3 className='mb-2'>NewTeck Solution Recruitment </h3>
              <h2 className='mb-3'>Welcoming Date</h2>
            </div>
            <Clock />
            <h3>Register With Us</h3>
            <motion.button whileTap={{scale:1.2}} className="buy__btn courses__btn">
              <Link to='/courses'>Vist NewTeck</Link>
            </motion.button>
          </Col>
          <Col lg ='6' md='12' className='text-end counter__img'>
            <img src={images.software} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
   

  </>
  )
}

export default Home;

// export default AppWrap(Home, 'home');
