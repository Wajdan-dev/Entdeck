import React from 'react';

export const Header = () => {
  return (
    <div className="bg-white py-2">
      <div className="  mx-auto px-[15px] 2xl:max-w-[1516px] flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <div className="logo">
            <img src="/assets/logo.svg" className="max-w-[125px] w-full h-auto" alt="" />
          </div>
          <div className="items hidden md:block">
            <ul className="flex items-center gap-5 p-0 m-0">
              <li>
                <a href="#" className="group font-normal text-[22px] text-[#071943] hover:font-semibold relative">
                  For you
                  <span className="absolute w-full h-[4px] bg-[#FED63C] rounded-[1px] right-0 bottom-[-10px] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group font-normal text-[22px] text-[#071943] hover:font-semibold relative">
                  Leasing
                  <span className="absolute w-full h-[4px] bg-[#FED63C] rounded-[1px] right-0 bottom-[-10px] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group font-normal text-[22px] text-[#071943] hover:font-semibold relative">
                  For you
                  <span className="absolute w-full h-[4px] bg-[#FED63C] rounded-[1px] right-0 bottom-[-10px] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5  items-center">
          <button className="md:py-[14px] py-[8px] md:px-[28px] px-[15px] rounded-[10px] bg-[#0C1B3E] hover:bg-opacity-[.9]  text-white font-semibold text-[20px]">
            Non-binding inquiries
          </button>
          <div className="relative ">
            <div className="flex  cursor-pointer gap-2 items-center font-semibold text-[20px]">
              EN
              <img src="/assets/arrow-down.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
