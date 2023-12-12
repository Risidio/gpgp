import React from "react";

export default function InviteHero({
  heading,
}: {
  heading: string | undefined;
}) {

  return (
    <div>
      <div className="w-full flex flex-col justify-center text-center items-center text-gpgp-blue pt-12 ">
        <h3 className="text-[1rem] uppercase font-bold xxsm:text-[1rem]  md:text-[1.4rem]  xl:text-[1.5rem]  xxxxl:text-[1.9rem]  
       tracking-[0.3rem]  sm:tracking-[0.4rem]  xxl:tracking-[0.4rem] xxxxl:tracking-[0.5rem]
        ">You’re an {heading ===  "Sponsor"? "Investor": heading}</h3>
        <h1 className="text-[1.2rem] mt-[9px] sm:mt-[0px] font-semibold xxsm:text-[1.5rem]  md:text-[3rem]  xl:text-[3.6rem]  xxxxl:text-[4rem]">
          And you’d like to <span className="text-[#D9BF4F] underline"> Contribute</span>
        </h1>
        <p className="font-semibold  hidden sm:block  sm:text-[1.2rem]   xl:text-[1.4rem] xxxxl:text-[1.7rem] mt-4">
          Reach out to us for further discussions about sponsorship and
          partnership opportunities
        </p>
      </div>
    </div>
  );
}
