import Container from "../Container";
import { NewsCard } from "./NewsCard";
const fakeData = new Array(3).fill(1);

const BottomLatestNews = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-[20px] lg:py-[35px] xxxl:py-[70px] md:bg-news-background-wave bg-cover bg-no-repeat text-center md:leading-[59px]">
        <div className="flex flex-col justify-center items-center"></div>
      </div>

      <Container sectionClass="bg-gpgp-blue" classes="bg-gpgp-blue">
        <div className="w-full flex flex-col p-5">
          <h2 className="font-semibold text-lg uppercase py-5 text-white">
            Latest News
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {fakeData.map((item, index) => (
              <NewsCard
                key={index}
                title="The Tide of Plastic: A Growing Threat"
                href={`/news/${item.id}`}
                imageUrl="news/latest-news.png"
                classes="text-white"
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default BottomLatestNews;
