import Hero from "../components/Hero";
import Exhibition from "../components/home/Exhibition";
import HomeContent from "../components/home/HomeContent";
import Container from "../components/Container";
import HomeExhibition from "../components/home/HomeExhibition";
import Artist from "../components/home/Artist";
import BackgroundWave from "../components/BackgroundWave";
import ContactUs from "../components/ContactUs";
import About from "../components/project/Abouts";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Exhibition />
      </section>

      <div className="m-0">
        <HomeExhibition />
      </div>

      <Container>
        <HomeContent />
      </Container>

      <Container>
        <Artist />
      </Container>

      <div className="sm:hidden block">
        <div className="font-semibold text-base text-center pt-20 uppercase">
          <p>contribute to the global effort</p>
          <p className="py-3">Create a better world</p>
        </div>
      </div>

      <section>
        <ContactUs />
      </section>
    </>
  );
};

export default Home;
