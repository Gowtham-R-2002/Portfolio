import React,{useEffect} from 'react'
import './HomeComponent.css'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import myimg from './myimg.png'
import './NavBar.css'
import { AwesomeButton } from 'react-awesome-button'
import  KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';

function HomeComponent() {
  useEffect(() => {
    const checkOrientation = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const remo = document.getElementById('new-div');
        remo.classList.remove('col-6');
        remo.classList.remove('col-md-6');
        const show = document.getElementById('show');
        show.classList.remove('col-6');
        show.classList.remove('col-md-6');
        const showImg = document.getElementById('show-img');
        showImg.classList.add('pic-768');
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
  }, []);

  return (
    <motion.div
      className='row'
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.0,
        delay: .5,
        ease: [1.0, 0.71, 0.2, 1.01]
      }}>

      <div id='show' className="col-lg-6 col-md-6 col-6">
        <div id='show-img' className='container'>
          <p className='greet'>Greetings from the <span className='typed-text'><Typewriter
            options={{
              strings: ['Java Dev', 'Web Dev', 'React Dev'],
              autoStart: true,
              loop: true,
            }}
          /></span>
          <p className='bio'>Yo ! This is Gowtham R. Nice Meeting Ya!</p>
          <div className='link-left'>
          <Link to = "/about">
            <AwesomeButton type="primary" >Lets Go ! <KeyboardDoubleArrowRightIcon /> </AwesomeButton>
            </Link>
          </div></p>
        </div>
      </div>
      <div id='new-div' className="col-lg-6 col-md-6 col-6">
      <div className='container mypic'>
          <img className='img-fluid' alt='mypicture' src={myimg}></img>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeComponent