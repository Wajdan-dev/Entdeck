import React from 'react';

export const Footer = () => {
  const sections = [
    {
      title: 'Company',
      items: ['About us', 'References', 'Career', 'Contact'],
    },
    {
      title: 'Legal',
      items: ['Complaints management', 'Terms and Conditions', 'Data protection', 'Imprint'],
    },
    {
      title: 'Social Channels',
      items: ['Instagram', 'Facebook', 'Youtube', 'X.com'],
    },
  ];
  return (
    <div className="pt-[100px] pb-[50px] border-t border-[#0719431A]">
      <div className="max-w-full px-[15px] 2xl:max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="max-w-[408px] w-full">
            <div className="logo">
              <img src="/assets/logo.svg" className="max-w-[125px] h-auto w-full" alt="" />
            </div>
            <p className="py-3 text-[18px] text-[#071943BF] font-normal leading-[23.4px] ">
              Semper vitae nunc vitae vel suspendisse non a. Adipiscing cursus tellus lorem diam risus lectus.
            </p>
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <img src="/assets/phone.svg" className="w-[24px] h-[24px]" alt="" />
                <p className="  text-[18px] text-[#071943BF] font-normal leading-[23.4px] ">06656 4940068</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/assets/mail.svg" className="w-[24px] h-[24px]" alt="" />
                <p className="  text-[18px] text-[#071943BF] font-normal leading-[23.4px] ">info@entdecke.de</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index}>
                <h1 className="font-bold text-[22px] text-[#071943] pb-4">{section.title}</h1>
                <ul className="p-0 m-0">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="pb-3 text-[18px] font-normal text-[#071943BF]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
