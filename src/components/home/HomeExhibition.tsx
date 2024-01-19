// import guyAtExhibition from "../../assets/images/gallery_image.jpg";
import { IHomeExhibition2SectionProp } from "../../types/home";

interface HomeExhibitionProps {
  classes?: string;
  contents: IHomeExhibition2SectionProp['contents'];
}

  const HomeExhibition: React.FC<HomeExhibitionProps> = ({ classes = "", contents }) => {
  return (
    <>
      <section className={`bg-lightgray w-full ${classes}`}>
        <img
          src={contents?.image?.url}
          alt={contents?.image?.alt}
          className="w-full "
        />
      </section>
    </>
  );
};

export default HomeExhibition;
