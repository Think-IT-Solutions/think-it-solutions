import React from 'react';

// import skill data
import { owners } from '../data';

const Owners = () => {
  return (
    <section className=' bg-secondary py-12'>
     <div className='container mx-auto '>
        
        <div className='grid lg:grid-cols-3 gap-12 justify-center items-center'>
          {owners.map((owner, index) => {
            const { image, name, description } = owner;
            return (
              <div className='bg-secondary p-1 items-center justify-around rounded-2xl ml-10 ' key={index}>
                <div className='object-scale-down h-48 w-96  flex  mb-14'>
                <img className='h-auto max-w-full rounded-full object-cover animate-pulse' src={image} alt='' />
                </div>
                <h4 className='text-xl text-accent font-bold mb-2'>{name}</h4>
                <p className='text-neutral-300'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Owners;
