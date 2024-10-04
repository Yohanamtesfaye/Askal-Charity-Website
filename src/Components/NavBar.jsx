import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-[#222222] text-white p-5 px-44 flex justify-between'>
      <div>
        <img  alt="" />
      </div>
      <div className=' space-x-9 '>
        <Link to={'/'}>Home</Link>
        <Link to={'/donate'}>Donate</Link>
        <Link to={'/about-us'}>About Us</Link>
        <Link to={'/voulenteer'}>Voulenteer</Link>
        <Link to={'/join-us'}>Join Us</Link>

      </div>
    </div>
  )
}

export default NavBar