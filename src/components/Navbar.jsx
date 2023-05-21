import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logoTS, menu, close } from '../assets'

// Navbar is generally the top bar on the website which has links
// to the different sections of the website

const Navbar = () => {
  // set up useState
  const[active, setActive] = useState('')
  const[toggle, setToggle] = useState(false)

  return (
    // Add the navigation bar at the top
    <nav className={`${styles.paddingX} w-full flex item-center
    py-5 fixed top-0 z-20 bg-primary`}
    >

      {/** Start the div for adding items to the navigation heading */}
      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto'>

        {/** Add hyperlink to the homepage and the logo */}
        <Link
          to = '/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('') // keep track of where we are on the page
            window.scrollTo(0,0) //scroll to the top of the page
          }}
        >

          {/** Adding Logo at Top-Left Side */}
          <img src={logoTS} alt='logo'
          className='w-9 h-9 object-contain' />
          {/** Adding Logo at Top-Left Side */}

          {/** Add text to the right ride of the logo */}
          <p className='text-white text-[18px] cont-bold cursor-pointer flex'>
            Tanmay Sarin &nbsp;
            <span className='sm:block hidden'>| Software Developer</span>
          </p>
          {/** Add text to the right ride of the logo */}

        </Link>
        {/** Add hyperlink to the homepage and the logo */}

        {/** Setup Menu Items */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              // If links are active then white else gray
              key = {link.id}
              className = {`${
                active === link.title
                ? 'text-white'
                : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}

              onClick={() => setActive(link.title)}
            >

              {/** Set up the hyperlinks for the menu items */}
              <a href={`#${link.id}`}>
                {link.title}
              </a>
              {/** Set up the hyperlinks for the menu items */}

            </li>
          ))}
        </ul>
        {/** Setup Menu Items */}

        {/** Adding a menu icon on top right for smaller devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>

          {/** Add the image for toggle button */}
          <img 
            src = {toggle ? close : menu}
            alt = 'menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/** Add the image for toggle button */}

          {/** Add a dev/space to add menu items in the toggle button */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            {/** Setup Menu Items */}
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                // If links are active then white else gray
                  key = {link.id}
                  className = {`${
                    active === link.title
                    ? 'text-white'
                    : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >

                  {/** Set up the hyperlinks for the menu items */}
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                  {/** Set up the hyperlinks for the menu items */}
                  
                </li>
              ))}
            </ul>
            {/** Setup Menu Items */}

          </div>
          {/** Add a dev/space to add menu items in the toggle button */}

        </div>
        {/** Adding a menu icon on top right for smaller devices */}

      </div>
      {/** Start the div for adding items to the navigation heading */}

    </nav>
    // Add the navigation bar at the top
  )
}

export default Navbar