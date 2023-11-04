import { Input } from "./base/Input";
import { Button } from "./base/Button";
import { TextArea } from "./base/Textarea";
import MyLink from "./base/MyLink";
import NftCarousel from "./NftCarousel";

const ContactUs = () => {
  return (
    // <div className="sm:flex hidden justify-center flex-col mt-10 py-5 lg:w-[80%] sm:w-[600px] w-full text-white sm:p-0 px-10">
    //   <h4 className="text-center font-normal tracking-[1px] uppercase">
    //     Contact us
    //   </h4>

    //   <div className="text-center py-3 sm:text-[1.6rem] text-xl font-semibold">
    //     We’d love to hear from{" "}
    //     <span className="text-[#D9BF4F] underline">you</span>
    //   </div>

    //   <div className="text-center text-sm pt-3">
    //     Reach out to us for further discussions about sponsorship and
    //     partnership opportunities
    //   </div>

    //   <div className="flex justify-between flex-col">
    //     <div className="flex w-full justify-between sm:flex-row flex-col sm:space-x-5 py-5">
    //       <div className="w-full">
    //         <div className="text-sm py-1">Name</div>
    //         <Input />
    //       </div>

    //       <div className="w-full sm:py-0 pt-7">
    //         <div className="text-sm py-1">E-mail</div>
    //         <Input type="email" />
    //       </div>
    //     </div>

    //     <div className="w-full py-5">
    //       <div className="text-sm py-1">Subject</div>
    //       <Input />
    //     </div>

    //     <div className="w-full py-5">
    //       <div className="text-sm py-1">Purpose</div>
    //       <TextArea />
    //     </div>

    //     <div className="flex w-full py-5 justify-center">
    //       <Button className="flex items-center text-gpgp-blue px-10 py-2 bg-white uppercase">
    //         Send
    //       </Button>
    //     </div>
    //   </div>
    // </div>

    <div className="hidden sm:block w-full bg-h-[100%] bg-w-[100%] bg-project-page-mobile-wave lg:bg-project-page-wave bg-no-repeat bg-cover md:pb-[70px] xl:pb-[80px] xxxl:pb-[80px]">
      <div className="flex flex-col text-white pt-[125px] md:pt-[200px] lg:pt-[300px] xl:pt-[360px] xxl:pt-[350px] xxxl:pt-[600px] xxxxl:pt-[700px]">
        <h1 className="text-center mt-[30px] sm:mt-[58px] md:mt-[45px] lg:mt-[65px] xl:mt-[25px] xxl:mt-[105px] xxxl:mt-[94px] text-[16px] uppercase md:text-[21px] xxxl:text-[40px] font-[600] leading-[23.38px] md:leading-[48px]">
          Contact us
        </h1>
        <div className="text-center py-3 xxxxl:py-[40px] mt-3 xxxxl:mt-[40px]">
          <p className="text-[25px] md:text-[30px] xxxl:text-[50px] font-semibold">We’d love to hear from <span className="text-[#D9BF4F] underline">you</span></p>
          
        </div>
        <div className="text-center pt-3 px-[30px] text-[16px] xxxl:text-[20px] font-semibold">
          Reach out to us for further discussions about sponsorship and
          partnership opportunities
        </div>
      </div>

      <div className="flex justify-between flex-col px-[50px] xxxl:px-[500px] xxxxl:px-[800px] my-5 xxxl:py-7">
        <div className="flex w-full justify-between sm:flex-row flex-col sm:space-x-5 py-5">
          <div className="w-full">
            <div className="text-white text-sm py-1">Name</div>
            <Input />
          </div>

          <div className="text-white w-full sm:py-0 pt-7">
            <div className="text-sm py-1">E-mail</div>
            <Input type="email" />
          </div>
        </div>

        <div className="text-white w-full py-5">
          <div className="text-sm py-1">Subject</div>
          <Input />
        </div>

        <div className="text-white w-full py-5">
          <div className="text-sm py-1">Purpose</div>
          <TextArea />
        </div>

        <div className="flex w-full py-5 justify-center">
          <Button className="flex items-center text-gpgp-blue px-10 py-2 bg-white uppercase">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
