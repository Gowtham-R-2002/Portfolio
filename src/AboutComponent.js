import {React} from 'react'
import { motion, useScroll } from "framer-motion";
import './AboutComponent.css'
import { School, Book, Animation } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';


function AboutComponent() {
  const { scrollYProgress } = useScroll();
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
      <div className='heading'>A shortcut enthusiast in solving tasks</div>
      <div className='about-body'>
        Glad you're here ! Currently I'm a student pursuing Bachelor's of Engineering in 
        Computer Science and Engineering at SACS MAVMM Engineering College. I'm strong in programming
        languages like Java and SQL and have experience over languages like PHP, HTML, CSS, JavaScript,
        Bootstrap, jQuery, React, Flutter and Python.
        <br />
        <br />
        My key skill is that I can understand working of most the code in many programming languages and other 
        than that, I can focus on learning on any programming languages if I need to learn it.
        <br />
        <br />
        Besides those skills, I have leadership qualities, good teamplaying capabilities, strong determination to grow, and more.
        <br />
        Eventhough I have these qualities, I still lack in some places like, getting panicked sometimes, also  
        getting nervous on simple things. But I'm sure, in upcoming days, I'll try to improve myself.
      </div>
      <hr className='custom-hr'/>
      <div className='heading'>Educational Qualifications</div>
      <h4>SSLC & HSC &nbsp;<Book /></h4>
      <h6>Thaai Matric Higher Secondary School, T.Vadipatti, Madurai</h6>
      <p><Animation /> SSLC : 95.6%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Animation /> HSC : 82.3%</p>
      <h4>Bachelors Degree &nbsp;<School /></h4>
      <h6>SACS MAVMM Engineering College, Madurai</h6>
      <p>B.E Computer Science and Engineering ( 2024 batch )<br /><CodeIcon /> CGPA : 7.9</p>
      <hr className='custom-hr'/>
      <div className='heading'>Other than that...</div>
      <h4>Internships <i class="fa-solid fa-award"></i></h4>
      <h6>CodeClause Internship - Java Development Intern</h6>
      <p>Duration : Aug 1, 2023 - Sep 1, 2023</p>
      <h4>Workshops <i class="fa-solid fa-code"></i></h4>
      <h6>National Institite of Technology, Trichy</h6>
      <p>Competitive Programming and Algorithms - Mar, 2023</p>
      <h4>Miscellaneous <i class="fa-solid fa-medal"></i></h4>
      <h6>Certificate of Participation by PrepSAT Jobathon</h6>
      <p>Rank : 815 / 90678</p>


     
    </motion.div>
  )
}

export default AboutComponent
