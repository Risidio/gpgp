import ProjectImg from "../../assets/images/project.png";
// import ProjectWebImg from "../../assets/images/projectweb.jpg";
import ChallengeImg from "../../assets/images/challenge.png";
import ChallengeWebImg from "../../assets/images/challenge.jpg";
import InvitationImg from "../../assets/images/gpgp-tile-home.png";
import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";
import HomeContentSection1 from "./HomeContentSection1";
import HomeContentSection2 from "./HomeContentSection2";
import HomeContentSection3 from "./HomeContentSection3";

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
          <HomeContentSection1 ProjectImg={ProjectImg} MyLink={MyLink} />

          {/* Second Content Container */}
          <HomeContentSection2
            ChallengeImg={ChallengeImg}
            ChallengeWebImg={ChallengeWebImg}
            MyLink={MyLink}
          />

          {/* Third Content Container */}
          <HomeContentSection3 InvitationImg={InvitationImg} MyLink={MyLink} />
        </section>
      </Wrapper>
    </>
  );
};

export default HomeContent;
