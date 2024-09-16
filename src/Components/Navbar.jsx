import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    
  <div style={{background:"cyan"}} className='h-16 flex justify-evenly p-4 '>
  <Link href={'/about'}>
  <h1 className='font-bold text-xl font-mono'>About</h1>
  </Link>
  <Link href={'/contact'}>
  <h1 className='font-bold text-xl font-mono'>Contact</h1></Link>

  <h1 className='font-bold text-xl font-mono'>Home</h1>
  </div>
  )
}

export default Navbar