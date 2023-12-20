import { Link } from "react-router-dom";

interface ContactInfoProps {
  classes?: string;
  scrollTop: () => void;
}

const ContactInfo = ({ classes = "white", scrollTop }: ContactInfoProps) => {
  return (
    <div className={`grid grid-cols-2 gap-x-2 text-${classes} md:mt-[30px]`}>
      <div>
        <h4 className="font-normal">Sitemap</h4>
        <ul className="text-sm space-y-4 [&>*:first-child]:pt-5">
          <li>
            <Link to={"/project"} onClick={scrollTop}>
              Project
            </Link>
          </li>
          <li>
            <Link to={"/gallery"} onClick={scrollTop}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to={"/challenge"} onClick={scrollTop}>
              Challenge
            </Link>
          </li>
          <li>
            <Link to={"/contribute"} onClick={scrollTop}>
              Contribute
            </Link>
          </li>
          <li>
            <Link to={"/news"} onClick={scrollTop}>
              News
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={scrollTop}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-normal">Contact</h4>

        <ul className="text-sm space-y-4 [&>*:first-child]:pt-5">
          <li>infinart@risidio.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
