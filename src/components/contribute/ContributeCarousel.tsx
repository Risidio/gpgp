import { IinvitaitonSectionProps } from "../../types/contribute";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArtistCarousel from "./ArtistsCarousel";
import SponsorCarousel from "./SponsorCarousel";

const handleDragStart = (e: any) => e.preventDefault();

const ContributeCarousel = ({
  contents1,
  contents2,
}: IinvitaitonSectionProps) => {
  const items = [
    <ArtistCarousel onDragStart={handleDragStart} content={contents1} />,
    <SponsorCarousel onDragStart={handleDragStart} content={contents2} />,
  ];

  return (
    <div className="mt-[20px] xl:mt-[0px]">
      <div className="bg-contribute-mobile-wave xl:bg-contribute-web-wave bg-cover bg-no-repeat text-white pt-[135px] md:pt-[200px] md:pb-[42] pb-[52px] xl:pt-[326px] xl:pb-[80px] w-[100%] h-[100%]">
        <AliceCarousel
          autoPlay
          mouseTracking
          items={items}
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={2000}
          animationDuration={500}
          animationType="fadeout"
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default ContributeCarousel;
