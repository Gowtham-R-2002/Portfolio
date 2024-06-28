import React from 'react'
import { motion, useScroll } from "framer-motion";
import './HomeComponent.css'
import './ProjectComponent.css'
import { Animation } from '@mui/icons-material';
import { AwesomeButton } from 'react-awesome-button';

function ProjectComponent() {
    const { scrollYProgress } = useScroll();
    const javaLink = () => {
        window.open('https://www.udemy.com/certificate/UC-1d1f85d5-803f-47af-ac00-5917367e8d4d/');
    }
    const webLink = () => {
        window.open('https://www.udemy.com/certificate/UC-70dd18ad-81b6-43b5-a48c-9bd75a2d7128/')
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
            <div className='heading'>Projects <i class="fa-brands fa-free-code-camp"></i></div>
            <h4 className='project-title'>A Standalone Customer DataBase Web Suite for The Raymond Shop, Dindigul</h4>
            <h6><Animation /> A dynamic web app that handles every transaction of the textile showroom. Built
                using HTML5, CSS3, Bootstrap, JavaScript, PHP and MySQL</h6>
            <p> Duration Jun, 2022 - Aug, 2022</p>
                    
            <h4 className='project-title'>GLR Book stall</h4>
            <h6><Animation /> An E-Commerce website that has basic functionalities from registration
                to payment like modules. Built with HTML, CSS, jQuery, Bootstrap, PHP and MySQL.</h6>
            <p> Duration Jan, 2023 - Mar, 2023</p>
                    
            <h4 className='project-title'>Voice-GPT</h4>
            <h6><Animation />An app that is made to respond with ChatGPT’s response in a way that accepts
                voice input and voice output in native languages. Built using HTML5, CSS3,
                Bootstrap, ChatGPT API and Python Flask</h6>
            <p> Duration : Aug,2023 - Aug,2023</p>
                    
            <hr className='custom-hr'/>
            <div className='heading'>Certificates <i class="fa-solid fa-award"></i></div>
            <h6><Animation />Certified on Java Development by Udemy </h6>
            <p><AwesomeButton onPress={javaLink} type='secondary'>Link &nbsp;&nbsp;<i className="fa-solid fa-paperclip"></i></AwesomeButton></p>
            <h6><Animation />Certified on Frontend Web Development using HTML, CSS & Bootstrap by Udemy </h6>
            <p><AwesomeButton onPress={webLink} type='secondary'>Link &nbsp;&nbsp;<i className="fa-solid fa-paperclip"></i></AwesomeButton></p>




        </motion.div>
    )
}

export default ProjectComponent
