import MyLink from "../base/MyLink";
import Wrapper from "../layout/Wrapper";
import HomeContentSection1 from "./HomeContentSection1";
import HomeContentSection2 from "./HomeContentSection2";
import HomeContentSection3 from "./HomeContentSection3";
import { IHomeContentSectionProp } from "../../types/home";

const HomeContent = ({ contents }: IHomeContentSectionProp) => {
  return (
    <>
      <Wrapper>
        <section className="">
          {/* First Content Container */}
          <HomeContentSection1 MyLink={MyLink} contents={contents} />

          {/* Second Content Container */}
          <HomeContentSection2 MyLink={MyLink} contents={contents} />

          {/* Third Content Container */}
          <HomeContentSection3 MyLink={MyLink} contents={contents} />
        </section>
      </Wrapper>
    </>
  );
};

export default HomeContent;
