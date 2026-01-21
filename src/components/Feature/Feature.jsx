// import React from 'react'
import './Feature.css'
import feature_1 from '../../assets/feature_1.png'
import feature_2 from '../../assets/feature_2.png'
import feature_3 from '../../assets/feature_5.png'
import feature_4 from '../../assets/feature_4.png'


function Feature() {
  return (
    <div className='features'>
        
      <div className="feature">
        <img src={feature_2} alt="" className='feature-img'/>
        <div className="caption">
            <h3>Filteration Systems</h3>
            <p>Our commitment to filtration <br /> ensures that you receive water that <br />is not only clean but also  healthy <br />and refreshing. Trust in our  filtration <br />process for water that truly <br />supports your well-being. </p>
         
        </div>
      </div>
      <div className="feature">
        <img src={feature_3} alt="" className='feature-img'/>
        <div className="caption">
        <h3>Healthy Water</h3>           
         <p>Our commitment to filtration <br /> ensures that you receive water that <br />is not only clean but also  healthy <br />and refreshing. Trust in our  filtration <br />process for water that truly. </p>

        </div>
      </div>
      <div className="feature">
      <img src={feature_1} alt="" className='feature-img'/>
      <div className="caption">
      <h3>Quality Check</h3>            
      <p>Our commitment to filtration <br /> ensures that you receive water that <br />is not only clean but also  healthy <br />and refreshing. Trust in our  filtration. </p>

        </div>
      </div>
      <div className="feature">
      <img src={feature_4} alt="" className='feature-img'/>
      <div className="caption">
      <h3>Local Delivery</h3>
      <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Lorem,<br /> ipsum dolor sit amet consectetur <br /> adipisicing elit. Repellendus, ab?</p>
        </div>
      </div>
    </div>
  )
}

export default Feature
