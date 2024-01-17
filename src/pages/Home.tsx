import Hero from "../components/home/Hero";
import Exhibition from "../components/home/Exhibition";
import HomeContent from "../components/home/HomeContent";
import HomeExhibition from "../components/home/HomeExhibition";
import Artist from "../components/home/Artist";
import ContactUs from "../components/ContactUs";
import { useSinglePrismicDocument } from "@prismicio/react";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

const Home = () => {

  const [document] = useSinglePrismicDocument(prismicDocumentTypes.homePage);
  console.log("Home page document: ", document);
  console.log("Home page document hero image src: ", document?.data?.body[0]?.primary?.image?.url);


  return (
    <>
      <div className="md:mt-[157px]">
        <Hero contents={document?.data?.body[0]?.primary}/>

        <Exhibition contents={document?.data?.body[1]?.primary}/>

        <HomeExhibition contents={document?.data?.body[2]?.primary}/>

        <HomeContent />

        <section className="mt-[127px] xl:mt-[250px]">
          <Artist />
        </section>

        <section className="md:hidden mt-[131px]">
          <div className="w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[110px] pb-[57px] font-[be-vietnam] bold-600">
            <h1 className="text-white text-[16px] uppercase text-center leading-[23.602px]">
              Create a better world <br />
              contribute to the global effort
            </h1>
          </div>
        </section>

        <section className="lg:mt-[286px]">
          <ContactUs />
        </section>
      </div>
    </>
  );
};

export default Home;
