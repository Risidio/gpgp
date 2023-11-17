import Container from "../components/Container";
import Information from "../components/gallery/Information";
import GalleryHero from "../components/gallery/GalleryHero";
import Slides from "../components/gallery/Slides";
import Contribution from "../components/Contribution";

const Gallery = () => {
  return (
    <>
      <Container>
         <GalleryHero />
      </Container>

      <section>
        <Information />
      </section>

      <Container>
         <Slides/>
      </Container>

      <section>
        <Contribution/>
      </section>
    </>
  );
};

export default Gallery;
