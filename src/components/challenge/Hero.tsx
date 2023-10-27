const Hero = () => {
  return (
    <>
      <div className="w-[100%] border-y-[4px] bg-[length:100%_100%] bg-flat-lay-assortment md:bg-none md:border-y-[0px] border-gpgp-blue">
        <div className="w-[100%] md:bg-[white] py-[70px] md:py-none px-[40px] md:px-none md:p-none text-center">
          <h1 className="uppercase text-[white] md:mt-[100px] md:mb-[30px] md:text-[#050B1D] text-center font-be-vietnam text-[20px] md:text-4xl font-bold leading-[35.40px] md:leading-[147.51%] md:normal-case">Plastic revolution</h1>
        </div>
        <div className="w-full bg-white md:bg-blue-plastic-bag md:bg-no-repeat bg-[length:100%] md:bg-[length:100%_790px] backdrop-blur-md">
          <div className="w-full flex flex-col items-center gap-y-[20px] md:gap-y-[60px] px-[23px] md:px-[419px] pt-[35px] md:pt-[21px] pb-[40px] md:pb-[171px]">
            <p className="text-center text-[#050B1D] font-be-vietnam md:text-base text-[16px] md:font-medium leading-[200%] tracking-[-0.4px]">
              When first invented, plastic was seen as revolutionary because it
              offered a cheap, durable, hygienic product that could be used for
              a variety of purposes. However, the ever-increasing production
              would cause unforeseen consequences. Especially concerning is what
              plastics are made from.
            </p>
            <p className="text-center text-[#050B1D] font-be-vietnam md:text-base text-[16px] md:font-medium leading-[200%] tracking-[-0.32px]">
              Almost all single-use plastics are made from fossil fuels. So, the
              carbon footprint of the plastics is vast, by one estimate,
              emissions from producing and incinerating plastics could amount to
              56 gigatons of carbon — almost 50 times the annual emissions of
              all of the coal power plants.
            </p>
            <p className="text-center text-[#050B1D] text-[16px] font-be-vietnam md:text-base md:font-medium leading-[200%] tracking-[-0.32px]">
              Plastic is a complex material which is durable and can be broken
              down easily in order to decompose. But can never completely break
              down, in fact, every piece ever made still exists today in the
              form of smaller and weaker pieces known as microplastics, which
              are smaller than 5mm.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
