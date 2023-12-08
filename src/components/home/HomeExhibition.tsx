import guyAtExhibition from "../../assets/images/gallery_image.jpg"

interface HomeExhibitionProps {
   classes?: string;
}

const HomeExhibition = ({ classes="" }: HomeExhibitionProps) => {
  return (
    <>
      <section className={`bg-lightgray w-full ${classes}`}>
             <img
                src={guyAtExhibition}
                alt="guyAtExhibtion"
                className="h-[252px] md:h-[600px] w-full xl:h-[817px]"
              />
      </section>
   </>
 )
}

export default HomeExhibition