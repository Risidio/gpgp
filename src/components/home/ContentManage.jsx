import MyLink from "../base/MyLink";

// This component handles and renders the content passed as props
const ContentManage = ({ contents }) => {
  return (
    <div className="w-full flex flex-col mb-[70px]">
      {contents.map((content) => (
        <div key={content.id}>
          {/* Desktop-view */}
          <div
            className={`lg:flex hidden pt-[200px] px-[80px] w-full flex-col
                                    ${
                                      content.ImgPos === "left"
                                        ? "sm:flex-row"
                                        : "sm:flex-row-reverse"
                                    }`}
          >
            <div
              className={`w-full flex lg:px-[30px] xxxxl:px-[0px]
                                         ${
                                           content.ImgPos === "left"
                                             ? "sm:justify-start"
                                             : "sm:justify-end"
                                         }
                                         ${
                                          content.rounded 
                                            ? "items-center"
                                            : null
                                        }
                                       `}
            >
              <img
                src={content.Img}
                alt={content.name}
                className={`object-cover shadow-sm shadow-black ${content.rounded ? 'w-[583px] h-[335px]' : null}`}
              />
            </div>

            <div
              className={`w-full flex flex-col justify-center lg:px-[30px] xxxxl:px-[0px] text-left`}
            >
              <h1 className="text-[#050B1D] font-[be-vietnam-bold] text-[16px] md:text-[18px] lg:text-[25px] xl:text-[30px] xxl:text-[35px] xxxl:text-[64px] font-[600] leading-[23.38px] md:leading-[30px] font-semibold">
                {content.name}
              </h1>
              <div className="pt-[50px] text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                <div className="pb-[50px] text-[#050B1D] font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">
                  <p>{content.description}</p>
                </div>
                <MyLink
                  className="uppercase py-2 items-center sm:w-56 w-36 mx-auto h-16 ml-0 text-base"
                  to={content.Btn.link}
                >
                  <p className="text-[#1F2D5A] text-center font-[be-vietnam-bold] xxsm:text-[16px] md:text-[20px] font-bold leading-[147.51%] tracking-[9.9px] uppercase">
                    {content.Btn.name}
                  </p>
                </MyLink>
              </div>
            </div>
          </div>
          {/* Mobile-view */}
          <div
            key={`${content.id}-${content.name}`}
            className={`lg:hidden flex flex-col justify-center items-center py-10 px-5 w-full
                              gap-y-[36px] pt-[80px]`}
          >
            <h1 className="text-xl font-semibold uppercase">{content.name}</h1>

            <div className="">
              <img
                src={content.Img}
                alt={`img${content.id}`}
                className={`object-cover shadow-sm shadow-black w-[293px] h-[169px] ${content.rounded ? 'rounded-[25px]' : null}`}
              />
            </div>
            <p className="text-center w-[288px] md:w-[400px] mx-auto leading-[34px] tracking-[0.2px] text-[15px] md:text-[20px]">
              {content.description}
            </p>

            <div className="">
              {/* <MyLink
            <div className="">
              {/* <MyLink
                className={`"uppercase py-2 w-36 mx-auto h-16 ml-0 text-base
                                       ${content.ImgPos === "left" &&
                  "bg-gpgp-blue text-white hover:text-white/90"
                  }`}
                to={content.Btn.link}
              >
                {content.Btn.name}
              </MyLink> */}

              {/* <MyLink
                className={`"uppercase py-[11px] w-36 mx-auto ml-0 text-base
                                       ${
                                         content.ImgPos === "left" &&
                                         "bg-gpgp-blue text-white hover:text-white/90"
                                       }`}
                to={content.Btn.link}
              >
                {content.Btn.name}
              </MyLink> */}
              <MyLink to={content.Btn.link} className="w-[187px] bg-gpgp-blue">
                <p className="px-[10px] py-[9px] font-[be-vietnam-bold] leading-[22.13px] tracking-[4.125px] uppercase text-white text-[15px]">
                  {content.Btn.name}
                </p>
              </MyLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentManage;
