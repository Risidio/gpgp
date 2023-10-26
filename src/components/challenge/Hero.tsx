const Hero = () => {
  return (
    <>
      <div className="columns-auto">
        <div className="bg-[white]">
          <h1 className="mt-[100px] mb-[30px] text-[#050B1D] text-center font-be-vietnam text-4xl font-bold leading-[147.51%]">Plastic revolution</h1>
        </div>
        <div className="w-full bg-blue-plastic-bag bg-no-repeat md:bg-[length:100%_790px] backdrop-blur-md">
          <div className="columns-auto flex flex-col items-center gap-y-[60px] px-[419px] pt-[21px] pb-[171px]">
            <p className="text-center text-[#050B1D] text-center font-be-vietnam text-base font-medium leading-[200%] tracking-[-0.4px]">
              When first invented, plastic was seen as revolutionary because it
              offered a cheap, durable, hygienic product that could be used for
              a variety of purposes. However, the ever-increasing production
              would cause unforeseen consequences. Especially concerning is what
              plastics are made from.
            </p>
            <p className="text-center text-[#050B1D] text-center font-be-vietnam text-base font-medium leading-[200%] tracking-[-0.32px]">
              Almost all single-use plastics are made from fossil fuels. So, the
              carbon footprint of the plastics is vast, by one estimate,
              emissions from producing and incinerating plastics could amount to
              56 gigatons of carbon — almost 50 times the annual emissions of
              all of the coal power plants.
            </p>
            <p className="text-center text-[#050B1D] text-center font-be-vietnam text-base font-medium leading-[200%] tracking-[-0.32px]">
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
