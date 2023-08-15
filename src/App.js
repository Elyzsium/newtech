
import './App.scss';
import Layout from './components/Layout';
function App() {
  return <Layout/> 
};

export default App;


// function App() {
//   const [first, setFirst] = useState('')
//   return (
//    <>
//    <BrowserRouter>
//    <ToastContainer
//       theme="dark"
//       position="top-right"
//       autoClose={3000}
//       closeOnClick     
//       pauseOnHover={false}      
//     />
//    <Routes>
//     <Route path='/' element={<Layout/>}>
//     <Route index element={<Home/>} />
//     <Route path='/course' element={<Course/>} />
    
//     <Route path='/*' element= {<RequireAuth/>}>
//       <Route path='checkout' element={<CheckOut/>}/>
//       <Route path='dashboard' element={<Dashboard/>}/>
//       <Route path='dashboard/all-courses' element={<AllCourses/>}/>
//       <Route path='dashboard/add-courses' element={<AddCourses/>}/>
//     </Route > 

//     {/* <Route path='/checkout' element={<RequireAuth>
//       <CheckOut/>
//     </RequireAuth>}/> */}
    
//     <Route path='/cart' element={<Cart/>} />
//     <Route path='/course/:id' element={<CourseDetails/>} />
//     <Route path='/login' element={<Login/>} />
//     <Route path='/register' element={<Register/>} />
//     <Route path='/reset' element={<Reset/>} />
//     <Route path='/contact' element={<Contact/>} />
//     <Route path='dashboard/users' element={<Users/>}/>
 
//     {/* <Route path='/work' element={<Work/>} /> */}

//     </Route>
//    </Routes>
//    </BrowserRouter>
//    </>
//   );

//   function RequireAuth() {
//     const {currentUser} = useAuth();
//     return currentUser ? <Outlet/> : <Navigate to= "/login" />;
// };

// }

// export default App;
