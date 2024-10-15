import React from 'react';

const items = [
  {
    img: '/assets/tick.svg',
    msg: 'Erat aliquam aliquam ut velit',
  },
  {
    img: '/assets/tick.svg',
    msg: 'In praesent venenatis posuere eget.',
  },
  {
    img: '/assets/tick.svg',
    msg: 'Interdum enim varius et vulputate',
  },
  {
    img: '/assets/tick.svg',
    msg: 'Arcu vitae vel bibendum nibh id',
  },
  {
    img: '/assets/tick.svg',
    msg: 'Nulla erat aliquam ipsum neque ornare.',
  },
];

export const HeroSection = () => {
  return (
    <div className="w-full lg:min-h-[791px] bgImg bg-cover">
      <div className="lg:pt-[100px] pb-[40px] pt-[40px] lg:container px-[15px] xl:max-w-[1286px] mx-auto">
        <div className="flex md:flex-row flex-col items-center  gap-5 ">
          <div className="md:max-w-[769px] w-full max-w-full">
            <h1 className="md:text-[72px] text-[40px] font-medium md:leading-[79.2px] leading-normal text-white ">
              Save up to
              <span className="text-[#FED63C] font-semibold mx-2  ">
                {/* <img src="/assets/frame.svg" className="w-[86px] h-[86px]" alt="" /> */}
                78%
              </span>{' '}
              on energy with solar panels
            </h1>
            <div className="py-8 flex gap-4 items-center">
              <button className="md:py-[14px] py-[8px] md:px-[28px] px-[15px] rounded-[10px] bg-[#FED63E] text-[#071943] font-semibold text-[20px] ">
                Go Green Today!
              </button>
              <button className="md:py-[14px] py-[8px] md:px-[28px] px-[15px] rounded-[10px] bg-transparent border border-[#FFFFFF4D] text-[#fff] font-semibold text-[20px] ">
                See All Services
              </button>
            </div>
            <div className="flex gap-2 ">
              <img src="/assets/users.svg" className="w-[56px] h-auto" alt="" />
              <p
                className="font-normal text-[24px] leading-[28.8px] text-white  "
                style={{ boxShadow: '0px 0px 20px 0px #0719434D' }}
              >
                Over <span className="text-[#FED63C]"> 50,000+</span> Users From <br />
                Small Business to Enterprise
              </p>
            </div>
          </div>
          <div className="max-w-[386px] w-full ">
            <div className="pb-5">
              <p className=" text-[22px] font-medium text-[#FFFFFFD9] ">Erat aliquam aliquam ut velit:</p>
            </div>
            <div className="flex flex-col gap-3">
              {items.map((data) => (
                <div className="flex gap-2 items-center">
                  <img src={data.img} className="w-[26px] h-[26px]" alt="" />
                  <p className=" text-[22px] font-medium text-[#FFFFFF] ">{data.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
