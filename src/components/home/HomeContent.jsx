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
import {IHomeContentSectionProp} from "../../types/home";


const HomeContent = ({contents}:IHomeContentSectionProp) => {
  return (
    <>
      <Wrapper>
        <section className="">
          {/* First Content Container */}
          <HomeContentSection1 ProjectImg={ProjectImg} MyLink={MyLink} contents={contents} />

          {/* Second Content Container */}
          <HomeContentSection2
            ChallengeImg={ChallengeImg}
            ChallengeWebImg={ChallengeWebImg}
            MyLink={MyLink}
            contents={contents}
          />

          {/* Third Content Container */}
          <HomeContentSection3 InvitationImg={InvitationImg} MyLink={MyLink} contents={contents}/>
        </section>
      </Wrapper>
    </>
  );
};

export default HomeContent;
