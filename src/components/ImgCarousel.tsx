// import Carousel from "@itseasy21/react-elastic-carousel";
import AliceCarousel from "react-alice-carousel";
import { IGalleryArtworksProps } from "../types/gallery";


const responsive = {
  600: {
    items: 2,
    itemsFit: "contain",
  },
  700: {
    items: 3,
    itemsFit: "contain",
  },
  1440: {
    items: 6,
    itemsFit: "contain",
  },
};

const ImgCarousel = ({ contents }: IGalleryArtworksProps) => {
  return (
    <AliceCarousel
      autoPlay
      mouseTracking
      items={contents?.map((item, index) => (
        <div
          key={index}
          className="product-image w-[218px] h-[218px] hover:shadow-black shadow-[2px_3px_5px_rgba(0,0,0,0.3)]"
        >
          <img src={item.image.url} alt={item.image.alt} />
        </div>
      ))}
      disableDotsControls
      disableButtonsControls
      autoPlayInterval={2000}
      animationDuration={500}
      animationType="fadeout"
      controlsStrategy="alternate"
      infinite
      responsive={responsive}
    />
  );
};

export default ImgCarousel;
