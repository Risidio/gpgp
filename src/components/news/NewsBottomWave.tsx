import React from "react";

export default function NewsBottomWave() {
  return (
    <>
      {/* Mobile Version */}
      <div className=" w-[100%] xxl:w-[100%] xxxxl:w-[100%] h-[100%] bg-project-page-wave bg-no-repeat bg-cover flex flex-col justify-center items-center pt-[100px] sm:pt-[190px] md:pt-[200px] md:pb-[100px] md:mt-[70px] xl:pt-[220px] xxl:pt-[300px] xxxl:pt-[440px] xxxxl:pt-[560px] pb-[30px] xxxl:pb-[200px] xxxxl:pb-[200px] font-[be-vietnam-bold]">
        <h1 className="md:hidden text-[16px] xxl:text-[25px] md:font-[700] uppercase text-white text-center">
          Create a better world
        </h1>
        <h3 className=" md:hidden text-[16px] xxl:text-[25px] md:font-[700] uppercase text-white text-center">
          contribute to the global effort
        </h3>
      </div>
    </>
  );
}
