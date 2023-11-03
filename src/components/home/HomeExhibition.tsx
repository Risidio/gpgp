import guyAtExhibition from "../../assets/images/Rectangle251.jpg"

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