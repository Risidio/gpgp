import React, { useState } from "react";
import MyLink from "../base/MyLink";
import ContributeWave from "./ContributeWave";
import SponsorWave from "./SponsorWave";
import InvitationCarouselDotActive from "../../assets/images/InvitationCarouselDotActive.png";
import InvitationCarouselDot from "../../assets/images/InvitationCarouselDot.png";
import { IinvitaitonSectionProps } from "../../types/contribute";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
// import images from "../../assets/images/CarouselImg.png";

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
      className="relative mt-[4rem]  min-h-[906px]  xxsm:min-h-[850px]  xsm:min-h-[990px] sm:min-h-[1392px] md:min-h-[1300px] lg:min-h-[1570px] xl:min-h-[1650px]
    xxl:min-h-[1790px] xxxl:min-h-[2000px] overflow-hidden"
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
          <div className="absolute top-[85px]  xxsm:top-[90px] xsm:top-[185px] sm:top-[250px] md:top-[220px] lg:top-[280px]  xl:top-[300px] xxl:top-[400px] xxxl:top-[500px] xxxxl:top-[520px] left-0  text-white min-h-150px  xl:p-[65px] w-full p-5">
            <div className="flex flex-col items-center">
              <h1 className="flex gap-x-[88px] font-[be-vietnam] font-semibold mb-0 text-[20px] lg:text-[36px] lg:mb-[34px] leading-normal lg:leading-[48px] tracking-[-0.4px] lg:tracking-[-0.72px] uppercase text-center">
                <span className="my-auto">{Invitation[0]?.heading}</span>
                <HiChevronRight
                  className="my-auto hover:cursor-pointer"
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker1(InvitationCarouselDotActive);
                    setDotTracker2(InvitationCarouselDot);
                    handleButtonClick1();
                  }}
                />
              </h1>

              <img
                src={Invitation[0]?.Img}
                // src={images}
                alt="gpgpTile"
                className=" w-[595px]  xsm:w-auto md:max-w-[900px] p-9 md:p-7 object-contain"
              />

              <div className="flex mt-3 flex-row items-center relative">
                <div className="flex flex-row my-auto">
                  <button
                    onClick={() => {
                      handleWaveChange();
                      setDotTracker1(InvitationCarouselDotActive);
                      setDotTracker2(InvitationCarouselDot);
                      handleButtonClick1();
                    }}
                    disabled={button1Disabled}
                    className="mr-2"
                  >
                    <img src={DotTracker1} alt="0" className="w-[12px]" />
                  </button>

                  <button
                    onClick={() => {
                      handleWaveChange();
                      setDotTracker2(InvitationCarouselDotActive);
                      setDotTracker1(InvitationCarouselDot);
                      handleButtonClick2();
                    }}
                    disabled={button2Disabled}
                  >
                    <img src={DotTracker2} alt="0" className="w-[12px]" />
                  </button>
                </div>
              </div>

              <div className="mt-[57.43px] xl:mt-[113px] w-[120%] xsm:w-[100%]  sm:w-[70%] md:w-[50%]  text-center flex flex-col items-center leading-[200%]">
                <h3 className="font-[be-vietnam-400] text-[1rem] xxsm:text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] xl:font-[be-vietnam-600] font-semibold ">
                  {Invitation[0].description?.head}
                </h3>

                <div className=" mt-[20px] xl:mt-[72px]">
                  <p className="font-[be-vietnam] text-center text-[14px] xsm:text-[16px] xl:text-[20px] xxxl:text-[23px]  md:leading-[32px]">
                    {Invitation[0].description?.body}
                  </p>
                </div>

                <MyLink
                  to={Invitation[0].Btn?.link}
                  className={`flex items-center w-[170px] xsm:w-[270px] xl:w-[292px] mt-[22px]  xsm:mt-[32px] sm:mt-[44px] xl:mt-[83px] h-[48px] xl:h-[62px] bg-white uppercase`}
                >
                  <p className=" text-[9px] xsm:text-[15px] xl:text-[16px] xl:leading-[23.602px] xl:tracking-[4.4px] font-[be-vietnam-700] leading-[22.126px] tracking-[4.125px]">
                    {Invitation[0].Btn?.heading}
                  </p>
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Section  */}
      {/* This Section gets content from Invitation array on [1] */}

      <div className="w-full h-screen">
        <div
          className={`w-full absolute top-0 transition-transform transform ${
            showContribute ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <SponsorWave />

          <div className="absolute top-[85px]  xxsm:top-[90px] xsm:top-[185px] sm:top-[250px] md:top-[220px] lg:top-[280px]  xl:top-[300px] xxl:top-[400px] xxxl:top-[500px] xxxxl:top-[520px]  left-0  text-white min-h-150px w-full p-5 ">
            <div className="flex flex-col items-center">
              <h1 className="flex gap-x-[88px] font-[be-vietnam] font-semibold mb-0 text-[20px] lg:text-[36px] lg:mb-[34px] leading-normal lg:leading-[48px] lg:tracking-[-0.72px] tracking-[-0.4px] uppercase text-center">
                <HiChevronLeft
                  className="my-auto hover:cursor-pointer"
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker1(InvitationCarouselDotActive);
                    setDotTracker2(InvitationCarouselDot);
                    handleButtonClick1();
                  }}
                />
                <span className="my-auto">{Invitation[1]?.heading}</span>
              </h1>

              <img
                src={Invitation[1]?.Img}
                alt="gpgpTile"
                className="w-[595px]  xsm:w-auto md:max-w-[900px] p-9 md:p-7 object-contain"
              />

              <div className="flex mt-3 flex-row items-center relative">
                <div className="flex flex-row my-auto">
                  <button
                    onClick={() => {
                      handleWaveChange();
                      setDotTracker1(InvitationCarouselDotActive);
                      setDotTracker2(InvitationCarouselDot);
                      handleButtonClick1();
                    }}
                    disabled={button1Disabled}
                    className="mr-2"
                  >
                    <img src={DotTracker1} alt="0" className="w-[12px]" />
                  </button>
                  <button
                    onClick={() => {
                      handleWaveChange();
                      setDotTracker2(InvitationCarouselDotActive);
                      setDotTracker1(InvitationCarouselDot);
                      handleButtonClick2();
                    }}
                    disabled={button2Disabled}
                  >
                    <img src={DotTracker2} alt="0" className="w-[12px]" />
                  </button>
                </div>
              </div>

              <div className="text-center flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[115%] xsm:w-[95%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
                <h3 className="font-[be-vietnam-400]  text-[1rem] xxsm:text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem]  xl:font-[be-vietnam-600]">
                  {Invitation[1]?.description?.head}
                </h3>

                <p className="font-[be-vietnam] text-center  text-[14px] xsm:text-[16px] xl:text-[20px] xxxl:text-[23px] xl:leading-[32px] tracking-[0.35px] xl:tracking-0 mt-[20px] xl:mt-[72px]">
                  {Invitation[1]?.description?.body}
                </p>
                <MyLink
                  to={Invitation[1]?.Btn?.link}
                  className={`flex items-center w-[170px] xsm:w-[270px] xl:w-[292px] mt-[22px]  xsm:mt-[32px] sm:mt-[44px] xl:mt-[83px] h-[48px] xl:h-[62px] bg-white uppercase`}
                >
                  <p className="text-[15px] xl:text-[16px] xl:leading-[23.602px] xl:tracking-[4.4px] font-[be-vietnam-700] leading-[22.126px] tracking-[4.125px]">
                    {Invitation[1]?.Btn?.heading}
                  </p>
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
