import  { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logoBasics.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 70 ? setSticky(true) : setSticky(false);
      })
    },[])
    const[mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
        {/* <ul className={moblieMenu?'':'hide-mobile-menu'}> */}
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Products</li>
            <li><button className='btn'>Contact us</button></li> */}
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            {/* <li><Link to="shop" smooth={true} offset={-120} duration={500}>Shop</Link></li> */}
            <li><RouterLink to="/shop">Shop</RouterLink></li>
            <li><Link to='features' smooth={true} offset={-300} duration={500}>Features</Link></li>
            <li><Link to='about' smooth={true} offset={-120} duration={500}>About</Link></li>
            <li><Link to='services' smooth={true} offset={-300} duration={500}>Services</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-310} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-150} duration={500}className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar