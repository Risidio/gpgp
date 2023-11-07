import { Outlet, useParams } from "react-router-dom";
import Container from "../Container";
import { twMerge } from "tailwind-merge";
import NewsFooter from "./NewsFooter";
import BottomLatestNews from "./BottomLatestNews";
import NewBackgroundWave from "./NewBackgroundWave";

export const NewsLayout = () => {
  const params = useParams();
  const classes = "sm:bg-gpgp-blue sm:text-white bg-white text-black";
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-[20px] lg:py-[35px] xxxl:py-[70px] md:bg-news-background-wave bg-cover bg-no-repeat text-center md:leading-[59px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase text-black md:text-white md:text-[40px] font-[700]">
            News
          </h1>
        </div>
      </div>

      <Container>
        <Outlet />
      </Container>

      <NewsFooter>
        {!params.categoryId ? <NewBackgroundWave /> : <BottomLatestNews />}
      </NewsFooter>
    </>
  );
};
