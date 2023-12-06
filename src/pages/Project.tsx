import Container from "../components/Container";
import About from "../components/project/Abouts";
import ArtistSection from "../components/project/ArtistSection";
import Attention from "../components/project/Attention";
import Exhibition from "../components/project/Exhibition";
import GpgpSection from "../components/project/GpgpSection";
import ProjectHero from "../components/project/ProjectHero";
import JoinUs from "../components/project/JoinUs";
import { useSinglePrismicDocument } from "@prismicio/react";

const Project = () => {
  const [document] = useSinglePrismicDocument("project");
  return (
    <>
      <div className="xxxxl:max-w-[2560px] xxxxl:mx-auto">
        {/* <Container>
          <ProjectHero contents={document?.data["body"][0].primary} />
        </Container> */}

        {/* <section>
          <About contents={document?.data["body"][1].primary} />
        </section> */}

        <section>
          <GpgpSection contents={document?.data["body"][2].primary} />
        </section>

        <section>
          <Attention contents={document?.data["body"][3].primary} />
        </section>

        <section>
          <Exhibition contents={document?.data["body"][4].primary} />
        </section>

        <section>
          <ArtistSection />
        </section>

        <section>
          <JoinUs contents={document?.data["body"][6].primary} />
        </section>

        <section>
          <div className="w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[100px] sm:pt-[190px] md:pt-[200px] md:pb-[100px] md:mt-[70px] xl:pt-[240px] xxl:pt-[300px] xxxl:pt-[440px] xxxxl:pt-[560px] pb-[30px] xxxl:pb-[200px] xxxxl:pb-[200px] font-[be-vietnam-bold]">
            <h1 className="font-[be-vietnam] text-[16px] xxl:text-[36px] md:font-[700] uppercase text-white text-center">
              contribute to the global effort <br />
              Create a better world
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
