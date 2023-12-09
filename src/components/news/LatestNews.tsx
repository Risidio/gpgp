import { INewsHeroProps } from "../../types/news";

const LatestNews = ({ contents }: INewsHeroProps) => {
  return (
    <div className="w-full flex flex-col sm:p-9 p-5">
      <div className="flex justify-between items-center pb-5">
        <h2 className="font-semibold text-[1.4rem] xxl:text-[2rem] uppercase">
          {contents?.newsheading[0].text}
        </h2>
      </div>

      <div className="sm:block hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="col-span-3 gap-4">
            <div className="group relative">
              <img
                src={contents?.newsimage1.url}
                alt=""
                className="w-full h-[470px] shadow-md opacity-95 object-cover cursor-pointer hover:opacity-90 transition rounded-[30px] duration-300 ease-in-out"
              />
              <span className="absolute bottom-1 text-[1.1rem] drop-shadow-sm font-semibold text-white p-5 ">
                {contents?.newscaption1[0].text}
              </span>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="group relative">
              <img
                src={contents?.newsimage2.url}
                alt=""
                className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
              />
              <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-10">
                {contents?.newscaption2[0].text}
              </span>
            </div>

            <div className="group relative">
              <img
                src={contents?.newsimage4.url}
                alt=""
                className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
              />
              <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-10">
                {contents?.newscaption4[0].text}
              </span>
            </div>

            <div className="group relative">
              <img
                src={contents?.newsimage3.url}
                alt=""
                className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
              />
              <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-10">
                {contents?.newscaption3[0].text}
              </span>
            </div>

            <div className="group relative">
              <img
                src={contents?.newsimage5.url}
                alt=""
                className="w-full h-56 object-cover rounded-[20px] cursor-pointer shadow-md"
              />
              <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-10">
                {contents?.newscaption5[0].text}
              </span>
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
              <span className="absolute bottom-1 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3 z-50">
                {contents?.newscaption1[0].text}
              </span>
            </div>

            <div className="group relative">
              <img
                src={contents?.newsimage2.url}
                alt=""
                className="w-full h-60 object-cover rounded-[20px]  shadow-md"
              />
              <span className="absolute bottom-1 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3 z-50">
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
              <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3 z-50">
                {contents?.newscaption3[0].text}
              </span>
            </div>

            <div className="group relative">
              <img
                src={contents?.newsimage4.url}
                alt=""
                className="w-full h-40 object-cover rounded-[20px]  shadow-md"
              />
              <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3 z-50">
                {contents?.newscaption4[0].text}
              </span>
            </div>

            <div className="group relative">
              <img
                src={contents?.newsimage5.url}
                alt=""
                className="w-full h-40 object-cover rounded-[20px]  shadow-md"
              />
              <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-1 md:p-3 z-50">
                {contents?.newscaption5[0].text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
