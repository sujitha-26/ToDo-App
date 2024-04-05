import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiHomeSmileLine } from "react-icons/ri";
import { CgUserList } from "react-icons/cg";
const Nav = () => {
    
  return (
    <>
    <nav className='_NavContainer'>
        <aside id='logoContainer'>
            <h1>LOGO</h1>
        </aside>
        <aside id='listContainer'>
            <ul>
                <NavLink to='/'>
                    <li>
                        <span>HOME </span>
                        <span><RiHomeSmileLine /></span>
                    </li>
                </NavLink>
                <NavLink to='/ViewAll'>
                    <li>
                        <span>ViewAll</span>
                        <span><CgUserList/></span>
                    </li>
                </NavLink>
            </ul>
        </aside>
        <aside>
            
        </aside>
    </nav>
    </>
  )
}

export default Nav