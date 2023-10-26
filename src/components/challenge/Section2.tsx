import TrashedPlasticObjects from "../../assets/images/trashedPlasticObjects.jpg";

const Section2 = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:border-y-[1px] md:border-gpgp-blue">
        <div className="w-full h-[602px]">
          <img
            src={TrashedPlasticObjects}
            className="md:w-[740px] md:h-[100%]"
            alt="Trashed Plastic Objects"
          />
        </div>
        <div className="">
          <div className="flex flex-col items-center gap-y-[20px] mt-[80px] justify-center ml-[64px] mr-[87px]">
            <p className="text-[#050B1D] font-be-vietnam text-base leading-[200%] tracking-[-0.32px]">
              The problem of plastic ending up in oceans affects countries and
              regions around the world. It is a global issue that impacts marine
              life, ecosystems, and human populations. Countries with extensive
              coastlines, high population density, and inadequate waste
              management systems are particularly affected.
            </p>
            <p className="text-[#050B1D] font-be-vietnam text-base leading-[200%] tracking-[-0.32px]">
              Some of the major contributors to plastic pollution in oceans
              include highly populated countries with rapidly growing economies
              and inadequate waste disposal infrastructure, such as <b>China,
              Indonesia, the Philippines, Vietnam, and Thailand.
            </b></p>
            <p className="text-[#050B1D] font-be-vietnam text-base leading-[200%] tracking-[-0.32px]">
              Communities located near coastlines and rivers are particularly
              affected by the problem of plastic pollution in oceans. These
              communities often bear the brunt of plastic debris washing up on
              their shores, impacting their environment, economies, and overall
              well-being.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
