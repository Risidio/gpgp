// import { useState } from "react";

import { useState } from "react";
import Wrapper from "../layout/Wrapper";
import { IGalleryHeroProps } from "../../types/gallery";


const GalleryHeader = ({contents}:IGalleryHeroProps) => {
  const [activeTab,setActiveTab] = useState("All");

  const handleSetActiveTab = (tab:string) => setActiveTab(tab);

  const tabs = [
    {
      title: "All",
    },
    {
      title: "Early Work",
    },
    {
      title: "Environmental Work",
    },
    {
      title: "Invited Artist Work",
    },
  ];

  const mobiletabs = [
    {
      title: "All",
    },
    {
      title: "Environmental Work",
    },
    {
      title: "Early Work",
    },
    {
      title: "Invited Artist Work",
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="">
          {/* First Column */}
          <div className="pt-[30px] pb-[40px] lg:pb-[83px] pl-[10px] lg:pl-[118px] flex flex-col gap-y-[51px] lg:gap-y-[84px]">
            <div>
              <h1 className="uppercase font-be-vietnam font-[700] text-[24px] lg:text-[48px] heading-[57.6px] text-[#0A2471]">
                {contents?.title[0]?.text}
              </h1>
              <h3 className="uppercase font-[be-vietnam] text-[16px] lg:text-[20px] heading-[29.5px] ">
              {contents?.subtitle[0]?.text}
              </h3>
            </div>

            <div>
              <div className="hidden md:flex gap-x-[24px] lg:gap-x-[18px]">
                {tabs.map((tab) => (
                  <span
                    onClick={() => handleSetActiveTab(tab.title)}
                    key={tab.title}
                    className={`cursor-pointer text-[17px] hover:bg-gpgp-blue hover:text-white border-[1px] border-[#0A2471] text-[#0A2471] font-[be-vietnam] rounded-[10px] py-[5px] px-[20px] lg:py-[5px] lg:px-[20px] mt-[16px] md:mt-[unset] ${activeTab.toLocaleLowerCase() === tab.title.toLocaleLowerCase() ? 'bg-gpgp-blue text-white' : ''}`}
                  >
                    {tab.title}
                  </span>
                ))}
              </div>

              <div className="flex md:hidden gap-x-[24px] lg:gap-x-[18px] flex-wrap">
                {mobiletabs.map((tab) => (
                  <span
                    onClick={() => handleSetActiveTab(tab.title)}
                    key={tab.title}
                    className={`cursor-pointer text-[12px] xsm:text-[17px] hover:bg-gpgp-blue hover:text-white border-[1px] border-[#0A2471] text-[#0A2471] font-[be-vietnam] font-[400] rounded-[10px] py-[5px] px-[20px] mt-[16px] tracking-[-0.34px] ${activeTab.toLocaleLowerCase() === tab.title.toLocaleLowerCase() ? 'bg-gpgp-blue text-white' : ''}`}
                  >
                    {tab.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default GalleryHeader;
