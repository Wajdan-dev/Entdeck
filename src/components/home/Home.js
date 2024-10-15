import React from 'react';
import { HeroSection } from './HeroSection';
import { CardBox } from './CardBox';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className=" mt-5 md:mt-[-50px]">
        <CardBox />
      </div>
      <div className="px-[15px] py-[40px] max-w-[768px] mx-auto ">
        <div className="flex items-center flex-wrap justify-between">
          <img src="/assets/image 6.svg" className="max-w-[150px] w-full h-auto" alt="" />
          <img src="/assets/image 7.svg" className="max-w-[150px] w-full h-auto" alt="" />
          <img src="/assets/image 8.svg" className="max-w-[150px] w-full h-auto" alt="" />
          <img src="/assets/image 9.svg" className="max-w-[150px] w-full h-auto" alt="" />
        </div>
      </div>
    </div>
  );
};
