import React, { useState } from "react";
import MyLink from "../base/MyLink";
import ContributeWave from "./ContributeWave";
import SponsorWave from "./SponsorWave";
import invitationImage from "../../assets/images/invitationTile.png";
import InvitationCarouselDotActive from "../../assets/images/InvitationCarouselDotActive.png";
import InvitationCarouselDot from "../../assets/images/InvitationCarouselDot.png";

interface ContributeInvitationProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  currentSection: string;
}

const ContributeInvitation: React.FC<ContributeInvitationProps> = ({
  setCurrentSection,
  currentSection,
}) => {
  const Invitation = [
    {
      heading: "INVITATION FOR ARTISTS",
      SectionBG: <ContributeWave />,
      description: {
        head: `Calling All Artists Submit Your Work`,
        body: `Are you an artist passionate about environmental conservation and sustainable living? We invite you to submit your artwork, whether it's paintings, sculptures, photographs, or any other medium, to be featured in our awareness campaigns and fundraising initiatives. Your creativity can help us inspire change and bring attention to this critical cause.`,
      },
      Img: invitationImage,
      Btn: {
        heading: "Submit Your Work",
        link: "/contribute/inviteArtist",
      },
    },
    {
      heading: "INVITATION FOR SPONSORS",
      SectionBG: <SponsorWave/>,
      description: {
        head: `Do you believe in the power of art and innovation to drive environmental change?`,
        body: `If you're an investor who wants to support a project with a significant ecological and social impact, we encourage you to apply to become a vital partner in the GPGP Art Project. Your investment will help us clean up and prevent further pollution in the Great Pacific Garbage Patch. Join us in fostering a cleaner, healthier ocean ecosystem and a more sustainable future.`,
      },
      Img: invitationImage,
      Btn: {
        heading: "Become a Sponsor",
        link: "/contribute/inviteSponsor",
      },
    },
  ];

  const [DotTracker1, setDotTracker1] = useState(InvitationCarouselDot);
  const [DotTracker2, setDotTracker2] = useState(InvitationCarouselDot);

  const switchSection = () => {
    setCurrentSection(currentSection === "section1" ? "section2" : "section1");
    setDotTracker1(
      currentSection === "section2"
        ? InvitationCarouselDotActive
        : InvitationCarouselDot
    );
    setDotTracker2(
      currentSection === "section1"
        ? InvitationCarouselDotActive
        : InvitationCarouselDot
    );
  };

  const currentInvitation = currentSection === "section1" ? Invitation[0] : Invitation[1];
  return (
    <>
      {currentInvitation.SectionBG}
      <div className="absolute top-[145px] xsm:top-[190px] sm:top-[270px] md:top-[380px] lg:top-[450px] xl:top-[550px] left-0 xsm:min-h-[70%] w-[100%] min-h-[20%] z-[40px] flex item-center p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-[1.5rem] mb-0 xl:text-[2.3rem] xl:mb-9 lg:text-[2rem] lg:mb-8 md:text-[1.7rem] text-white font-be-vietnam text-center tracking-wide ">
            {currentInvitation.heading}
          </h1>
          <img 
              src={currentInvitation.Img}
              alt="gpgpTile"
              className="p-7"
           />
          <div className="flex flex-row ">
            <button onClick={switchSection} className="mr-2">
              <img src={DotTracker1} alt="0"/>
            </button>
            <button onClick={switchSection}>
              <img src={DotTracker2} alt="0"/>
            </button>
          </div>

          <div className="text-center flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[95%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
            <h3 className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] font-semibold mb-2">
              {currentInvitation.description.head}
            </h3>

            <p className="text-center text-[0.8rem] md:text-[1rem] w-[90%] xl:w-[70%] lg:w-[75%] md:w-[82%] sm:w-[86%] mt-5 md:mt-12">
              {currentInvitation.description.body}
            </p>
          </div>

          <MyLink
             to={currentInvitation.Btn.link}
             className="flex items-center text-gpgp-blue  mt-4 w-[170px] xsm:w-[300px] h-[50px] text-[0.8rem] xsm:text-[1.3rem] py-2 bg-white uppercase xsm:mt-16"
          >
            {currentInvitation.Btn.heading}
          </MyLink>
        </div>
      </div>
    </>
  );
};

export default ContributeInvitation;
