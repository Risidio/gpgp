// import Carousel from "@itseasy21/react-elastic-carousel";
import AliceCarousel from "react-alice-carousel";
import { IGalleryArtworksProps } from "../types/gallery";
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  763: {
    items: 3,
    itemsFit: "contain",
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
  1440: {
    items: 6,
    itemsFit: "contain",
  },
};

// const items = [
//   { id: 1, name: 'Item 1', image: require('../assets/images/gallery_image.jpg').default },
//   { id: 2, name: 'Item 2', image: require('../assets/images/exhibition-2.png').default },
//   { id: 3, name: 'Item 3', image: require('../assets/images/exhibition-3.png').default },
//   { id: 4, name: 'Item 4', image: require('../assets/images/exhibition-4.png').default },
//   { id: 5, name: 'Item 5', image: require('../assets/images/exhibition-5.png').default }
// ];

// console.log(items);


const ImgCarousel = ({ contents }: IGalleryArtworksProps) => {
  return (
    <AliceCarousel
      autoPlay
      mouseTracking
      items={contents?.map((item, index) => (
        // items={items.map((item, index) => (
        <div
          key={index}
          className="product-image w-[218px] h-[218px] hover:shadow-black shadow-[2px_3px_5px_rgba(0,0,0,0.3)]"
        >
          <img src={item.image.url} alt={item.image.alt} />
          {/* <img src={item.image} alt={item.name} /> */}
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
