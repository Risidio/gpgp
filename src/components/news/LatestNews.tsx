import { INewsHeroProps } from "../../types/news";
import Wrapper from "../layout/Wrapper";
// import newsImage2 from "../../assets/images/news/latest-news-image2.png";

const LatestNews = ({ contents }: INewsHeroProps) => {
  return (
    <Wrapper>
      <div className="w-full flex flex-col mt-[60px] uppercase">
        <div className="flex justify-between items-center pb-5">
          <h2 className="font-semibold text-[1.4rem] xxl:text-[2rem] text-[#050B1D]">
            {contents?.newsheading[0].text}
          </h2>
        </div>

        <div className="sm:block hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="col-span-3 gap-4">
              <div className="group relative">
                <img
                  src={contents?.newsimage1.url}
                  alt="newsImage1"
                  className="w-full h-[470px] shadow-md opacity-95 object-cover cursor-pointer hover:opacity-90 transition rounded-[30px] duration-300 ease-in-out"
                />
                <div className="bg-[#00000054] z-40 w-[100%] h-[100%] rounded-[30px] absolute top-0 left-0">
                  <span className="absolute bottom-1 text-[1.1rem] drop-shadow-sm font-semibold text-white p-5 ">
                    {contents?.newscaption1[0].text}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="group relative">
                <img
                  src={contents?.newsimage2.url}
                  // src={newsImage2}
                  alt="newsImage2"
                  className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
                />
                <div className="bg-[#00000054] z-40 w-[100%] h-[99%] rounded-[20px] absolute top-0 left-0">
                  <span className="absolute bottom-0  text-[0.9rem] drop-shadow-sm font-semibold text-white p-2">
                    {contents?.newscaption2[0].text}
                  </span>
                </div>
              </div>

              <div className="group relative">
                <img
                  src={contents?.newsimage4.url}
                  alt="newsImage4"
                  className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
                />
                <div className="bg-[#00000054] z-40 w-[100%] h-[99%] rounded-[20px] absolute top-0 left-0">
                  <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2">
                    {contents?.newscaption4[0].text}
                  </span>
                </div>
              </div>

              <div className="group relative">
                <img
                  src={contents?.newsimage3.url}
                  alt="newsImage3"
                  className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
                />
                <div className="bg-[#00000054] z-40 w-[100%] h-[99%] rounded-[20px] absolute top-0 left-0">
                  <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2">
                    {contents?.newscaption3[0].text}
                  </span>
                </div>
              </div>

              <div className="group relative">
                <img
                  src={contents?.newsimage5.url}
                  alt="newsImage5"
                  className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
                />
                <div className="bg-[#00000054] z-40 w-[100%] h-[99%] rounded-[20px] absolute top-0 left-0">
                  <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2">
                    {contents?.newscaption5[0].text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden block">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 gap-4 space-y-8">
              <div className="group relative">
                <img
                  src={contents?.newsimage1.url}
                  alt=""
                  className="w-full h-60 object-cover rounded-[20px]  shadow-md"
                />
                <span className="absolute bottom-1 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3">
                  {contents?.newscaption1[0].text}
                </span>
              </div>

              <div className="group relative">
                <img
                  src={contents?.newsimage2.url}
                  alt=""
                  className="w-full h-60 object-cover rounded-[20px]  shadow-md"
                />
                <span className="absolute bottom-1 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3">
                  {contents?.newscaption2[0].text}
                </span>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <div className="group relative">
                <img
                  src={contents?.newsimage3.url}
                  alt=""
                  className="w-full h-40 object-cover rounded-[20px]  shadow-md"
                />
                <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3">
                  {contents?.newscaption3[0].text}
                </span>
              </div>

              <div className="group relative">
                <img
                  src={contents?.newsimage4.url}
                  alt=""
                  className="w-full h-40 object-cover rounded-[20px]  shadow-md"
                />
                <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3">
                  {contents?.newscaption4[0].text}
                </span>
              </div>

              <div className="group relative">
                <img
                  src={contents?.newsimage5.url}
                  alt=""
                  className="w-full h-40 object-cover rounded-[20px]  shadow-md"
                />
                <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3">
                  {contents?.newscaption5[0].text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestNews;
