
import { useState } from "react";
import styles from "./auth.module.scss";
import { images } from "../../constants";
import Card from '../../components/Card/Card'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";




const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  
  const navigate = useNavigate();

  const registerUser = async(e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);

     try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password);

        const user = userCredential.user;
        const storageRef = ref(storage, `images/${Date.now() + username}`)
        const uploadTask = uploadBytesResumable(storageRef, file) 
              
              uploadTask.on((error) =>{
                toast.error(error.message)
              }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downLoadURL) => {
                  await updateProfile(user,{
                    displayName: username,
                    photoURL: downLoadURL
                  });
                  await setDoc(doc(db, "users", user.uid),{
                    uid: user.uid,
                    displayName:username,
                    email,
                    photoURL: downLoadURL,
                  })
                });
              })   
              // console.log(user);
              setIsLoading(false);
              toast.success("Registration Successful...");
              navigate("/login");
      }
      catch (error){     
              toast.error(error.message);
              setIsLoading(false);
      }

    }
    // catch((error) => {
      //     toast.error(error.message);
      //     setIsLoading(false);
      //   });
      // };
        //       const storageRef = ref(storage, `images/${Date.now() + username}`)
        //       const uploadTask = uploadBytesResumable(storageRef, file) 
              
        //       uploadTask.on((error) =>{
        //         toast.error(error.message)
        //       }, ()=>{
        //         getDownloadURL(uploadTask.snapshot.ref).then(async(downLoadURL) => {
        //           updateProfile(user,{
        //             displayName: username,
        //             photoURL: downLoadURL
        //           });
        //           await setDoc(doc(db, "users", user.uid),{
        //             uid: user.uid,
        //             displayName:username,
        //             email,
        //             photoURL: downLoadURL,
        //           })
        //         });
                
        //       })
              
            
        //       console.log(user);
        //       setIsLoading(false);
        //       toast.success("Registration Successful...");
        //       navigate("/login");
        //     })

  //    }.catch((error) => {
  //     toast.error(error.message);
  //     setIsLoading(false);
  //   });
  // };
  //     .then((userCredential) => {
       
  //       const user = userCredential.user;

  //       const storageRef = ref(storage, `images/${Date.now() + username}`)
  //       const uploadTask = uploadBytesResumable(storageRef, file) 
        
  //       uploadTask.on((error) =>{
  //         toast.error(error.message)
  //       }, ()=>{
  //         getDownloadURL(uploadTask.snapshot.ref).then(async(downLoadURL) => {
  //           updateProfile(user,{
  //             displayName: username,
  //             photoURL: downLoadURL
  //           });
  //           await setDoc(doc(db, "users", user.uid),{
  //             uid: user.uid,
  //             displayName:username,
  //             email,
  //             photoURL: downLoadURL,
  //           })
  //         });
          
  //       })
        
      
  //       console.log(user);
  //       setIsLoading(false);
  //       toast.success("Registration Successful...");
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //       setIsLoading(false);
  //     });
  // };

  return (
    <>
   
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

          xx
            <form onSubmit={registerUser}>
            <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
               <input
                type="file"
              
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit" className="--btn  --btn-block">
                Register
              </button>
            </form>

            <span className={styles.register}>
              <p className="aleady">Already an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={images.register} alt="Register" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;