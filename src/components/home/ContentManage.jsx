import MyLink from "../base/MyLink";

// This component handles and renders the content passed as props
const ContentManage = ({ contents }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {contents.map((content) => (
        <>
          {/* Desktop-view */}
          <div
            key={content.id}
            className={`lg:flex hidden lg:items-center py-[150px] w-full m-5 flex-col sm:px-10
                                    ${
                                      content.ImgPos === "left"
                                        ? "sm:flex-row"
                                        : "sm:flex-row-reverse"
                                    }`}
          >
            <div
              className={`w-full flex
                                         ${
                                           content.ImgPos === "left"
                                             ? "sm:justify-start"
                                             : "sm:justify-end "
                                         }
                                       `}
            >
              <img
                src={content.Img}
                alt={content.name}
                className="object-cover shadow-sm shadow-black w-[90%]"
              />
            </div>

            <div className={`w-full flex flex-col text-left`}>
              <h1 className="text-[#050B1D] font-BeVietnam text-4xl font-normal font-semibold leading-[75%] tracking-[-1.28px]">
                {content.name}
              </h1>
              <div className="text-[#050B1D] font-BeVietnam text-[16px] lg:text-[18px] xl:text-[25px] font-normal leading-[32px] my-[50px]">
                <p>{content.description}</p>
              </div>

              <MyLink
                className="uppercase py-2 items-center sm:w-56 w-36 mx-auto h-16 ml-0 text-base"
                to={content.Btn.link}
              >
                <p className="text-[#1F2D5A] text-center font-Inter text-[20px] font-bold leading-[147.51%] tracking-[9.9px] uppercase">
                  {content.Btn.name}
                </p>
              </MyLink>
            </div>
          </div>

          {/* Mobile-view */}
          <div
            key={`${content.id}-${content.name}`}
            className={`lg:hidden flex flex-col justify-center items-center py-10 px-5 w-full
                              ${
                                content.ImgPos !== "left" &&
                                "bg-gpgp-blue text-white"
                              }`}
          >
            <h1 className="text-xl font-semibold py-5 uppercase">
              {content.name}
            </h1>

            <div className="px-[20px]">
              <img
                src={content.Img}
                alt={`img${content.id}`}
                className="object-cover shadow-sm shadow-black w-[100%] h-[250px]"
              />
            </div>
            <p className="mt-9 text-center leading-[34px] tracking-[0.2px] text-[14px] md:text-[20px] md:px-[20px]">
              {content.description}
            </p>

            <div className="mt-[60px]">
              <MyLink
                className={`"uppercase py-2 w-36 mx-auto h-16 ml-0 text-base
                                       ${
                                         content.ImgPos === "left" &&
                                         "bg-gpgp-blue text-white hover:text-white/90"
                                       }`}
                to={content.Btn.link}
              >
                {content.Btn.name}
              </MyLink>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ContentManage;
