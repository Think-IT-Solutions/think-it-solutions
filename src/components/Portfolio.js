import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Our latest work
          </h2>
          <p className='subtitle'>
          In addition to web design and development, we also offer branding services 
          to help you establish a consistent and recognizable identity for your brand
          Our branding services establish a consistent and recognizable identity that 
          resonates with your audience. Our SEO services help you rank higher on search 
          engines, driving more traffic and conversions to your website.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
