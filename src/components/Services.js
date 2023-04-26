import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block hover:scale-110'>
            What We do for clients
          </h2>
          <p className='subtitle text-neutral-100'>
          We offer comprehensive digital solutions that include graphics design, mobile and web development, branding, and SEO.
           Our designs are visually stunning, intuitive, and optimized for performance and user experience. Our custom 
           mobile and web applications are responsive, dynamic, and scalable. 
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary p-6 rounded-2xl  hover:scale-110' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-bold mb-2'>{name}</h4>
                <p className='text-neutral-300'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
