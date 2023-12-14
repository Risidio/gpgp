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
        secondParagraph: contents1?.artistsecondcontent[0].text,
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
      className="relative min-h-[906px]  xxsm:min-h-[850px]  xsm:min-h-[940px] sm:min-h-[1192px] md:min-h-[1300px] lg:min-h-[1552px] xl:min-h-[1675px]
    xxl:min-h-[1845px] xxxl:min-h-[2000px] overflow-hidden"
    >
      <div className="w-full h-full relative">
        {/* Aritist Section */}
        {/* This Section gets content from Invitation array on [0] */}
        <div
          className={`w-full h-full absolute top-0 transition-transform transform ${
            showContribute ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <div className="bg-contribute-mobile-wave xl:bg-contribute-web-wave bg-cover bg-no-repeat absolute top-[90px]  xxsm:top-[110px] xsm:top-[190px] sm:top-[300px] md:top-[370px] lg:top-[480px]  xl:top-[450px] xxl:top-[500px] xxxl:top-[700px] xxxxl:top-[790px] left-0  text-white pt-[135px] md:pt-[200px] md:pb-[42] pb-[52px] xl:pt-[326px] xl:pb-[80px] w-full">
            <div className="flex flex-col items-center">
              <h1 className="font-[be-vietnam] bold-600 text-[20px] xl:text-[36px] leading-normal xl:leading-[48px] xl:tracking-[-0.72px] tracking-[-0.4px] uppercase text-center">
                {Invitation[0]?.heading}
              </h1>

              <img
                src={Invitation[0]?.Img}
                alt="gpgpTile"
                className="w-[404px] mt-[19px] xl:mt-[34px] h-[202px] xl:w-[836px] xl:h-[418px] object-contain"
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

              <div className="mt-[17.43px] xl:mt-[113px] w-[293px] xl:w-[519px] text-center flex flex-col items-center leading-[200%]">
                <h3 className="font-[be-vietnam-400] text-[1rem] xl:text-[20px] xl:font-[be-vietnam-600]">
                  {Invitation[0].description?.head}
                </h3>

                <div className="xl:hidden">
                  <p className="font-[be-vietnam] text-center text-[16px] mt-[20px]">
                    {Invitation[0].description?.body}
                  </p>

                  <p className="font-[be-vietnam] text-center text-[16px] mt-[20px]">
                    {Invitation[0].description?.secondParagraph}
                  </p>
                </div>

                <div className="hidden xl:block mt-[20px] xl:mt-[72px]">
                  <p className="font-[be-vietnam] text-center text-[16px] leading-[32px]">
                    Are you an artist passionate about environmental
                    conservation and sustainable living? We invite you to submit
                    your artwork,whether it's paintings, sculptures,
                    photographs, or any other medium, to be featured in our
                    awareness campaignsand fundraising initiatives. Your
                    creativity can help us inspire change and bring attention to
                    this critical cause.
                  </p>
                </div>

                <MyLink
                  to={Invitation[0].Btn?.link}
                  className={`flex items-center w-[270px] xl:w-[292px] mt-[44px] xl:mt-[83px] h-[48px] xl:h-[62px] bg-white uppercase`}
                >
                  <p className="text-[15px] xl:text-[16px] xl:leading-[23.602px] xl:tracking-[4.4px] font-[be-vietnam-700] leading-[22.126px] tracking-[4.125px]">
                    {Invitation[0].Btn?.heading}
                  </p>
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
          <div className="bg-contribute-mobile-wave xl:bg-contribute-web-wave bg-cover bg-no-repeat absolute top-[90px]  xxsm:top-[110px] xsm:top-[190px] sm:top-[300px] md:top-[370px] lg:top-[480px]  xl:top-[450px] xxl:top-[500px] xxxl:top-[700px] xxxxl:top-[790px] left-0  text-white pt-[135px] md:pt-[200px] md:pb-[42] pb-[52px] xl:pt-[326px] xl:pb-[80px] w-full">
            <div className="flex flex-col items-center">
              <h1 className="font-[be-vietnam] bold-600 text-[20px] xl:text-[36px] leading-normal xl:leading-[48px] xl:tracking-[-0.72px] tracking-[-0.4px] uppercase text-center">
                {Invitation[1]?.heading}
              </h1>

              <img
                src={Invitation[1]?.Img}
                alt="gpgpTile"
                className="w-[404px] mt-[19px] xl:mt-[34px] h-[202px] xl:w-[836px] xl:h-[418px] object-contain"
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
                <h3 className="font-[be-vietnam-400] text-[1rem] xl:text-[20px] xl:font-[be-vietnam-600]">
                {Invitation[1].description?.head}
                </h3>

                <p className="font-[be-vietnam] text-center text-[1rem] xl:text-[16px] xl:leading-[32px] mt-[20px] xl:mt-[72px]">
                  {Invitation[1].description?.body}
                </p>
                <MyLink
                  to={Invitation[1].Btn?.link}
                  className={`flex items-center w-[270px] xl:w-[292px] mt-[44px] xl:mt-[83px] h-[48px] xl:h-[62px] bg-white uppercase`}
                >
                  <p className="text-[15px] xl:text-[16px] xl:leading-[23.602px] xl:tracking-[4.4px] font-[be-vietnam-700] leading-[22.126px] tracking-[4.125px]">
                    {Invitation[1].Btn?.heading}
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
