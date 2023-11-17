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
      <section className="my-5 xxxl:mx-3">
        <Hero />
      </section>

      <section>
        <Exhibition />
      </section>

      <div>
        <HomeExhibition />
      </div>

      <section>
        <HomeContent />
      </section>

      <Container>
        <Artist />
      </Container>

      <section>
        <Contribution/>
      </section>

      <section>
        <ContactUs />
      </section>
    </>
  );
};

export default Home;
