import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/CoursesCard.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice';

const CoursesCard = ({item}) => {

  const dispatch = useDispatch();

  // const _id = courses.title;
  // console.log(_id);

  // const handleDetails = () =>{
  //   console.log("details")
  // }

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
      id: item.id,
      courseName: item.courseName,
      price: item.price,
      imgUrl: item.imgUrl
    })
    );
    toast.success('Course Added Sucessfully')
  };  

  return (
    <Col lg='3' md='4' className='mb-2 '>
    <motion.div
         whileHover={{scale: 1.1}}
        className="Course__item-card"
      >
    <div className='course__item'>
      {/* <div onClick={handleDetails} className=""> */}
        <div  className="course__img">
        <Link to={`/course/${item.id}`}>
            <motion.img whileHover={{scale: 0.9}} className='img'
             src={item.imgUrl} alt="" />
        </Link>
        </div>
      {/* </div>  */}
        
        <div className="p-2 course__info">
        <h3 className="course__name">
           <span>{item.courseName}</span> 
        </h3>
        <span >{item.category}</span>
        </div>
        <div className="course__card-bottom d-flex align-items-center justify-content-between p-2" >
            <span className="price"> ₦{item.price}</span>
            <motion.span whileTap={{scale: 1.2}} onClick={addToCart}>
                <i class="ri-add-line"></i>
            </motion.span>
        </div>
    </div>

    </motion.div>
    </Col>    
  )
}

export default CoursesCard