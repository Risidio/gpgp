import React, { useState } from "react";
import MyLink from "../base/MyLink";
import ContributeWave from "./ContributeWave";
import SponsorWave from "./SponsorWave";
import InvitationCarouselDotActive from "../../assets/images/InvitationCarouselDotActive.png";
import InvitationCarouselDot from "../../assets/images/InvitationCarouselDot.png";

import { IinvitaitonSectionProps } from "../../types/contribute";

const ContributeCarousel = ({
  contents1,
  contents2,
}: IinvitaitonSectionProps) => {
  const Invitation = [
    {
      heading: contents1?.artistheading[0].text,
      SectionBG: <ContributeWave />,
      description: {
        head: contents1?.contentsubheading1[0].text,
        body: contents1?.artistcontent[0].text,
      },
      Img: contents1?.artistimage.url,
      Btn: {
        heading: "Submit Your Work",
        link: "/contribute/inviteArtist",
      },
    },
    {
      heading: contents2?.sponsorheading[0].text,
      SectionBG: <SponsorWave />,
      description: {
        head: contents2?.contentsubheading2[0].text,
        body: contents2?.sponsorcontent[0].text,
      },
      Img: contents2?.sponsorimage.url,
      Btn: {
        heading: "Become a Sponsor",
        link: "/contribute/inviteSponsor",
      },
    },
  ];

  const [showContribute, setShowContribute] = useState(true);
  const [DotTracker1, setDotTracker1] = useState(InvitationCarouselDotActive);
  const [DotTracker2, setDotTracker2] = useState(InvitationCarouselDot);
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);

  // This tracks and changes wave pattern accordingly
  const handleWaveChange = () => {
    setShowContribute(!showContribute);
  };

  //   These Functions handle the dot disable.able functionality
  const handleButtonClick1 = () => {
    setButton1Disabled(true); // Disable the first button
    setButton2Disabled(false); // Disable the second button
  };

  const handleButtonClick2 = () => {
    setButton1Disabled(false); // Disable the first button
    setButton2Disabled(true); // Disable the second button
  };

  return (
    <div
      className="relative  min-h-[906px]  xxsm:min-h-[850px]  xsm:min-h-[940px] sm:min-h-[1192px] md:min-h-[1300px] lg:min-h-[1552px] xl:min-h-[1675px]
    xxl:min-h-[1845px] xxxl:min-h-[2000px] overflow-hidden"
    >
      <div className="w-full h-full relative">
        {/* Aritist Section */}
        {/* This Section gets content from Invitation array on [0] */}
        <div
          className={`w-full absolute top-0 transition-transform transform ${
            showContribute ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <ContributeWave />

          <div className="absolute top-[90px]  xxsm:top-[110px] xsm:top-[190px] sm:top-[300px] md:top-[370px] lg:top-[480px]  xl:top-[450px] xxl:top-[500px] xxxl:top-[700px] xxxxl:top-[790px] left-0  text-white min-h-150px  xl:p-[65px] w-full p-5 ">
            <div className="flex flex-col items-center">
              <h1 className="font-[be-vietnam] text-[1.5rem] mb-0 xl:text-[2.3rem] xl:mb-9 lg:text-[2rem] lg:mb-8  md:text-[1.7rem] xxl:text-[3rem] uppercase text-white font-be-vietnam text-center tracking-wide">
                {Invitation[0]?.heading}
              </h1>

              <img
                src={Invitation[0]?.Img}
                alt="gpgpTile"
                className="p-9 md:p-7  object-contain"
              />

              <div className="flex mt-3 xsm:mb-2  flex-row">
                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker1(InvitationCarouselDotActive);
                    setDotTracker2(InvitationCarouselDot);
                    handleButtonClick1();
                  }}
                  disabled={button1Disabled}
                  className="mr-2 mt-1  z-30"
                >
                  <img src={DotTracker1} alt="0" />
                </button>

                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker2(InvitationCarouselDotActive);
                    setDotTracker1(InvitationCarouselDot);
                    handleButtonClick2();
                  }}
                  disabled={button2Disabled}
                  className="mt-1  p-1 z-30"
                >
                  <img src={DotTracker2} alt="0" />
                </button>
              </div>

              <div className="text-center  flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[100%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
                <h3 className="font-[be-vietnam] text-[1rem] xxsm:text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] font-semibold mb-2">
                  {Invitation[0].description?.head}
                </h3>

                <p className="font-[be-vietnam] text-center text-[16px] xl:text-[18px] xxxl:text-[25px] md:mb-4 leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[34px] sm:leading-[30px] xsm:leading-[28px]  w-[105%] xl:w-[95%] lg:w-[75%] md:w-[82%] sm:w-[86%] xxsm:w-[108%]  mt-5 md:mt-12">
                  {Invitation[0].description?.body}
                </p>

                <MyLink
                  to={Invitation[0].Btn?.link}
                  className={` flex items-center text-gpgp-blue mt-4 sm:mt-7 w-[170px] xsm:w-[300px] h-[50px] text-[0.8rem] xsm:text-[1.3rem] py-2 bg-white uppercase xsm:mt-16`}
                >
                  {Invitation[0].Btn?.heading}
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponosr Section  */}
      {/* This Section gets content from Invitation array on [1] */}

      <div className="w-full h-screen absolute top-0">
        <div
          className={`w-full absolute top-0 transition-transform transform ${
            showContribute ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <SponsorWave />

          <div className="absolute top-[120px]  xxsm:top-[85px] xsm:top-[120px] sm:top-[370px] md:top-[270px] lg:top-[430px]  xl:top-[610px] xxl:top-[570px] xxxl:top-[770px] xxxxl:top-[800px] left-0  text-white min-h-150px w-full p-5 ">
            <div className="flex flex-col items-center">
              <h1 className="text-[1.5rem] mb-0 xl:text-[2.3rem] xl:mb-9 lg:text-[2rem] xxl:text-[3rem]  lg:mb-8 md:text-[1.7rem] text-white font-be-vietnam text-center tracking-wide">
                {Invitation[1]?.heading}
              </h1>

              <img
                src={Invitation[1]?.Img}
                alt="gpgpTile"
                className="p-7 object-contain relative"
              />

              <div className="flex mt-2 flex-row">
                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker1(InvitationCarouselDotActive);
                    setDotTracker2(InvitationCarouselDot);
                    handleButtonClick1();
                  }}
                  disabled={button1Disabled}
                  className="mr-2 z-30"
                >
                  <img src={DotTracker1} alt="0" />
                </button>
                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker2(InvitationCarouselDotActive);
                    setDotTracker1(InvitationCarouselDot);
                    handleButtonClick2();
                  }}
                  disabled={button2Disabled}
                  className="p-1 z-30"
                >
                  <img src={DotTracker2} alt="0" />
                </button>
              </div>

              <div className="text-center flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[95%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
                <h3 className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.6rem] font-semibold mb-2">
                  {Invitation[1].description?.head}
                </h3>

                <p className="text-center  text-[0.8rem] md:text-[1rem] md:mb-4  leading-[30px]  md:leading-[35px]  w-[90%] xl:w-[95%] xl:leading-7 xxl:leading-[1.85rem] xxl:text-[1.3rem]  lg:w-[75%] md:w-[82%] sm:w-[86%] mt-5 md:mt-12">
                  {Invitation[1].description?.body}
                </p>

                <MyLink
                  to={Invitation[1].Btn?.link}
                  className={`flex items-center text-gpgp-blue mt-4 sm:mt-7 w-[170px] xsm:w-[300px] h-[50px] text-[0.8rem] xsm:text-[1.3rem] py-2 bg-white uppercase xsm:mt-16`}
                >
                  {Invitation[1].Btn?.heading}
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeCarousel;
