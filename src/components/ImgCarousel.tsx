// import Carousel from "@itseasy21/react-elastic-carousel";
import AliceCarousel from "react-alice-carousel";

interface ImgCarouselProps {
  items: {
    imageSrc: string;
  }[];
}

const responsive = {
    600: {
        items: 2,
        itemsFit: 'contain'
    },
    700: {
        items: 3,
        itemsFit: 'contain'
    },
    1440: {
        items: 6,
        itemsFit: 'contain',
    }
  };

const ImgCarousel = ({ items }: ImgCarouselProps) => {
  return (
    // <Carousel
    //     isRTL={false}
    //     itemsToShow={5.5}
    //     showArrows={false} // Hide arrows
    //     pagination={false} // Hide dots
    //     enableAutoPlay={true} // Enable auto-play
    //     autoPlaySpeed={10} // Set auto-play speed (in milliseconds)
    //     className="carousel"
    //  >

    // </Carousel>
    <AliceCarousel
      autoPlay
      mouseTracking
      items={items.map((item, index) => (
        <div
          key={index}
          className="product-image hover:shadow-black shadow-[2px_3px_5px_rgba(0,0,0,0.3)]"
        >
          <img src={item.imageSrc} alt={`Product ${index + 1}`} />
        </div>
      ))}
      disableDotsControls
      disableButtonsControls
      autoPlayInterval={1000}
      animationDuration={100}
      animationType="fadeout"
      controlsStrategy="alternate"
      infinite
      responsive={responsive}
    />
  );
};

export default ImgCarousel;
