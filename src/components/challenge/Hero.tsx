const Hero = () => {
  return (
    <>
      <div className="w-[100%] border-y-[4px] bg-[length:100%_100%] md:bg-none md:border-y-[0px] border-gpgp-blue lg:mt-[34px]">
        <div className="flex flex-col md:flex-row md:max-w-[1400px] gap-0 md:gap-[81px] mx-auto justify-center  mt-[60.7px] lg:mt[0px]">
          <div className="w-full md:w-[398px] lg:w-[398px] order-first md:order-last md:mt-[40px]">
            <div className="w-full flex flex-col h-[90px] md:h-[unset] uppercase font-[be-vietnam-700] md:font-[be-vietnam-800]">
              <div className="text-[32px] md:text-[80px] text-center md:text-left text-[#0A2471] leading-[140%] md:leading-[90px]">
                The art <span className="challenge-hero">inspiring</span>{" "}
              </div>
              <div className="text-[32px] md:text-[80px] text-center md:text-left text-[#0A2471] leading-[140%] md:leading-[90px]">
                <span className="hidden md:block">global</span>{" "}
                <span className="md:hidden challenge-hero">global</span>{" "}
                <span className="hidden md:block challenge-hero">action</span>
                <span className="md:hidden">action</span>{" "}
              </div>
            </div>
          </div>

          <div className="w-[293px] md:w-[413px]  md:block mx-auto md:mx-[unset] flex flex-col justify-center items-center order-last md:order-first mt-[17px]">
            <div className="py-[17px]">
              <p className="font-[be-vietnam-semibold] text-[16px] leading-[200%] font-[400] md:font-[600] text-center md:text-left">
                Imagine a vast floating island of discarded plastic waste{" "}
                <span className="text-[#0A2471]">twice the size of Texas</span>,
                right in the heart of the Pacific Ocean – the Great Pacific
                Garbage Patch Challenge is not just an environmental mission,
                but <span className="text-[#0A2471]">a call to action</span> to
                reclaim and restore our planet's most precious resource.
              </p>
            </div>
            <div className="w-full mt-[29px] lg:mt-[14px]">
              {/* <button className="flex flex-col justify-center w-full h-[63px] text-[16px] uppercase border border-1 border-[#0A2471] rounded-[5px] font-[be-vietnam-semibold] text-[#0A2471] tracking-[5px]"> */}
              <button className="flex flex-col justify-center px-[14px] py-[7px] w-[216px] md:w-full  h-[49px] md:h-[63px] text-[11px] md:text-[16px] uppercase border border-1 border-[#0A2471] rounded-[2px] md:rounded-[5px] font-[be-vietnam-700]  text-[#0A2471] tracking-[3.03px] md:tracking-[4.4px] leading-[147%] md:leading-[147%] mx-[auto] md:mx-0">
                <div className="w-[189px] md:w-[100%] h-[35px] md:h-[24px] text-[#0A2471]">
                <span className="">contribute</span>{" "}
                <span className="mx-auto block md:hidden">as an investors</span>
                </div>
              </button>
              <button className="hidden md:block w-full h-[63px] text-[16px] uppercase border border-1 border-[#0A2471] rounded-[5px] font-[be-vietnam-semibold] text-white tracking-[5px] bg-[#0A2471] mt-[12px]">
                contact us
              </button>
              {/* <button className="block md:hidden w-full h-[63px] flex flex-col justify-center text-[16px] uppercase border border-1 border-[#0A2471] rounded-[5px] font-[be-vietnam-semibold] text-white tracking-[5px] bg-[#0A2471] mt-[12px]"> */}
              <button className="md:hidden flex flex-col justify-center px-[14px] py-[7px] w-[216px] md:w-full  h-[49px] md:h-[63px] text-[11px] md:text-[16px] uppercase border border-1 border-[#0A2471] rounded-[2px] md:rounded-[5px] font-[be-vietnam-700]  text-white tracking-[3.03px] md:tracking-[4.4px] leading-[147%] md:leading-[147px] bg-[#0A2471] mx-[auto] md:mx-0 mt-[16px]">
              <div className="w-[189px] h-[35px]">
                <span className="mx-auto">contribute</span>{" "}
                <span className="mx-auto">as an artist</span>
              </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-[29px] bg-h-[100%] bg-w-[100%] bg-challenge-mobile-bg-wave  bg-no-repeat bg-no-repeat bg-cover pt-[132px] md:pt-[271px]">
          <div className="w-[293px] md:w-[542px] flex flex-col items-center mx-[auto] pt-[35px] md:pt-[21px]  pb-[66px] md:pb-[196px]">
            <h1 className="md:block uppercase md:normal-case text-[white] md:mt-[100px] text-center font-[be-vietnam] text-[20px] md:text-[36px] leading-[35.40px] md:leading-[147.51%]">
              Plastic revolution
            </h1>
            <div className="flex flex-col mt-[31px] md:mt-[68px] gap-[20px] md:gap-[68px]">
            {/* <p className="text-center text-white font-be-vietnam tracking-[-0.3px] md:tracking-[-0.32px] font-normal md:text-base text-[15px] md:text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[140%] md:leading-[170%] lg:leading-[200%] xl:leading-[220%] sm:leading-[30px]"> */}
            <p className="text-center text-white font-be-vietnam font-normal md:font-medium tracking-[-0.3px] md:tracking-[-0.32px] text-[15px] md:text-[16px] leading-[140%] md:leading-[200%]">
              When first invented, plastic was seen as revolutionary because it
              offered a cheap, durable, hygienic product that could be used for
              a variety of purposes. However, the ever-increasing production
              would cause unforeseen consequences. Especially concerning is what
              plastics are made from.
            </p>
            <p className="text-center text-white font-be-vietnam font-normal md:font-medium tracking-[-0.3px] md:tracking-[-0.32px]  text-[15px] md:text-[16px] leading-[140%] md:leading-[200%]">
              Almost all single-use plastics are made from fossil fuels. So, the
              carbon footprint of the plastics is vast, by one estimate,
              emissions from producing and incinerating plastics could amount to
             <span className="font-[be-vietnam-700]"> 56 gigatons of carbon</span> — almost <span className="font-[be-vietnam-700]"> 50 times the annual emissions</span> of
              all of the coal power plants.
            </p>
            <p className="text-center text-white font-be-vietnam font-normal md:font-medium tracking-[-0.3px] md:tracking-[-0.32px]  text-[15px] md:text-[16px] leading-[140%] md:leading-[200%]">
              Plastic is a complex material which is durable and can be broken
              down easily in order to decompose. But can <span className="font-[be-vietnam-700]">never completely break
              down</span>, in fact, every <span className="font-[be-vietnam-700]">piece ever made still exists today</span> in the
              form of smaller and weaker pieces known as microplastics, which
              are smaller than 5mm.
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
