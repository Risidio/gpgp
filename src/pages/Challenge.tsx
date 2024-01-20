import { useSinglePrismicDocument } from "@prismicio/react";
import Hero from "../components/challenge/Hero";
import PlasticRevolution from "../components/challenge/PlasticRevolution";
import Section1 from "../components/challenge/Section1";
import Section2 from "../components/challenge/Section2";
import Section3 from "../components/challenge/Section3";
import Section4 from "../components/challenge/Section4";
import Section5 from "../components/challenge/Section5";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

const Challenge = () => {
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.challenge);
  const [document2] = useSinglePrismicDocument(prismicDocumentTypes.homePage);

  console.log("challenge: ", document);
  
  return (
    <>
      <div className="mt-[60.73px] xl:mt-[89px]">
        <Hero contents={document?.data?.body[0]?.primary}/>
        <PlasticRevolution contents={document?.data?.body[1]?.primary}/>
        <Section1 contents={document?.data?.body[2]?.primary}/>
        <Section2 contents={document?.data?.body[3]?.primary}/>
        <Section3 contents={document?.data?.body[4]?.primary}/>
        <Section4 contents={document?.data?.body[5]?.primary}/>
        <Section5 contents={document2?.data?.body[5]?.primary}/>
      </div>
    </>
  );
};

export default Challenge;
