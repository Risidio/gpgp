// import { useState } from "react";

import Wrapper from "../layout/Wrapper";

const GalleryHeader = () => {
  // const [activeTab,setActiveTab] = useState("All");

  // const handleSetActiveTab = (tab:string) => setActiveTab(tab);

  // const tabs = [
  //   {
  //     title: "All",
  //   },
  //   {
  //     title: "Early Work",
  //   },
  //   {
  //     title: "Environmental Work",
  //   },
  //   {
  //     title: "Invited Artist Work",
  //   },
  // ];

  return (
    <>
      <Wrapper>
        <div className="">
          {/* First Column */}
          <div className="pt-[30px] pb-[70px] lg:pb-[113px] pl-[10px] lg:pl-[118px] flex flex-col gap-y-[51px] lg:gap-y-[84px]">
            <div>
              <h1 className="uppercase font-be-vietnam font-[700] text-[24px] lg:text-[48px] heading-[57.6px] text-[#0A2471]">
                The Gallery
              </h1>
              <h3 className="uppercase font-[be-vietnam] text-[16px] lg:text-[20px] heading-[29.5px] ">
                The Art Inspiring Global Action
              </h3>
            </div>

            {/* <div>
              <div className="flex gap-x-[5px] lg:gap-x-[20px]">
                {tabs.map((tab) => (
                  <span
                    onClick={() => handleSetActiveTab(tab.title)}
                    key={tab.title}
                    className={`text-[12px] lg:text-[17px] hover:bg-gpgp-blue hover:text-white border-[1px] border-[#0A2471] text-[#0A2471] font-[be-vietnam] rounded-[10px] rounded-[10px] py-[5px] px-[5px] lg:py-[5px] lg:px-[20px] ${activeTab.toLocaleLowerCase() === tab.title.toLocaleLowerCase() ? 'bg-gpgp-blue text-white' : ''}`}
                  >
                    {tab.title}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default GalleryHeader;
