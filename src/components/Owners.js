import React from 'react';

// import skill data
import { owners } from '../data';

const Owners = () => {
  return (
    <section className=' bg-secondary py-12'>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-3 md:grid-flow-col'
          
        >
          {owners.map((owner, index) => {
            return (
          <div
            className='flex flex-col lg:flex-row gap-12 lg:gap-32'
            key={index}
               >
            <div
              className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
              >
              <img className='rounded-2xl' src={owner.image} alt='' />
            </div>
            <div
              className='flex flex-col max-w-3xl'
            >
              <h5 className='font-body text-2xl mb-8 italic font-normal'>
                {/* {authorText} */}
              </h5>
              <div>
                <p className='text-lg text-accent'>{owner.name}</p>
                <p>{owner.description}</p>
              </div>
            </div>
          </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Owners;
