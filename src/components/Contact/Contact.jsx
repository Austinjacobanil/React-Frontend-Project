import React from 'react'
import './Contact.css'
import msg_img from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bc338b1-287f-411b-941d-c9f040282701");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_img} alt="" /></h3>
            <p>We’re here to help! Whether you have questions about our products, need assistance with an order, or want to share your feedback, our team is ready to assist you. At Water Company, we value every interaction and strive to provide prompt, reliable support. Feel free to reach out to us using the form below, or connect with us via email or phone. We look forward to hearing from you!</p>
        <ul>
            <li><img src={mail_icon} alt="" />watercompany@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 83885730</li>
            <li><img src={location_icon} alt="" />Beverages and Water Company, India </li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact