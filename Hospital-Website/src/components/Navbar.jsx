import React from 'react'
import './navbar.css'
import {NavLink} from "react-router-dom";
//------- imported icons ------------
import { GrLanguage } from "react-icons/gr";


export const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className='navbar_top flex'>
      
           <li className='list_item none'>
               <NavLink to='/doctors'>Find a Doctor</NavLink>
            </li>
            <li className='list_item none'>
               <NavLink to='/aboutus'>AboutUs</NavLink>
            </li>
            <li className='list_item none'>
               <NavLink to='/login'>Login</NavLink>
            </li>
         
            <li className='language_menu list_item flex'> <GrLanguage /> Language</li>
            <li className='ambulance_icon'> <img src='./assets/ambulance.svg' alt="emergencylogo" /></li>
      </div>
      <hr class="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className='navbar_bottom flex'>
         <div className='logo_div'>
           <NavLink to="/">
             <img src='./assets/logo.png' alt='logo' className='logo' />     
           </NavLink>
         </div>

         <div className='navbar_menu'>
            <ul className='menu flex'>

            <li className='list_item'>
               <NavLink to='/achievement'>Achievement</NavLink>
            </li>
            <li className='list_item'>
               <NavLink to='/ContactUs'>ContactUs</NavLink>
            </li>
            <li className='list_item'>
               <NavLink to='/Login'>Specialties</NavLink>
            </li>
            <button className='btn flex btn_one'>
               Book Appointment
            </button>
            </ul>
          </div>
      </div>
      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </nav>
  )

}

export default Navbar