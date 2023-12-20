import TrashedPlasticObjects from "../../assets/images/trashedPlasticObjectsMobile.jpg";

const Section2 = () => {
  return (
    <>
      {/* <section className="mt-[100px] xl:mt-[368px] xl:grid xl:grid-cols-2 xl:gap-x-[100px] xxl:gap-x-[128px] xl:px-[50px] xxl:px-[80px]"> */}
      {/* <section className="mt-[100px] xl:mt-[368px] xl:flex xl:gap-x-[130px] xl:ml-[80px]"> */}
      <section className="mt-[100px] xl:mt-[368px] xl:flex xl:gap-x-[130px] xl:w-[1440px] xl:mx-[auto]">
        <div className="">
          <h3 className="xl:hidden w-[160px] text-[#050B1D] text-center font-[be-vietnam-700] uppercase mx-auto text-[16px]">Who is facing the consequences of plastics?</h3>
          {/* Image */}
          <div className="mt-[39px] flex justify-center xl:items-start xl:mt-[5px]">
            <img 
            src={TrashedPlasticObjects} 
            alt="Trashed Plastic Objects"
            className="w-[293px] h-[199px] xl:w-[630px] xl:rounded-[20px] xl:h-[630px]" />
          </div>
        </div>

        {/* Contents */}
        <div className="mt-[36px] xl:mt-0 w-[293px] xl:w-[556px] text-center xl:text-left text-[#050B1D] mx-auto xxl:mx-0 font-[be-vietnam] bold-400">
          
          <h3 className="hidden xl:block text-[36px] leading-[53.104px] text-[#050B1D] font-[be-vietnam] font-[700] xl:mt-[-19.5px]">
            Who is facing the consequences of plastics?
            </h3>
          
          <p className="tracking-[0.5px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] xl:mt-[62px] xl:w-[523px]">
            The problem of plastic ending up in oceans affects countries and
            regions around the world. It is a global issue that impacts marine
            life, ecosystems,and human populations. Countries with extensive
            coastlines, high population density, and inadequate waste management
            systems areparticularly affected.
          </p>
          <p className="mt-[25px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] xl:w-[523px]">
            Some of the major contributors to plastic pollution in oceans
            include highly populated countries with rapidly growing economies
            and inadequate waste disposal infrastructure, such as <b>China,
            Indonesia, the Philippines, Vietnam, and Thailand.</b>
          </p>
          <p className="mt-[25px] tracking-[0.5px] text-[15px] xl:text-[16px] leading-[30px] xl:leading-[32px] xl:tracking-[-0.32px] xl:w-[523px]">
            Communities located near coastlines and rivers are particularly
            affected by the problem of plastic pollution in oceans. These
            communities often bear the brunt of plastic debris washing up on
            their shores, impacting their environment, economies, and overall
            well-being.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section2;
