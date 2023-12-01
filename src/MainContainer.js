import {React, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MainContainer.css'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent'
import ProjectComponent from './ProjectComponent'
import ContactComponent from './ContactComponent'
import { motion } from 'framer-motion'
function MainContainer() {

  useEffect(() => {
    const checkOrientation = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        toast("This website is better in Laptop view !");
    }
    };

    // Initial check
    checkOrientation();

    // Add event listener for orientation change
    window.addEventListener('orientationchange', checkOrientation);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <motion.div
    className='container-fluid'
    initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        

          <Routes>
            <Route path="/" element = {<HomeComponent />}></Route>
            <Route path="/about" element = {<AboutComponent />}></Route>
            <Route path='/projects' element={<ProjectComponent />} ></Route>
            <Route path='/contact' element={<ContactComponent />}></Route>
          </Routes>
          <ToastContainer />
          <NavBar />
      </motion.div>

  )
}

export default MainContainer