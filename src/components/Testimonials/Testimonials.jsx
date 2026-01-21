import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" className='user-img'/>
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Using Water Company products has been a game-changer for my family. The quality of their mineral water is unmatched, and it’s refreshing to know we’re consuming water from a company that prioritizes sustainability and health. I’m proud to support a brand that truly cares about the environment and its customers.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" className='user-img'/>
                            <div>
                                <h3>Mark William</h3>
                                <span>Austin, USA</span>
                            </div>
                        </div>
                        <p>Water Company has redefined what it means to offer quality in the water industry. Their diverse product range, from classic mineral water to innovative juice blends, perfectly caters to every occasion. The level of care and attention to detail they put into their products is truly commendable.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" className='user-img'/>
                            <div>
                                <h3>Mercy John</h3>
                                <span>New York, USA</span>
                            </div>
                        </div>
                        <p>I’ve been using Water Company for months now, and I couldn’t be happier. The convenience of their e-commerce platform and the consistent excellence in their products make them a standout brand. It feels great to support a company that’s not only reliable but also dedicated to sustainability.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" className='user-img'/>
                            <div>
                                <h3>Catherin Jacob</h3>
                                <span>Miami, USA</span>
                            </div>
                        </div>
                        <p>Water Company commitment to providing top-tier products while being environmentally conscious is inspiring. Whether it’s the pure taste of their mineral water or the unique flavors of their juices, everything reflects their passion for quality and innovation. I highly recommend Water Company to anyone looking for premium water and beverage solutions.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials