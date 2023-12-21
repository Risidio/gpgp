import ProjectImg from "../../assets/images/project.png";
// import ProjectWebImg from "../../assets/images/projectweb.jpg";
import ChallengeImg from "../../assets/images/challenge.png";
import ChallengeWebImg from "../../assets/images/challenge.jpg";
import InvitationImg from "../../assets/images/gpgp-tile-home.png";
import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";

// const contents = [
//   {
//     name: "The Project",
//     description:
//       "The GPGP project is an immersive and transformative exhibition that aims to raise awareness, inspire action, and drive positive change regarding plastic pollution, with a specific focus on the Great Pacific Garbage Patch.",
//     Btn: {
//       name: "EXPLORE",
//       link: "/project",
//     },
//     Img: ProjectImg,
//     ImgPos: "left",
//     id: 1,
//     rounded: false,
//   },
//   {
//     name: "The Challenge",
//     description:
//       "Plastics are a major contributor to marine debris. The Great \n Pacific Garbage Patch is a pressing environmental issue that \n requires immediate attention. ",
//     Btn: {
//       name: "SUPPORT",
//       link: "/challenge",
//     },
//     Img: ChallengeImg,
//     ImgPos: "right",
//     id: 2,
//     rounded: false,
//   },
//   {
//     name: "The Invitation",
//     description:
//       "The Great Pacific Garbage Patch offers a unique opportunity \n to channel your artistic talents towards a project. Artists of \n all form - painters, sculptors, photographers are invited to \n submit their works for consideration.",
//     Btn: {
//       name: "TAKE PART",
//       link: "/contribute",
//     },
//     Img: InvitationImg,
//     ImgPos: "left",
//     id: 3,
//     rounded: true,
//   },
// ];
const HomeContent = () => {
  return (
    <>
      {/* <ContentManage contents={contents} /> */}
      <Wrapper>
        <section className="">
          {/* First Content Container */}
          <div className="flex flex-col lg:flex-row mt-[127px] xl:mt-[298px]">
            {/* First Column */}
            <div className="flex flex-col gap-y-[32px] lg:w-full">
              {/* Header */}
              <h3 className="text-center lg:hidden font-[be-vietnam-600] text-[16px] text-[#050B1D] leading-[48px] tracking-[-0.32px] uppercase">
                The Project
              </h3>

              {/* Image */}
              <div className="mx-auto xl:pl-[125px]">
                <img
                  src={ProjectImg}
                  alt="GPGP Blue"
                  className="xl:hidden w-[190px] h-[190px] lg:w-[582px] lg:h-[582px] lg:rounded-[20px]"
                />
                <img
                  src={ProjectImg}
                  alt="GPGP Blue"
                  className="hidden xl:block w-[190px] h-[190px] lg:w-[582px] lg:h-auto lg:rounded-[20px]"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="mt-[29px] lg:mt-0 lg:w-full flex flex-col justify-center items-center xl:items-start xl:pl-[121px]">
              <div className=" flex flex-col gap-y-[59px]">
                <h3 className="hidden xl:block text-gpgp-black font-[be-vietnam-600] text-[40px] leading-[48px] tracking-[-0.8px]">
                  The Project
                </h3>

                <p className="w-[288px] lg:w-[484px] text-center xl:text-left text-[15px] lg:text-[16px] leading-[30px] xl:leading-[32px] mx-auto xl:mx-0 text-[#050B1D] font-[be-vietnam]">
                  The GPGP project is an immersive and transformative exhibition
                  that aims to raise awareness, inspire action, and drive
                  positive change regarding plastic pollution, with a specific
                  focus on the Great Pacific Garbage Patch.
                </p>
              </div>

              {/* Join Us Btn */}
              <div className="flex flex-row gap-x-[12px] px-[19px] xl:px-0 mt-[35px] xl:mt-[59px]">
                <MyLink
                  to="/project"
                  className="bg-gpgp-blue xl:bg-white w-[187px] h-[40px] xl:w-[223px] xl:h-[63px]"
                >
                  <p className="text-white text-[15px] xl:text-[16px] xl:text-gpgp-blue uppercase leading-[22.126px] xl:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] xl:tracking-[4.4px]">
                    <span className="hidden xl:inline">Explore</span>
                    <span className="lg:hidden">Learn More</span>
                  </p>
                </MyLink>
              </div>
            </div>
          </div>

          {/* Second Content Container */}
          <div className="flex flex-col lg:flex-row-reverse mt-[127px] xl:mt-[293px]">
            {/* First Column */}
            <div className="flex flex-col gap-y-[32px] lg:w-full">
              {/* Header */}
              <h3 className="text-center lg:hidden font-[be-vietnam-600] text-[16px] text-[#050B1D] leading-[48px] tracking-[-0.32px] uppercase">
                THE CHALLENGE
              </h3>

              {/* Image */}
              <div className="mx-auto lg:pr-[150px]">
                <img
                  src={ChallengeImg}
                  alt="Challenge"
                  className="xl:hidden w-[190px] h-[190px] lg:w-[585px] lg:h-[439px] lg:rounded-[20px]"
                />
                <img
                  src={ChallengeWebImg}
                  alt="Challenge"
                  className="border-[3px] border-solid border-gpgp-blue hidden xl:block w-[190px] h-auto lg:w-[585px] lg:h-auto lg:rounded-[20px]"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="mt-[29px] lg:mt-0 lg:w-full flex flex-col justify-center items-center xl:items-start xl:pl-[121px]">
              <div className=" flex flex-col gap-y-[59px]">
                <h3 className="hidden xl:block text-gpgp-black font-[be-vietnam-600] text-[40px] leading-[48px] tracking-[-0.8px]">
                  THE CHALLENGE
                </h3>

                <p className="w-[288px] lg:w-[484px] text-center xl:text-left text-[15px] lg:text-[16px] leading-[30px] xl:leading-[32px] mx-auto xl:mx-0 text-[#050B1D] font-[be-vietnam]">
                  Plastics are a major contributor to marine debris. The Great
                  Pacific Garbage Patch is a pressing environmental issue that
                  requires immediate attention.
                </p>
              </div>

              {/* Join Us Btn */}
              <div className="flex flex-row gap-x-[12px] px-[19px] xl:px-0 mt-[35px] xl:mt-[59px]">
                <MyLink
                  to="/challenge"
                  className="bg-gpgp-blue xl:bg-white w-[187px] h-[40px] xl:w-[223px] xl:h-[63px]"
                >
                  <p className="text-white xl:text-gpgp-blue text-[15px] xl:text-[16px] uppercase leading-[22.126px] xl:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] xl:tracking-[4.4px]">
                    <span className="">Support</span>
                  </p>
                </MyLink>
              </div>
            </div>
          </div>

          {/* Third Content Container */}
          <div className="flex flex-col lg:flex-row mb-[50px] xl:mb-0 mt-[127px] xl:mt-[293px]">
            {/* First Column */}
            <div className="flex flex-col gap-y-[32px] lg:w-full">
              {/* Header */}
              <h3 className="text-center lg:hidden font-[be-vietnam-600] text-[16px] text-[#050B1D] leading-[48px] tracking-[-0.32px] uppercase">
                The Invitation
              </h3>

              {/* Image */}
              <div className="mx-auto xl:mx-0 xl:pl-[128px] xl:my-auto">
                <img
                  src={InvitationImg}
                  alt="GPGP Map"
                  className="w-[293px] h-[169px] lg:w-[583.489px] lg:h-auto rounded-[20px]"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="mt-[29px] lg:mt-0 lg:w-full flex flex-col justify-center items-center xl:items-start xl:pl-[121px]">
              <div className=" flex flex-col gap-y-[59px]">
                <h3 className="hidden xl:block text-gpgp-black font-[be-vietnam-600] text-[40px] leading-[48px] tracking-[-0.8px] uppercase">
                  The Invitation
                </h3>

                <p className="w-[288px] lg:w-[484px] text-center xl:text-left text-[15px] lg:text-[16px] leading-[30px] xl:leading-[32px] mx-auto xl:mx-0 text-[#050B1D] font-[be-vietnam]">
                  The Great Pacific Garbage Patch offers a unique opportunity to
                  channel your artistic talents towards a project. Artists of
                  all form - painters, sculptors, photographers are invited to
                  submit their works for consideration.
                </p>
              </div>

              {/* Join Us Btn */}
              <div className="flex flex-row gap-x-[12px] px-[19px] xl:px-0 mt-[35px] xl:mt-[59px]">
                <MyLink
                  to="/contribute"
                  className="bg-gpgp-blue xl:bg-white w-[187px] h-[40px] xl:w-[223px] xl:h-[63px]"
                >
                  <p className="text-white xl:text-gpgp-blue text-[15px] xl:text-[16px] uppercase leading-[22.126px] xl:leading-[23.602px] font-[be-vietnam-600] tracking-[4.125px] xl:tracking-[4.4px]">
                    <span className="">Take Part</span>
                  </p>
                </MyLink>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default HomeContent;
