
import React, { useState } from 'react';
import Card from "../components/Card/Card";
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from "react-toastify";
import { db, storage } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const AddCourses = () => {

  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterCourseImg, setEnterCourseImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const AddCourse = async(e) =>{
    e.preventDefault();
    setLoading(true);

    try{
      const docRef = await collection(db, 'courses')

      const storageRef = ref(storage, `courseImages/${Date.now() +
        enterCourseImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, enterCourseImg)
      
      uploadTask.on(()=>{
        toast.error('images not uploaded!')
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async dowmloadURL => {
          await addDoc(docRef, {
            courseName: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: dowmloadURL,
          });
        });     
      });
      setLoading(false);
      toast.success("course successfully added!");
      navigate("/dashboard/all-courses");
    }catch (error){
      toast.success("course not added!") 
      setLoading(false);       
    }
  };

  return <section>
    <Container>
      <Row>
        <Col lg='12'>
         {
          loading ? <h4 className='py-5'>Loading.......</h4> : <>

<h3 className='mb-5'>Add Course</h3>
          <Form onSubmit={AddCourse}>
          <Card >
            <FormGroup className="form__group">
              <span>Course Title</span>
              <input type="text" placeholder='title' value={enterTitle}  onChange={e => setEnterTitle(e.target.value)} required />
            </FormGroup>
            <FormGroup className="form__group">
              <span>Shot Description</span>
              <input type="text" placeholder='lorem...' value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} required />
            </FormGroup>
            <div className="d-flex align-items-center justify-content-between gap-5">
            <FormGroup className="form__group w-50">
              <span>Price</span>
              <input type="number" placeholder='₦5000' value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required  />
            </FormGroup>
            <FormGroup className="form__group w-50">
              <span>Category</span>
              <select className='w-100 p-4 fs-4' value={enterCategory} onChange={e => setEnterCategory(e.target.value)} >
              <option>Select Category</option>
                <option value="mobile">Mobile</option>
                <option value="web">Web</option>
                <option value="ui">UI/UX</option>
                <option value="fullstack">Full Stack</option>
                <option value="graphi">Graphic Design</option>
                <option value="ios">IOS</option>
                <option value="net">.NET</option>
                
              </select>
            </FormGroup>
            </div>
            <div className="">
              <FormGroup className="form__group">
                <span>Course Image</span>
                <input type="file" 
                // value={enterCourseImg}
                onChange={e => setEnterCourseImg(e.target.files[0])} 
                required 
                />
              </FormGroup>
            </div>
            
            <FormGroup className="form__group">
              <span>Description</span>
              <textarea 
                name="TextArea"
                type="text"
                id="Description..."
                value={enterDescription}
                onChange={e => setEnterDescription(e.target.value)}
                required
              /> 
              
              {/* <input type="areate" placeholder='Description...' value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required   /> */}
            </FormGroup>

            <button className="highlighted-btn btn" type='submit'>Add Course</button>          
            </Card>
          </Form>           

          </>
         }
        </Col>
      </Row>
    </Container>
  </section>

}

export default AddCourses;