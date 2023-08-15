import React, {useState} from 'react';
import CommonSection from '../../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import CoursesList from '../../components/UI/CoursesList';
import '../../styles/Course.css';
import useGetData from '../../customHooks/useGetData';



const Course = () => {
  

  // const [coursesData, setCoursesData] = useState({})
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [coursesData, setCoursesData] = useState([])
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
         handleFilter(courses);
      } else {
         handleFilter(courses.filter((course) => course.tags.includes(item)));
      }
    }, 500);
  };

  const {data: courses, loading} = useGetData('courses');

  // const handleFilter = e => {    
  //   const filterValue = e.target.value;
  //   if(filterValue === 'mobile'){
  //     const filteredCourses = courses.filter(item => item.category === 'mobile')
  //     setCoursesData(filteredCourses)
  //   }
  //   if(filterValue === 'web'){
  //     const filteredCourses = courses.filter(item => item.category === 'web')
  //     setCoursesData(filteredCourses)
  //   }
  //   if(filterValue === 'uiux'){
  //     const filteredCourses = courses.filter(item => item.category === 'uiux')
  //     setCoursesData(filteredCourses)
  //   }   
  //    if(filterValue === 'fullstack'){
  //     const filteredCourses = courses.filter(item => item.category === 'fullstack')
  //     setCoursesData(filteredCourses)
  //   }
  //   if(filterValue === 'graphic'){
  //     const filteredCourses = courses.filter(item => item.category === 'graphic')
  //     setCoursesData(filteredCourses)
  //   }
  //   if(filterValue === 'ios'){
  //     const filteredCourses = courses.filter(item => item.category === 'ios')
  //     setCoursesData(filteredCourses)
  //   }   
  //   if(filterValue === 'net'){
  //     const filteredCourses = courses.filter(item => item.category === 'net')
  //     setCoursesData(filteredCourses)
  //   }   
  // };

  const handleSearch = e => {
    const searchCourses = e.target.value
    
    const searchedCourses = courses.filter(item => item.courseName
      .toLowerCase().includes(searchCourses.toLowerCase()))

    setCoursesData(searchedCourses)
  }


  return <>

    <CommonSection  title='Courses'/>

    <section>
      <Container>
        <Row > 
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option value="">Categories</option>
                <option value="mobile">Mobile Apps</option>
                <option value="web">Web Site</option>
                <option value="ios">IOS</option>   
                <option value="ui">UI/UX</option>
                <option value="fullstack">Full Stack</option>
                <option value="graphic">Graphic Design</option>              
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className="filter__widget">
              <select>
              <option value="">Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type="text" placeholder='Search......' onChange={handleSearch} />
              <span>
                <i class='ri-search-line'></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Col>
          <Row>
        
          <CoursesList data={coursesData} />
            {
              coursesData.length === 0? (
                loading ? <h5 className='fw-bold'>Loading.....</h5>:
              <h1 className='text-center fs-4'>No Courses are found!</h1>
              ): <CoursesList data={coursesData} />
            }
          </Row>
        </Col>
      </Container>
    </section>
  </>
};

export default Course