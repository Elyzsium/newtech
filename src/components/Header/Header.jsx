import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { images } from "../../constants";
import { motion } from 'framer-motion';
import Head from '../Header/Head';
import { FaShoppingCart,FaHeart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
// import { AdminOnlyLink } from "../adminOnlyRoute/AdminOnlyRoute";
import useAuth from '../../customHooks/useAuth';



const logo =(
  <div className={styles.logo}>
  <Link to= '/'>
    <img src={images.logo}  alt="logo" />
  </Link>
</div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const {currentUser} = useAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navigateToCart = () => {
    navigate('/cart')
  }

 
  const cart = (
    <span className={styles.cart} onClick={navigateToCart}>
        <Link to="">    
        <FaShoppingCart size={20} />       
         <span > {totalQuantity} </span>
         </Link>       
    </span>
  );

  const rating = (
    <span className={styles.cart}>
      <Link to="">                      
        < FaHeart size={20} /> 
         <span className="rating__badge">1</span>
      </Link>
    </span>
  );
  // const profile =(
  //   <span className={styles.nav__icons}>
  //   <Link to= '/'>
  //     <span >
  //     <motion.img whileTap={{scale:1.2}} src={images.profile} alt="profile" />
  //     </span>
  //      </Link>
  // </span>
  // );

  

  return (
    <>
     <Head/>
      <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
          {logo}

          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>
              {/* <li>
                <AdminOnlyLink>
                  <Link to="/admin/home">
                    <button className="--btn --btn-primary">Admin</button>
                  </Link>
                </AdminOnlyLink>
              </li> */}
              <li>
                         
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/course" className={activeLink}>
                  Course
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact 
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <ShowOnLogout>
                  <NavLink to="/login" className={activeLink}>
                    Login
                  </NavLink>
                  <Link to="/dashboard" >
                     Dashboard
                  </Link>   
                </ShowOnLogout>
                <ShowOnLogin>
                  <a href="#home" style={{ color: "#45ca93" }}>
                  <span className={styles.nav__icons} >
                    <motion.img 
                    whileTap={{scale:1.2}} 
                    src={ currentUser? currentUser.photoURL: images.profile} 
                    alt="profile" />
                  </span>          
                     {displayName}
                  </a>
                </ShowOnLogin>
                <ShowOnLogin>
                  <NavLink to="/order-history" className={activeLink}>
                   Orders
                  </NavLink>
                </ShowOnLogin>
                <ShowOnLogin>
                  <NavLink to="/" onClick={logoutUser}>
                    Logout
                  </NavLink>
                </ShowOnLogin>
              </span>
              {cart}
              {rating}
              
            </div>
          </nav>

          <div className={styles["menu-icon"]}>
            {rating}
            {cart}
            {/* {profile} */}
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
        </div>
      </header>
     
    </>
  );
};

export default Header;


















