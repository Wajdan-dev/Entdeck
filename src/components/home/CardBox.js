import React from 'react';

export const CardBox = () => {
  const cardData = [
    {
      desc: 'Nunc at vitae libero libero commodo semper et imperdiet purus. Duis urna tellus tellus.',
    },
    {
      desc: 'Cursus id vulputate nibh suscipit massa aenean. Id aliquet condimentum in id viverra.',
    },
    {
      desc: 'Vitae a fermentum quis duis donec urna aenean purus. Ullamcorper enim diam.',
    },
  ];
  return (
    <div className="px-[15px]">
      <div
        className="w-full 2xl:max-w-[1519px] bg-white rounded-[20px] md:p-[56px] p-[20px] "
        style={{ boxShadow: '0px 4px 56px 0px #0000001A' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((item) => (
            <div className="flex items-center gap-3">
              <img src="/assets/leave.svg" className="w-[56px] h-auto" alt="" />
              <p className="text-[#071943] text-[18px] font-normal leading-[23.4px] ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
