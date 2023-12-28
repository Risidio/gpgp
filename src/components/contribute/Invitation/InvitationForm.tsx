import ArtistFormBg from "./ArtistFormBg";
import SponsorFormBg from "./SponsorFormBg";
import CustomFileInput from "./CustomFileInput";
import ContactWave from "../../contact/ContactWave";
import { useEffect, useState } from "react";
import Wrapper from "../../layout/Wrapper";

interface FormField {
  label: string;
  type: string;
  width: string;
  id: string;
  // Add other properties if needed
}
interface Classes {
  FormBtn?: string;
}

interface SponsorFormLegend {
  heading: string;
  contact: string;
}

export default function InvitationForm({
  formField,
  WavePattern,
  SponsorFormLegend,
  Classes,
}: {
  formField: FormField[];
  WavePattern: string | undefined;
  SponsorFormLegend?: SponsorFormLegend;
  Classes?: Classes;
}) {
  let BackPattern = ContactWave;
  if (WavePattern === "Artist") {
    BackPattern = ArtistFormBg;
  } else if (WavePattern === "Sponsor") {
    BackPattern = SponsorFormBg;
  }

  const [rows, setRows] = useState(1);

  useEffect(() => {
    const updateRows = () => {
      WavePattern === "Contact"
        ? setRows(window.innerWidth >= 640 ? 6 : 1)
        : setRows(window.innerWidth >= 640 ? 10 : 1);
    };

    updateRows();

    window.addEventListener("resize", updateRows);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateRows);
    };
  }, [WavePattern]); // Empty dependency array to run the effect only once on mount

  return (
    <Wrapper>
      <div
        className={`relative ${
          WavePattern === "Contact" && "mt-[81.73px] lg:mt-[151px]"
        } `}
      >
        <BackPattern>
          <div
            className={`w-full ${
              WavePattern === "Contact" ? "pt-2" : "pt-[250px] xl:pt[650px]"
            }  `}
          >
            <div className={`px-10 sm:px-16 flex flex-col items-center mb-10`}>
              <h3 className="uppercase text-[16px] font-[be-vietnam] lg:font-Inter text-center  mb-[15px] lg:mb-[14px] font-[700] leading-[23.602px] tracking-[4.4px]">
                COntact Us
              </h3>
              <h2 className="text-[16px] lg:text-[44px] font-[600] text-center leading-[48px] tracking-[-0.32px] lg:tracking-[-0.88px] font-[be-vietnam]">
                We’d love to hear from{" "}
                <span className="underline text-[#D9BF4F]"> you</span>
              </h2>

              <div className="mt-[17px] lg:mt-[32px]">
                <p className="text-center font-[be-vietnam] lg:font-Inter leading-[24px] lg:leading-[unset]  font-[500] text-[16px]">
                  Reach out to us for further discussions about sponsorship and
                  partnership opportunities
                </p>

                <form
                  className={`flex flex-wrap rounded-[33px] mt-[49px] lg:mt-[44px]`}
                >
                  {formField.map((field) =>
                    field.width === "half" ? (
                      <div
                        key={field.id}
                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-[34px] lg:mb-[44px]"
                      >
                        <label
                          htmlFor={field.id}
                          className={`block text-[13px] lg:text-[16px] font-[500] text-gpgp-blue font-[be-vietnam] lg:font-Inter`}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          className={`border ${
                            WavePattern === "Contact"
                              ? "border-[#0A2471] rounded-[7px]"
                              : "border-white"
                          } rounded px-3 py-2 w-full`}
                        />
                      </div>
                    ) : (
                      <div
                        key={field.id}
                        className="w-full px-2 mb-[34px] lg:mb-[44px]"
                      >
                        <label
                          htmlFor={field.id}
                          className={`block text-[13px] lg:text-[16px] font-[500] text-gpgp-blue font-[be-vietnam] lg:font-Inter`}
                        >
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.label}
                            id={field.id}
                            rows={field.label === "Message" ? rows : 8}
                            className={`border ${
                              WavePattern === "Contact"
                                ? "border-[#0A2471] rounded-[7px]"
                                : "border-white"
                            } rounded px-3 py-2 w-full text-black`}
                          />
                        ) : field.type === "file" ? (
                          <CustomFileInput label={field.label} id={field.id} />
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            className={`border ${
                              WavePattern === "Contact"
                                ? "border-[#0A2471] rounded-[7px]"
                                : "border-white"
                            } rounded px-3 py-2 w-full`}
                          />
                        )}
                      </div>
                    )
                  )}
                </form>
              </div>

              <button
                className={`mt-[6px] lg:mt-[4px] uppercase font-Inter border border-1 border-[#0E0C71] w-[187px] lg:w-[223px] text-[13px] lg:text-[16px] py-[10px] lg:py-[18px] bg-gpgp-blue text-white rounded-[2px] font-[700] leading-[19.176px] lg:leading-[23.602px] tracking-[3.576px] lg:tracking-[4.4px] ${Classes?.FormBtn}`}
              >
                Send
              </button>
            </div>
          </div>
        </BackPattern>
      </div>
    </Wrapper>
  );
}
