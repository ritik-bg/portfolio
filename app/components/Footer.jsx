import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container fixed bottom-0 pb-4 pl-24 flex gap-5'>
     <Link href='https://www.facebook.com/profile.php?id=100015671325377' ><img src="fb.svg" alt="" /></Link>
      
      <Link href={"https://www.instagram.com/theriti_k"}> <img src="insta.svg" alt="" /></Link>
      <Link href={"https://www.linkedin.com/in/ritik-kumar-288918313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><img src="linkedin.svg" alt="" /></Link>
    </div>
  )
}

export default Footer
