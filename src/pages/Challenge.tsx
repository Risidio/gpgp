import Hero from "../components/challenge/Hero";
import PlasticRevolution from "../components/challenge/PlasticRevolution";
import Section1 from "../components/challenge/Section1";
import Section2 from "../components/challenge/Section2";
import Section3 from "../components/challenge/Section3";
import Section4 from "../components/challenge/Section4";
import Section5 from "../components/challenge/Section5";

const Challenge = () => {
  return (
    <>
      <div className="xxxxl:w-[1440px] xxxxl:mx-auto mt-[60.73px] xl:mt-[89px]">
        {/* <Header /> */}
        <Hero />
        <PlasticRevolution/>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </>
  );
};

export default Challenge;
