import React from "react";
import { HiOutlineClock, HiOutlineShare } from "react-icons/hi";
import { IArticleDataProps } from "../../types/singleArticle";
import MyLink from "../base/MyLink";

// interface NewsItem {
//   morenewsimage: string;
//   morenewscontent: { text: string }[];
// }

const NewsInfo: React.FC<IArticleDataProps> = ({ contents, items }) => {
  return (
    <div className="w-full flex justify-center sm:p-9 md:p-10 p-5">
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-x-5">
        <div className="col-span-3">
          <h1 className="sm:text-[1.6rem] xxxl:text-[2rem] xxxl:leading-[37px] text-lg font-bold tracking-[2px]">
            {contents?.articletitle?.[0]?.text}
          </h1>

          <div className="flex items-center space-x-2 py-5">
            <HiOutlineClock className="w-5 h-5" />
            <span>5 minutes</span>
            <HiOutlineShare className="w-4 h-4 ml-3" />
          </div>

          <img
            src={require("../../assets/images/news/main-news.png")}
            alt=""
            className="rounded-[20px] object-cover shadow-[0_2px_5px_-2px_rgba(0,0,0,0.3)] shadow-black"
          />

          <p className="space-x-10 leading-[30px] xxxl:leading-[37px] xxxl:text-[1.6rem] py-10">
            {contents?.articlecontent1?.[0]?.text} <br />
            <br />
            {contents?.articlecontent2?.[0]?.text}
            <br /> <br />
            {contents?.articlecontent3?.[0]?.text}
          </p>

          <div className="sm:text-xl text-lg py-5 font-bold">Topics</div>
          <div className="flex items-center space-x-2">
            <MyLink to="" className="uppercase py-2 w-44 rounded-lg">
              GPGP
            </MyLink>
            <MyLink to="" className="uppercase py-2 w-44 rounded-lg">
              Plastic pollution
            </MyLink>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="sm:text-[1.3rem] text-base sm:pt-0 pt-20 font-semibold py-5">
            More News
          </h2>

          <div className="sm:space-y-5 grid sm:grid-cols-1 grid-cols-2 gap-5">
            {items?.map((item, index: number) => (
              <div key={index} className="group relative">
                <img
                  src={item.morenewsimage.url}
                  alt=""
                  className="w-full sm:h-56 h-44 rounded-[15px] object-cover  shadow-md"
                />
                <span className="absolute bottom-0 text-[0.9rem] xxxl:text-[1rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                  {item.morenewscontent[0]?.text || ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
