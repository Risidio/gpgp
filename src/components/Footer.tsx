import { useLocation } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import ContactInfo from "./footer/ContactInfo";
import SocialMedia from "./footer/SocialMedia";
import { twMerge } from "tailwind-merge";
import { getFooterDetail } from "../libs/getFooterDetail";

interface FooterProps{
   classes?: string
}

const Footer = ({classes= "bg-gpgp-blue"}: FooterProps) => {
  const footerStyles = getFooterDetail(useLocation().pathname) || null
  const fontColor = (footerStyles && footerStyles.fontColor) ? footerStyles.fontColor : "white";
  const fontColorMobile = (footerStyles && footerStyles.fontColorMobile) ? footerStyles.fontColorMobile : "white";

  return (
    <footer className={`${footerStyles ? footerStyles!.style : classes} border-t border-[white]`}>
       <Container hasSection={false} classes={twMerge("bg-gpgp-blue flex flex-col", `${footerStyles ? footerStyles!.style : ""}`)}>
            
            {/* Desktop-view */}
            <div className="w-full sm:flex sm:flex-col pt-7 hidden">
                <div className="w-full grid grid-cols-3 justify-between p-5">
                    <Logo className="flex justify-start items-start w-20 h-20"/> 
                    <SocialMedia color={`${fontColor ? fontColor: "bg-gpgp-blue"}`} />
                    <ContactInfo classes={fontColor} />
                </div>

                <div className={`w-full grid grid-cols-3 justify-between text-${fontColor} pt-10 pb-3`}>
                    <div className="text-right font-thin col-span-2 px-5 text-[0.9rem]">
                        2023 JohnDahlsen & Infinart All Rights Reserved - Designed by Risidio
                    </div>
                  
                    <div className={`grid grid-cols-2 gap-x-2 text-${fontColor} font-thin text-[0.9rem]`}>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                  </div>
            </div>

           {/* Mobile-view */}
            <div className="w-full sm:hidden flex flex-col items-center pt-16 px-5">
               <div className={twMerge("w-full grid grid-cols-2 justify-between items-start text-white", fontColorMobile)}>
                  <SocialMedia color={fontColorMobile} />
                  <div className="flex flex-col items-end">
                      <ul className="text-sm space-y-4 text-right">
                        <li>Sitemap</li>
                        <li>Project</li>
                        <li>Challenge</li>
                        <li>Contribute</li>
                        <li>News</li>
                        <li>Contacts</li>
                      </ul>
                      <Logo className="flex items-start w-16 h-16" logo={fontColor ? "logo-blue.png": "logo-white.png"}/> 
                  </div>
              </div>
              <div className={twMerge("w-full text-center text-white font-thin py-5 text-[0.9rem]",`
              ${fontColor && "sm:text-white text-black"}
              ${useLocation().pathname === "/project"  ? "text-white" : "text-black"}
              ${useLocation().pathname === "/challenge"  ? "text-white" : "text-black"}
              
              `)}>
                   <p className="">2023 JohnDahlsen & Infinart All Rights Reserved Designed by Risidio</p>
              </div>
           </div>
       </Container> 
    </footer>
  );
};

export default Footer;
