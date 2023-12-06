import guyAtExhibition from "../../assets/images/gallery_image.jpg"
import MyLink from "../base/MyLink";

interface HomeExhibitionProps {
   classes?: string;
}

const HomeExhibition = ({ classes="" }: HomeExhibitionProps) => {
  return (
    <>
      <section className={`bg-gpgp-blue ${classes}`}>
             <img
                src={guyAtExhibition}
                alt="guyAtExhibtion"
                className=""
              />
      </section>
   </>
 )
}

export default HomeExhibition