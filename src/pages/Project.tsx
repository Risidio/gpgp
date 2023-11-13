import Container from "../components/Container";
import About from "../components/project/Abouts";
import ArtistSection from "../components/project/ArtistSection";
import Attention from "../components/project/Attention";
import ContributionSection from "../components/project/Contribution";
import Exhibition from "../components/project/Exhibition";
import GpgpSection from "../components/project/GpgpSection";
import ProjectHero from "../components/project/ProjectHero";
import JoinUs from '../components/project/JoinUs';

const Project = () => {
  return (
    <>
      <Container>
        <ProjectHero />
      </Container>

      <section>
        <About />
      </section>

      <section>
        <GpgpSection/>
      </section>

      <section>
        <Attention/>
      </section>

      <section>
        <Exhibition/>
      </section>

      <section>
        <ArtistSection/>
      </section>

      <section>
        <JoinUs/>
      </section>

      <section>
        <ContributionSection classes={{
          container: "",
          heading: "",
          subheading: ""
         
        }}/>
      </section>
    </>
  );
};

export default Project;
