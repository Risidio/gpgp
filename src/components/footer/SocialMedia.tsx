import { Box } from "../base/Box";
import Twitter from "../../assets/images/icons/Twitter";
import Instagram from "../../assets/images/icons/Instagram";

interface SocialMediaProps {
  color?: string;
}

const SocialMedia = ({ color= "white" }: SocialMediaProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-x-3 justify-center md:mt-[30px]">
      <div className="w-[200px] flex flex-row items-start sm:justify-center gap-x-3">
        <Box className="rounded-full p-3 border">
           <Instagram classes="h-5 w-5" color={color}/>
        </Box>

        <Box className="rounded-full p-3 border">
           <Twitter classes="h-5 w-5" color={color}/>
        </Box>
      </div>
    </div>
  );
};

export default SocialMedia;
