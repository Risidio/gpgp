import TrashedPlasticObjects from "../../assets/images/trashedPlasticObjects.jpg";

const Section2 = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center md:p-[100px]">
          <h1 className="hidden md:block text-[#050B1D] text-center font-be-vietnam md:text-4xl font-bold leading-[147.51%]">
            Who is facing the consequences of plastics?
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:border-y-[1px] md:border-gpgp-blue">
          <div className="w-full h-[200px] md:h-full order-1 bg-trashed-plastics md:bg-none md:border-y-[0px] border-gpgp-blue">
            <img
              src={TrashedPlasticObjects}
              className="hidden md:block w-full h-full md:w-[740px] lg:w-full"
              alt="Trashed Plastic Objects"
            />
            <div className="md:hidden w-full h-full inset-0 bg-black bg-opacity-30">
              <div className="md:hidden w-full h-full flex flex-col justify-center items center">
                <h1 className="text-center text-white text-[32px] uppercase font-bold leading-[32px]">
                  Who is facing <br />
                  the consequences of plastics?
                </h1>
              </div>
            </div>
          </div>
          <div className="order-2 mb-[65px] md:mb-none">
            <div className="flex flex-col items-center gap-y-[20px] mt-[35px] mx-[23px] md:mt-[80px] justify-center md:ml-[64px] md:mr-[87px] md:pb-[40px]">
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.32px]">
                The problem of plastic ending up in oceans affects countries and
                regions around the world. It is a global issue that impacts
                marine life, ecosystems, and human populations. Countries with
                extensive coastlines, high population density, and inadequate
                waste management systems are particularly affected.
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.65px]">
                Some of the major contributors to plastic pollution in oceans
                include highly populated countries with rapidly growing
                economies and inadequate waste disposal infrastructure, such as{" "}
                <b>China, Indonesia, the Philippines, Vietnam, and Thailand.</b>
              </p>
              <p className="text-center md:text-left text-[#050B1D] font-be-vietnam text-[15px] lg:text-[22px] xl:text-[26px] xxl:text-[30px] md:text-base leading-[200%] lg:leading-[30px] xl:leading-[40px] xxl:leading-[45px] xxxl:leading-[50px] xxxxl:leading-[60px] tracking-[-0.65px]">
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
