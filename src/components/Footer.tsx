import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import ContactInfo from "./footer/ContactInfo";
import SocialMedia from "./footer/SocialMedia";
import { twMerge } from "tailwind-merge";
import { getFooterDetail } from "../libs/getFooterDetail";

interface FooterProps {
  classes?: string;
}

const Footer = ({ classes = "bg-gpgp-blue" }: FooterProps) => {
  const currentPath = useLocation().pathname;

  const footerStyles = getFooterDetail(currentPath) || null;
  const fontColor =
    footerStyles && footerStyles.fontColor ? footerStyles.fontColor : "white";

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className={`xxl:w-[1440px] xxl:mx-auto mx-auto
       border-t bg-gpgp-blue`}
    >
      <Container hasSection={false} classes={"bg-gpgp-blue text-white"}>
        {/* Desktop-view */}
        <div className="w-full sm:flex sm:flex-col pt-16 hidden">
          <div className="w-full grid grid-cols-3 justify-between p-5">
            <Logo
              className="flex justify-start items-start w-20 h-20"
              logo={"image.png"}
            />
            <SocialMedia color={`white`} />
            <ContactInfo classes={"text-white"} scrollTop={scrollTop} />
          </div>

          <div
            className={`w-full grid grid-cols-3 justify-between text-${fontColor} pt-10 pb-3`}
          >
            <div className="text-right text-white font-thin col-span-2 px-5 text-[0.9rem]">
              2023 JohnDahlsen & Infinart All Rights Reserved - Designed by
              Risidio
            </div>

            <div
              className={`grid grid-cols-2 gap-x-2 text-white font-thin text-[0.9rem]`}
            >
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>

        {/* Mobile-view */}
        <div className="w-full sm:hidden flex flex-col items-center pt-16 px-5">
          <div
            className={twMerge(
              "w-full grid grid-cols-2 justify-between items-start text-white",
              "white"
            )}
          >
            <SocialMedia color={"white"} />
            <div className="flex flex-col items-end">
              <ul className="text-sm space-y-4 text-right">
                <li>Sitemap</li>
                <li>
                  <Link to="/project" onClick={scrollTop}>
                    Project
                  </Link>
                </li>
                <li>
                  <Link to="/challenge" onClick={scrollTop}>
                    {" "}
                    Challenge
                  </Link>
                </li>
                <li>
                  <Link to="/contribute" onClick={scrollTop}>
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link to="/news" onClick={scrollTop}>
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={scrollTop}>
                    Contacts
                  </Link>
                </li>
              </ul>
              <Logo
                className="flex items-start w-16 h-16"
                logo={fontColor ? "image.png" : "logo-white.png"}
              />
            </div>
          </div>
          <div className="w-full text-center font-thin py-5 text-[0.9rem]">
            <p className={`text-white`}>
              2023 John Dahlsen & Infinart All Rights Reserved Designed by
              Risidio
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
