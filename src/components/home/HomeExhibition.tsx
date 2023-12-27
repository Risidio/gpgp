import guyAtExhibition from "../../assets/images/gallery_image.jpg";

interface HomeExhibitionProps {
  classes?: string;
}

const HomeExhibition = ({ classes = "" }: HomeExhibitionProps) => {
  return (
    <>
      <section className={`bg-lightgray w-full ${classes}`}>
        <img
          src={guyAtExhibition}
          alt="guyAtExhibtion"
          className="w-full "
        />
      </section>
    </>
  );
};

export default HomeExhibition;
