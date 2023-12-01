import React from 'react'
import { motion, useScroll } from "framer-motion";
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import MailIcon from '@mui/icons-material/Mail';
import './ContactComponent.css'
function ContactComponent() {
  const { scrollYProgress } = useScroll();
  const liPress = () => {
    window.open('https://www.linkedin.com/in/gowtham-r-1318a9260/');
  }
  const instaPress = () => {
    window.open('https://www.instagram.com/_gowtham__ramesh_/')
  }
  return (
    <motion.div
      className='row about'
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.0,
        delay: .5,
        ease: [1.0, 0.71, 0.2, 1.01]
      }} >
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='heading'>Contact Me  <i class="fa-solid fa-phone"></i></div>
      <div className='social'>
        <AwesomeButtonSocial style={{height : '15vh'}} type='whatsapp' sharer={{ phone: '+918531911113' }}>Whatsapp</AwesomeButtonSocial>
        <AwesomeButtonSocial style={{height : '15vh'}} type='linkedin' onPress={liPress}>LinkedIn</AwesomeButtonSocial>
        <AwesomeButtonSocial style={{height : '15vh'}} type='instagram' onPress={instaPress}>Instagram</AwesomeButtonSocial>
      </div>




    </motion.div>

  )
}

export default ContactComponent