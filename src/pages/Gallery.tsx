import Container from "../components/Container";
import Information from "../components/gallery/Information";
import GalleryHero from "../components/gallery/GalleryHero";
import Slides from "../components/gallery/Slides";
import Contribution from "../components/Contribution";
import { useSinglePrismicDocument } from "@prismicio/react";

const Gallery = () => {
  const [document] = useSinglePrismicDocument("gallery");
  console.log("Gallery Document:", document?.data["body"][2]);

  return (
    <>
      <Container>
        <GalleryHero contents={document?.data["body"][0].primary} />
      </Container>

      <section>
        <Information contents={document?.data["body"][1].primary}/>
      </section>

      <Container>
        <Slides contents={document?.data["body"][2].items}/>
      </Container>

      <section>
        <Contribution />
      </section>
    </>
  );
};

export default Gallery;
