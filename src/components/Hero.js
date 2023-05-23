import React from 'react';
import { Link } from 'react-scroll';

// import woman image
// import WomanImg from '../assets/img/banner-woman2.webp';


import banner from '../assets/img/banner2.png';
// import Logo from '../assets/img/logo4.jpg'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            {/* <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, there! 👋
            </p> */}
            <h1 className='text-lg leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-medium md:tracking-[-2px]'>
              we design <span class="before:block before:absolute before:-inset-1 before:-skew-y-3  relative inline-block animate-spin">
                        <span class="relative text-white ">&</span>
                      </span>build <br /> modern websites
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center text-neutral-100 lg:text-left'>
            we design and build mobile and web apps from concept to final product with in a given time and best quality
            </p>
            <Link to="contact" smooth={true} duration={500}>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all rounded-xl'>
                Work with us
              </button>
            </Link>
              
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-center h-full rounded-3xl'>
          
            <img className="hover:scale-110 h-auto max-w-full rounded-lg"src={banner} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;