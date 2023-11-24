import { Link } from "react-router-dom";

interface ContributeHeroProps {
  HeroContent: {
    heading: string;
    subheading?: string;
    HeroLegend?: string[];
  };
  classes: {
    container?: string;
    image?: string;
    heading?: string;
    subheading?: string;
    paragraph?: string;
  };
}

export default function NewContributeHero({
  HeroContent,
  classes: {
    container = "",
    image = "",
    heading = "",
    subheading = "",
    paragraph = "",
  },
}: ContributeHeroProps) {
  return (
    <div className=" flex flex-col justify-center items-center mb-[-150px] z-60 ">
      <div className="flex flex-col items-center md:flex-row gap-x-[-60px] w-[100%] mt-16">
        <div className="w-[50%] md:pl-[80px] lg:pl-[150px] xlg:mr-[-45px]   flex text-center md:text-right flex-col justify-center items-center uppercase">
          <div className=" w-[100%] xlg:w-[80%] ">
            <h2 className="text-[1.3rem] xsm:text-[1.5rem] md:text-[2.5rem] xlg:text-[3rem]  md:mb-[-20px] text-gpgp-blue font-extrabold">
              Contribute to
            </h2>
            <span
              className="md:pl-[4px] text-[1.3rem] xsm:text-[1.5rem] md:text-[2.5rem] xlg:text-[3rem] w-max text-white font-bold"
              style={{ WebkitTextStroke: "1px #0A2471" }}
            >
              The global effort
            </span>
          </div>

          <div className=" w-[100%] xlg:w-[80%] mb-[10px]">
            <h2 className="text-[2rem] xsm:text-[3rem] md:text-[4rem] xlg:text-[5rem] md:mb-[-20px] text-gpgp-blue tracking-wider font-extrabold">
              Create
            </h2>
            <span
              className="md:pl-[4px] text-[1.3rem] xsm:text-[1.5rem] md:text-[2.5rem] xlg:text-[3rem] text-white font-bold "
              style={{ WebkitTextStroke: "1px #0A2471" }}
            >
              A better world
            </span>
          </div>
        </div>

        <div className=" w-[60%] flex justify-center text-center md:text-left  items-center flex-col md:pl-[4rem] md:pr-[6rem] lg:pl-0 lg:pr-[13rem]">
          {HeroContent &&
            HeroContent?.HeroLegend?.map((item, index) => (
              <p
                className={` text-[1rem]  w-[140%] sm:text-[1.2rem] xsm:w-[120%] sm:w-[130%] font-be-vietnam mb-5 tracking-normal sm:tracking-wide z-8 md:z-10 opacity-100 ${paragraph}`}
                key={index}
              >
                {item}
              </p>
            ))}
        </div>
      </div>
      <div className=" flex w-full ">
        <div className="flex  w-[100%] flex-col justify-end items-center md:items-end md:pr-[240px] ">
          <Link to={"/contribute/inviteSponsor"} className="border rounded-[7px] border-gpgp-blue text-gpgp-blue font-semibold w-[75%] sm:w-[60%] lg:w-[45%] text-center h-[55px] flex justify-center items-center mt-3 mb-5 uppercase sm:tracking-[0.1rem] lg:tracking-[0.3rem] hover:shadow-lg " >COntribute as an investor</Link>
          <Link to={"/contribute/inviteArtist"} className="rounded-[7px] bg-gpgp-blue text-white font-semibold w-[75%] sm:w-[60%] lg:w-[45%] text-center h-[55px] flex justify-center items-center mt-3 mb-5 uppercase sm:tracking-[0.1rem] lg:tracking-[0.3rem] hover:shadow-lg">COntribute as an artist</Link>
        </div>
      </div>
    </div>
  );
}
