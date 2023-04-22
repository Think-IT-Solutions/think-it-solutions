import React from 'react';

// testimonials data
import { testimonials } from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';


const TestiSlider = () => {

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div
                className='flex flex-col lg:flex-row gap-12 lg:gap-32'
              >
                <div
                  className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                >
                  <img className='rounded-2xl' src={authorImg} alt='' />
                </div>
                <div
                  className='flex flex-col max-w-3xl'
                >
                  <h5 className='font-body text-2xl mb-8 italic font-normal'>
                    {authorText}
                  </h5>
                  <div>
                    <p className='text-lg text-accent'>{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
