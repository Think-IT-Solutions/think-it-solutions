import React from 'react';
import { Link } from 'react-scroll';

// import img
// import Image from '../assets/img/about.webp';
import Image from '../assets/img/wp3.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Think-It-Solutions
              </h2>
              <p className='mb-4 text-accent text-lg uppercase'>
              mobile and web development,graphics design,branding
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 text-neutral-100'>
              At our company, We specialize in mobile and web development, 
               creating dynamic and responsive websites and mobile apps
                that are optimized for performance, user experience,
                 and conversions. Our development team is proficient 
                 in a range of programming languages and technologies, 
                 and we can create custom solutions that meet your specific 
                 requirements. <br />
                <br />
                Our team of experts is proficient in graphic design, mobile app development, 
                web development, and branding strategy. We work closely with our clients to 
                understand their unique needs and develop tailored solutions that meet their objectives. 
              </p>
            </div>
            <Link to="contact" smooth={true} duration={600}>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all rounded-xl'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
