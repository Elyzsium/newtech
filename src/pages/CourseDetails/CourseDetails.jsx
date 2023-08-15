import React, {useState, useRef, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import CommonSection from '../../components/UI/CommonSection';
import '../../styles/CourseDetails.css';
import { motion } from 'framer-motion';
import CoursesList from '../../components/UI/CoursesList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../../customHooks/useGetData';


const CourseDetails = () => {    

    const [course, setCourse] = useState({})
    const [tab, setTab] = useState('desc');
    const reviewUser = useRef("");
    const reviewMsg = useRef("");
    const dispatch = useDispatch()
    const [rating, setRating] = useState(null);
    const {id} = useParams();

    // const {data: courses} =  useGetData("courses");

//  const course = courses.find((item) => item.id === id);

    const {data: courses} = useGetData('courses')

    const docRef = doc(db,'courses', id);

    useEffect(() => {
        const getCourse = async() =>{            
        const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {               
                 setCourse(docSnap.data())
                 
            }   
            else{
              console.log('no course!')
            }
        } 
        getCourse();      
    },[])


    const {
        imgUrl,
        courseName, 
        price, 
        // avgRating, 
        // reviews, 
        description, 
        shortDesc, 
        category 
    } = course;

    // const relatedCourses = courses.filter(item => item.category === category);
    const relatedCourses = courses.filter(item => item.category === category)

     
    const submitHandler = e => {
        e.preventDefaultt();

        const reviewUserName = reviewUser.current.value;
        const reviewUserMsg = reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        };        
      console.log(reviewObj);
      toast.success("Review submitted")
     };

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
            id,
            image: imgUrl,
            courseName,
            price,
        })
        );
        toast.success('Course added successfully')
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [course]);

  return <>
  <CommonSection title={courseName} />
     <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={imgUrl} alt="" />
                </Col>
                <Col lg='6'>
                    <div className="course__details">
                        <h2>{courseName}</h2>
                        <div className="course__rating d-flex align-items-center gap-5 mb-3">
                            <div className="">
                                <span>
                                    <i className='ri-star-s-fill'></i>
                                </span>
                                <span>
                                    <i className='ri-star-s-fill'></i>
                                </span>
                                <span>
                                    <i className='ri-star-s-fill'></i>
                                </span>
                                <span>
                                    <i className='ri-star-s-fill'></i>
                                </span>
                                <span>
                                    <i className='ri-star-half-s-fill'></i>
                                </span>
                            </div>
                            <p>
                                {/* (<span>{avgRating}</span>ratings) */}
                            </p>
                        </div>

                        <div className="course__cat d-flex align-items-center gap-5">
                        <span className=''>₦{price}</span>
                        <span>Category: {category.toUpperCase()} </span>     
                        </div>
                         <p>{shortDesc}</p>

                        <motion.button whileTap={{scale:1.2}}  
                        className="buy__btn courses__btn" onClick={addToCart}>
                            Add to Cart
                        </motion.button>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>

     <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="tab__wrapper d-flex align-items-center gap-5">
                        <h4 className={`${tab==='desc' ? 'active__tab' : ""}`} 
                         onClick={() => setTab('desc')}>
                            Description
                        </h4>
                        <h4 
                         className={`${tab==='rev' ? 'active__tab' : ""}`}
                         onClick={() => setTab('rev')}
                         > Reviews  
                        </h4>
                    </div>  
                    {
                        tab==='desc' ? <div className="tab__content mt-5">
                            <p>{description}</p>
                        </div> : <div className="course__review mt-5">
                            <div className="review__wrapper">
                                {/* <ul>
                                    {reviews?.map((item, index) => (
                                        <li key={index} className='mb-4'>                                            
                                        <h5>Kasali Kafayat</h5>
                                        <span>{item.rating} (rating)</span>
                                        <p>{item.text}</p>
                                        </li>                                        
                                    ))}
                                </ul> */}
                                <div className="review__form">
                                    <h4>Leave Your Experience</h4>
                                    <form action="" onSubmit={submitHandler}>
                                        <div className="form__group">
                                            <input 
                                            type="text" 
                                            placeholder="Enter Name" 
                                            ref={reviewUser}
                                            required
                                            />                                            
                                        </div>
                                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                                            <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                                        </div>
                                        <div className="form__group">
                                            <textarea 
                                            ref={reviewMsg}
                                            rows={4} 
                                            type="text" 
                                            placeholder="Review Message..."
                                            required
                                            />
                                        </div>
                                        <motion.button whileTap={{scale: 1.2}}
                                         type='submit' className='buy__btn courses__btn'>Submit</motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }                   
                </Col> 
                <Col lg='12' className='mt-5'>
                    <h2 className="related__title">You Might Also Like</h2>
                </Col>
                <CoursesList data={relatedCourses}/>
            </Row>
        </Container>
     </section>
     
  </>
}

export default CourseDetails