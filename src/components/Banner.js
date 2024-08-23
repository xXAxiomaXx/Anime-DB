import React from 'react'
import background from "../images/mylivewallpapers-com-Hollow-Technique-Satoru-Gojo-4K.mp4";

const Banner = () => {
  return (
    <div>
        <section className="home h-screen w-screen flex justify-center">
          <video autoPlay loop muted className="bg-vid fixed top-0 h-screen w-screen md:h-screen left-0 md:w-full object-cover">
            <source src={background} type="video/mp4" />
          </video>
        {/* <h1 className='text-white font-bold tracking-widest text-9xl w-full text-center mb-1.5 self-center static uppercase'>Welcome</h1> */}
      </section>
    </div>
  )
}

export default Banner