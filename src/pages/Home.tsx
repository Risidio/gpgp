import Hero from "../components/home/Hero";
import Exhibition from "../components/home/Exhibition";
import HomeContent from "../components/home/HomeContent";
import HomeExhibition from "../components/home/HomeExhibition";
import Artist from "../components/home/Artist";
import ContactUs from "../components/ContactUs";
import { useSinglePrismicDocument } from "@prismicio/react";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";
import Wave from "../components/home/Wave";

const Home = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.homePage);
  // console.log("Home page document: ", document);
  // console.log("Home page document hero image src: ", document?.data?.body[0]?.primary?.image?.url);
  // console.log("Artistcontent: ", document?.data?.body[4]?.primary);

  return (
    <>
      <div className="md:mt-[157px]">
        <Hero contents={document?.data?.body[0]?.primary} />

        <Exhibition contents={document?.data?.body[1]?.primary} />

        <HomeExhibition contents={document?.data?.body[2]?.primary} />

        <HomeContent contents={document?.data?.body[3]?.primary} />

        <section className="mt-[127px] xl:mt-[250px]">
          <Artist contents={document?.data?.body[4]?.primary} />
        </section>

        <section className="md:hidden mt-[131px]">
          <Wave contents={document?.data?.body[5]?.primary} />
        </section>

        <section className="lg:mt-[286px]">
          <ContactUs />
        </section>
      </div>
    </>
  );
};

export default Home;
