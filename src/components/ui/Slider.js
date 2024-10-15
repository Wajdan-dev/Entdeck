import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (md)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens (sm)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <div className="2xl:max-w-[1371px] md:mx-[30px] 2xl:mx-auto">
        <Slider {...settings} className=" ">
          {' '}
          {/* Apply spacing */}
          <div className="slick-slide max-w-full md:max-w-[300px]" id="slide-1">
            <img src="/assets/slide1.svg" className="max-w-full h-auto w-full" alt="Slide 1" />
            <h1 className="py-2 text-[24px] font-semibold text-[#071943]">John Khekin</h1>
            <p className="text-[#07194380] font-medium text-[20px]">Electrical Engineer, Officer</p>
          </div>
          <div className="slick-slide max-w-full md:max-w-[300px]" id="slide-2">
            <img src="/assets/slide2.svg" className="max-w-full h-auto w-full" alt="Slide 2" />
            <h1 className="py-2 text-[24px] font-semibold text-[#071943]">John Khekin</h1>
            <p className="text-[#07194380] font-medium text-[20px]">Electrical Engineer, Officer</p>
          </div>
          <div className="slick-slide max-w-full md:max-w-[300px]" id="slide-3">
            <img src="/assets/slide3.svg" className="max-w-full h-auto w-full" alt="Slide 3" />
            <h1 className="py-2 text-[24px] font-semibold text-[#071943]">John Khekin</h1>
            <p className="text-[#07194380] font-medium text-[20px]">Electrical Engineer, Officer</p>
          </div>
          <div className="slick-slide max-w-full md:max-w-[300px]" id="slide-4">
            <img src="/assets/slide4.svg" className="max-w-full h-auto w-full" alt="Slide 4" />
            <h1 className="py-2 text-[24px] font-semibold text-[#071943]">John Khekin</h1>
            <p className="text-[#07194380] font-medium text-[20px]">Electrical Engineer, Officer</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 md:right-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src="/assets/arrow-right.svg" className="w-[24px] h-[12px]" alt="Next" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 md:left-[-24px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src="/assets/arrow-left.svg" className="w-[24px] h-[12px]" alt="Previous" />
    </div>
  );
};
