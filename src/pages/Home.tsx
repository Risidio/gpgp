import Hero from "../components/Hero";
import Exhibition from "../components/home/Exhibition";
import HomeContent from "../components/home/HomeContent";
import Container from "../components/Container";
import HomeExhibition from "../components/home/HomeExhibition";
import Artist from "../components/home/Artist";
import ContactUs from "../components/ContactUs";
import Contribution from "../components/Contribution";

const Home = () => {
  return (
    <>
      <div className="xxxxl:max-w-[2560px] xxxxl:mx-auto">
        <Hero />

        <Exhibition />
        
        <HomeExhibition />

        <section>
          <HomeContent />
        </section>

        <Container>
          <Artist />
        </Container>

        <section>
          <Contribution />
        </section>

        <section>
          <ContactUs />
        </section>
      </div>
    </>
  );
};

export default Home;
