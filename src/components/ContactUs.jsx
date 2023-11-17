import { Input } from "./base/Input";
import { TextArea } from "./base/Textarea";

import { Button } from "./base/Button";



const ContactUs = () => {
  return (

    <div className="hidden sm:block w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover md:pb-[70px] xl:pb-[80px] xxxl:pb-[80px]">
      <div className="flex flex-col items-center text-white pt-[125px] md:pt-[200px]  lg:pt-[300px] xl:pt-[360px] xxl:pt-[350px] xxxl:pt-[600px] xxxxl:pt-[700px]">
        <h1 className="text-center mt-[30px] sm:mt-[58px] md:mt-[45px] md:tracking-[0.3rem] lg:mt-[65px] xl:mt-[25px] xxl:mt-[105px] xxxl:mt-[94px] text-[16px] uppercase md:text-[21px] xxxl:text-[40px] font-[600] leading-[23.38px] md:leading-[48px]">

          Contact us
        </h1>
        <div className="text-center py-3 xxxxl:py-[40px] mt-3 sm:mb-[9px] xxxxl:mt-[40px]">
          <p className="text-[25px] md:text-[30px] xxxl:text-[50px] font-semibold">
            We’d love to hear from{" "}
            <span className="text-[#D9BF4F] underline">you</span>
          </p>
        </div>
        <div className="text-center pt-3 z-40 sm:pt-1 px-[10px] text-[16px] md:w-max lxl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] bg-gpgp-blue mb-[-35px] font-[be-vietnam-semibold">
          Reach out to us for further discussions about sponsorship and
          partnership opportunities
        </div>
      </div>


      <div className="flex justify-between flex-col items-center    ">
        <div className="flex items-center flex-col w-[89%] lg:w-[67%]   md:border-2 rounded-[12px] md:mx-5 px-[50px] xxxl:px-[50px]  xxxxl:px-[80px] my-5 xxxl:py-7">
          <div className="flex w-full justify-between sm:flex-row flex-col sm:space-x-4 pt-8 lg:pt-7 py-2">
            <div className="w-full">
              <div className="text-white text-sm py-1">Name</div>

              <Input />
            </div>

            <div className="text-white w-full sm:py-0 pt-7">
              <div className="text-white font-[be-vietnam] text-[16px] xl:text-[20px] xxxl:text-[25px] leading-[22px] lg:leading-[35px] xl:leading-[40px] sm:leading-[30px] md:leading-[32px] font-[400]">Email</div>
              <Input type="email" />
            </div>
          </div>

          <div className="text-white w-full py-2">
            <div className="text-sm py-1">Subject</div>
            <Input />
          </div>

          <div className="text-white w-full py-3">
            <div className="text-sm py-1">Purpose</div>
            <TextArea />
          </div>

          <div className="flex w-full py-5 justify-center">
            <Button className="flex items-center text-gpgp-blue px-10 py-2 lg:w-[20%] lg:text-[1.4rem] bg-white uppercase">
              Send
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
