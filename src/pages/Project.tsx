import About from "../components/project/Abouts";
import ArtistSection from "../components/project/ArtistSection";
import Attention from "../components/project/Attention";
import GpgpSection from "../components/project/GpgpSection";
import JoinUs from "../components/project/JoinUs";
import { useSinglePrismicDocument } from "@prismicio/react";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

const Project = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.project);
  return (
    <>
      <div className="xxxxl:max-w-[2560px] xxxxl:mx-auto">
        {/* <Container>
          <ProjectHero contents={document?.data["body"][0].primary} />
        </Container> */}

       

        <section>
          <GpgpSection contents={document?.data["body"][2].primary} />
        </section>

        <section>
          <Attention contents={document?.data["body"][3].primary} />
        </section>

        <section>
          <ArtistSection />
        </section>

        <section>
          <JoinUs contents={document?.data["body"][6].primary} />
        </section>

         <section>
          <About contents={document?.data["body"][1].primary} />
        </section>

        
      </div>
    </>
  );
};

export default Project;
