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
      <div className="xxxl:max-w-[1440px] mx-auto">
        <Hero />

        <Exhibition />

        <HomeExhibition />

        <HomeContent />

        <section className="xl:mt-[250px]">
          <Artist />
        </section>

        {/* <section className="md:hidden mt-[159px]">
          <div className="w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[100px] sm:pt-[190px] md:pt-[200px] md:pb-[100px] md:mt-[70px] xl:pt-[220px] xxl:pt-[300px] xxxl:pt-[440px] xxxxl:pt-[560px] pb-[30px] xxxl:pb-[200px] xxxxl:pb-[200px] font-[be-vietnam-bold]">
            <h1 className="text-[16px] xxl:text-[25px] md:font-[700] uppercase text-white text-center">
              Create a better world <br/>
              contribute to the global effort
            </h1>
            <h3 className="text-[16px] xxl:text-[25px] md:font-[700] uppercase text-white text-center">
             
            </h3>
          </div>
        </section> */}

        <section className="md:hidden mt-[159px]">
          <div className="w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[110px] pb-[57px] font-[be-vietnam-600]">
            <h1 className="text-white text-[16px] uppercase text-center leading-[23.602px]">
              Create a better world <br />
              contribute to the global effort
            </h1>
          </div>
        </section>

        <section className="xl:mt-[286px] ">
          <ContactUs />
        </section>
      </div>
    </>
  );
};

export default Home;
