import TrashedPlasticObjects from "../../assets/images/trashedPlasticObjects.png";
import TrashedPlasticsObjectMobile from "../../assets/images/trashed-plastic-objects-mobile.png"

const Section2 = () => {
  return (
    <>
      <div className="pb-[0px] md:pb-none">
        <div className="grid md:grid-cols-2">
          {/* <div className="w-full h-[200px] md:w-[630px] md:h-[630px] order-1 md:mx-auto xxl:mx-0 xxl:flex xxl:justify-center xxl:items-center bg-trashed-plastics-mobile md:bg-none"> */}
          <div className="w-full order-1 md:mx-auto xxl:mx-0 xxl:flex xxl:justify-center xxl:items-center  bg-none">
            {/* <div className="md:hidden w-full h-full"> */}
            <div className="md:hidden w-full mt-[100px] mb-[30px]">
              <div className="xxl:hidden w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-center text-black text-[16px] uppercase font-bold leading-[32px]">
                  Who is facing{" "}
                  <h1>
                    {" "}
                    the consequences
                  </h1>
                  <h1>
                    of plastics?
                  </h1>
                </h1>
              </div>
            </div>
            <img
              src={TrashedPlasticObjects}
              className="hidden md:block w-[100%] h-[196px] md:h-[100%]"
              alt="Trashed Plastic Objects"
            />
            <img
              src={TrashedPlasticsObjectMobile}
              className="md:hidden w-[293px] h-[199px] mx-auto"
              alt="Trashed Plastic Objects"
            />
          </div>
          <div className="order-2 flex flex-col xxl:w-full md:mx-auto xxl:mx-0 md:pl-[10px] lg:pl-[35px] md:pr-[10px] lg:pr-[50px]">
            <div className="hidden xxl:block xxl:ml-[20px] md:mt-[50px]">
              <h1 className="text-[#050B1D] font-[be-vietnam-bold] md:text-4xl text-center xxl:text-left font-bold leading-[147.51%]">
                Who is facing the consequences of plastics?
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-[20px] mt-[30px] mx-[23px]">
              <p className="text-center md:text-left text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                The problem of plastic ending up in oceans affects countries and
                regions around the world. It is a global issue that impacts
                marine life, ecosystems, and human populations. Countries with
                extensive coastlines, high population density, and inadequate
                waste management systems are particularly affected.
              </p>
              <p className="text-center xxl:text-left text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                Some of the major contributors to plastic pollution in oceans
                include highly populated countries with rapidly growing
                economies and inadequate waste disposal infrastructure, such as{" "}
                <b>China, Indonesia, the Philippines, Vietnam, and Thailand.</b>
              </p>
              <p className="text-center xxl:text-left text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[200%] md:leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                Communities located near coastlines and rivers are particularly
                affected by the problem of plastic pollution in oceans. These
                communities often bear the brunt of plastic debris washing up on
                their shores, impacting their environment, economies, and
                overall well-being.
              </p>
            </div>
            {/* <div className="flex flex-col items-center gap-y-[20px] mt-[35px] lg:mt-[40px] mx-[23px] lg:mx-[15px] md:mt-[80px] justify-center md:ml-[64px] md:mr-[87px]">
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.32px]">
                The problem of plastic ending up in oceans affects countries and
                regions around the world. It is a global issue that impacts
                marine life, ecosystems, and human populations. Countries with
                extensive coastlines, high population density, and inadequate
                waste management systems are particularly affected.
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.5px]">
                Some of the major contributors to plastic pollution in oceans
                include highly populated countries with rapidly growing
                economies and inadequate waste disposal infrastructure, such as{" "}
                <b>China, Indonesia, the Philippines, Vietnam, and Thailand.</b>
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.7px]">
                Communities located near coastlines and rivers are particularly
                affected by the problem of plastic pollution in oceans. These
                communities often bear the brunt of plastic debris washing up on
                their shores, impacting their environment, economies, and
                overall well-being.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
