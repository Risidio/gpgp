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
              <div className="md:hidden bg-gpgp-blue py-[30px] flex flex-col justify-center items-center">
                  <MyLink to="/gallery">
                    <p className="p-[9px] tracking-[4.125px] font-[be-vietnam-bold] leading-[147.51%]">GALLERY</p>
                  </MyLink>
              </div>
      </section>
   </>
 )
}

export default HomeExhibition