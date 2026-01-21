// // import React from 'react'
// import './About.css'
// import about_img from '../../assets/kid3.jpg'
// import play_icon from '../../assets/play-icon.png'

// const About = ({setPlayState}) => {
//   return (
//     <div className='about'>
//       <div className="about-left">
//         <img src={about_img} alt="" className='about-img' />
//         <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
//       </div>
//       <div className="about-right">
//         <h3>ABOUT BASICS</h3>
//         <h2>Transforming Tomorrow's Water Industry</h2>
//         <p>"Our mission is to provide innovative solutions for the water industry, focusing on sustainability, enhancing water quality, and ensuring accessibility for all. We are committed to leveraging cutting-edge technology and eco-friendly practices to address global water challenges. By fostering partnerships and empowering communities, we aim to create a lasting impact on the environment and improve lives worldwide." </p> 
//         <p>"We strive to be a global leader in sustainable water solutions, addressing the challenges of water scarcity and contamination. Our commitment is to integrate advanced technology with responsible practices, ensuring that every drop counts. Through education, innovation, and collaboration, we aim to build a future where water is preserved, respected, and accessible for generations to come."</p>
//         <p>"We thrive to revolutionize the water industry through sustainable innovations, delivering efficient and cost-effective solutions. We are dedicated to minimizing environmental impact while maximizing the availability of clean, safe water for individuals and industries alike. By prioritizing research, collaboration, and community engagement, we aim to drive positive change and contribute to a healthier planet."</p>
        
//       </div>
//     </div>
//   )
// }

// export default About

import PropTypes from 'prop-types';
import './About.css';
import about_img from '../../assets/kid3.jpg';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => setPlayState(true)}
        />
      </div>

      <div className="about-right">
        <h3>ABOUT WATER COMPANY</h3>
        <h2>Transforming Tomorrow&apos;s Water Industry</h2>
        <p>
          Our mission is to provide innovative solutions for the water industry,
          focusing on sustainability, enhancing water quality, and ensuring
          accessibility for all.
        </p>
        <p>
          We strive to be a global leader in sustainable water solutions,
          addressing the challenges of water scarcity and contamination.
        </p>
        <p>
          We thrive to revolutionize the water industry through sustainable
          innovations, delivering efficient and cost-effective solutions.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
