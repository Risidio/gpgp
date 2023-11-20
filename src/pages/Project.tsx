import Container from "../components/Container";
import About from "../components/project/Abouts";
import ArtistSection from "../components/project/ArtistSection";
import Attention from "../components/project/Attention";
import Exhibition from "../components/project/Exhibition";
import GpgpSection from "../components/project/GpgpSection";
import ProjectHero from "../components/project/ProjectHero";
import JoinUs from '../components/project/JoinUs';
import Contribution from "../components/Contribution";
import { useSinglePrismicDocument } from "@prismicio/react";

const Project = () => {

  const [document] = useSinglePrismicDocument("project");
  console.log(document?.data["body"][5].primary);
  return (
    <>
      <Container>
        <ProjectHero contents={document?.data["body"][0].primary}/>
      </Container>

      <section>
        <About contents={document?.data["body"][1].primary}/>
      </section>

      <section>
        <GpgpSection contents={document?.data["body"][2].primary}/>
      </section>

      <section>
        <Attention contents={document?.data["body"][3].primary}/>
      </section>

      <section>
        <Exhibition contents={document?.data["body"][4].primary}/>
      </section>

      <section>
        <ArtistSection/>
      </section>

      <section>
        <JoinUs contents={document?.data["body"][6].primary}/>
      </section>

      <section>
        <Contribution/>
      </section>
    </>
  );
};

export default Project;
