import './footer.css'
import {NavLink} from "react-router-dom";
import {FaFacebookF} from 'react-icons/fa'
import {FaXTwitter, FaLinkedinIn} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className = "footer text-center">
        <div className = "container">
            <div className = "footer-inner text-white py grid">
                <div className = "footer-item">
                    <h3 className = "footer-head">about us</h3>
                    <div className = "icon">
                        <img src = "./assets/logo.png" alt='logo' className='image' /> 
                    </div>
                    <p className = "text text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis saepe incidunt fugiat optio corporis ea!</p>
                    <address>
                        Kharsia Rd, Raigarh, Chhattisgarh 496001
                    </address>
                </div>

                <div className = "footer-item">
                    <h3 className = "footer-head">Quick Links</h3>
                    <ul>
                       <li className='text-white'>
                           <NavLink to='/doctors'>Find a Doctor</NavLink>
                       </li>
                       <li className='text-white'>
                           <NavLink to='/aboutus'>AboutUs</NavLink>
                       </li>
                       <li className='text-white'>
                           <NavLink to='/careers'>Careers</NavLink>
                       </li>
                       <li className='text-white'>
                           <NavLink to='/achievement'>Achievement</NavLink>
                       </li>
                       <li className='text-white'>
                           <NavLink to='/specialties'>Specialties</NavLink>
                       </li>
                    </ul>
                </div>
            </div>

            <div className = "footer-links">
                <ul className = "flex">
                    <li><a href = "#" className = "text-white flex"> <FaFacebookF /> </a></li>
                    <li><a href = "#" className = "text-white flex"> <FaXTwitter /></a></li>
                    <li><a href = "#" className = "text-white flex"> <FaLinkedinIn /> </a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer