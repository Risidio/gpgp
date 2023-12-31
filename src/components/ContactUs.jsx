import { Input } from "./base/Input";
import MyLink from "./base/MyLink";
import { TextArea } from "./base/Textarea";
import Wrapper from "./layout/Wrapper";

const ContactUs = () => {
  return (
    <div className="hidden md:block w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover md:pb-[70px] lg:pb-[80px]">
     <Wrapper>
     <div className="flex flex-col items-center text-white pt-[260px] lg:pt-[400px]">
        <h1 className="text-center text-[16px] uppercase md:text-[16px] font-[700] leading-[23.38px] md:leading-[23.38px] tracking-[4.4px]">
          Contact us
        </h1>
        <div className="text-center py-3  mt-3 sm:mb-[9px]">
          <p className="text-[16px] lg:text-[44px] font-[600]">
            We’d love to hear from{" "}
            <span className="text-[#D9BF4F] underline">you</span>
          </p>
        </div>
        <div className="text-center pt-3 z-40 sm:pt-1 px-[10px] text-[16px] md:w-max leading-[22px] lg:leading-[35px] lg:leading-[40px] md:leading-[32px] bg-gpgp-blue mb-[-35px] font-[be-vietnam-semibold">
          Reach out to us for further discussions about sponsorship and
          partnership opportunities
        </div>
      </div>

      <div className="flex justify-between flex-col items-center">
        {/* <div className="flex items-center flex-col w-[89%] lg:w-[67%] md:border-2 rounded-[12px] md:mx-5 px-[50px] my-5 "> */}
        <div className="flex items-center flex-col w-[89%] lg:w-[67%] md:mx-5 px-[50px] my-5  md:my-[unset] ">
          <div className="flex w-full justify-between sm:flex-row flex-col sm:space-x-5  py-5 md:mt-[44px]">
            <div className="w-full">
              <div className="text-white font-[be-vietnam] text-[16px] leading-[22px] lg:leading-[35px] lg:leading-[40px] md:leading-[32px] font-[400]">
                Name
              </div>
              <Input />
            </div>

            <div className="text-white w-full sm:py-0 pt-7">
              <div className="text-white font-[be-vietnam] text-[16px] leading-[22px] lg:leading-[35px] lg:leading-[40px] md:leading-[32px] font-[400]">
                Email
              </div>
              <Input type="email" />
            </div>
          </div>

          <div className="text-white w-full py-5">
            <div className="text-white font-[be-vietnam] text-[16px] leading-[22px] lg:leading-[35px] lg:leading-[40px] md:leading-[32px] font-[400]">
              Subject
            </div>
            <Input />
          </div>

          <div className="text-white w-full py-5">
            <div className="text-white font-[be-vietnam] text-[16px] leading-[22px] lg:leading-[35px] lg:leading-[40px] md:leading-[32px] font-[400]">
              Purpose
            </div>
            <TextArea rows={10} />

            <div className="flex w-full py-5 justify-center">
              {/* <Button className="flex items-center text-gpgp-blue px-10 py-2 lg:w-[20%] lg:text-[1.4rem] bg-white uppercase">
                Send
              </Button> */}

              <MyLink
                to=""
                className="md:w-[223px] md:h-[63px] bg-white rounded-[2px] shrink-0"
              >
                <p className="text-gpgp-blue text-center text-[16px] uppercase font-[be-vietnam-700] leading-[23.602px] tracking-[4.4px]">
                  Send
                </p>
              </MyLink>
            </div>
          </div>
        </div>
      </div>
     </Wrapper>
    </div>
  );
};

export default ContactUs;
