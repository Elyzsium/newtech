import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Home, Course, CheckOut, CourseDetails, Cart, Login, Register, Reset, Contact} from '../pages/Index';
import AddCourses from '../admin/AddCourses';
import AllCourses from '../admin/AllCourses';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import ProtectedRoute from './ProtectedRoute';


const Routers = () => {
  return (
    <div>
       <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick     
          pauseOnHover={false}      
        />
    <Routes>       
    <Route>  
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='home' element={<Home/>} />
    <Route path='course' element={<Course/>} />
    <Route path='cart' element={<Cart/>} />
    <Route path='course/:id' element={<CourseDetails/>} />
    <Route path='reset' element={<Reset/>} />
    <Route path='contact' element={<Contact/>} />
   
    <Route path='/*' element= {<ProtectedRoute/>}>
      <Route path='checkout' element={<CheckOut/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='dashboard/all-courses' element={<AllCourses/>}/>
      <Route path='dashboard/add-courses' element={<AddCourses/>}/>
      <Route path='dashboard/users' element={<Users/>}/>
    
    </Route > 

    <Route path='login' element={<Login/>} />
    <Route path='register' element={<Register/>} />
  
    </Route>
   </Routes>
    </div>
  )
}

export default Routers


