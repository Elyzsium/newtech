import React from 'react';
import CoursesCard from './CoursesCard'

const CoursesList = ({data}) => {
  return (
    <>
        {
            data?.map((item, index) => (
                <CoursesCard item={item} key={index} />
            ))
        };       
    </>
  ); 
};

export default CoursesList