import ArtistFormBg from "./ArtistFormBg";
import SponsorFormBg from "./SponsorFormBg";
import CustomFileInput from "./CustomFileInput";
import ContactWave from "../../contact/ContactWave";
import { useEffect, useState } from "react";

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
    <div
      className={`relative ${
        WavePattern === "Contact" && "mt-[90px]"
      } md:mt-16 h-auto`}
    >
      <BackPattern>
        <div
          className={`w-full ${
            WavePattern === "Contact" ? "pt-2" : "pt-[250px] xl:pt[650px]"
          }  `}
        >
          <div
            className={`px-10 sm:px-16 xl:pr-28 flex flex-col items-center   -mb-10`}
          >
            <h3 className="uppercase text-[1.2rem] lg:text-[1.4rem] text-center xxxl:text-[1.6rem] mb-4 font-bold tracking-[3px]">
              COntact Us
            </h3>

            <h2 className="text-[1.5rem] sm:text-[2rem] text-center  md:[2.5rem] lg:text-[3rem] xxl:text-[3.5rem] font-semibold mb-3">
              We’d love to hear from{" "}
              <span className="underline text-[#D9BF4F]"> you</span>
            </h2>

            <p className=" sm:mb-[2rem] mb-2 mt-2 font-semibold text-center tracking-[1px] sm:tracking-[2px] w-[120%] sm:w-full text-[0.8rem] sm:text-[1rem] xxxl:text-[1.5rem]">
              Reach out to us for further discussions about sponsorship and
              partnership opportunities
            </p>

            <form
              className={`flex flex-wrap  rounded-[33px] sm:px-5 sm:mt-[-32px] pt-10 xl:px-7 pb-4 -mx-2`}
            >
              {formField.map((field) =>
                field.width === "half" ? (
                  <div
                    key={field.id}
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
                  >
                    <label
                      htmlFor={field.id}
                      className={`block font-semibold xxxl:text-[1.5rem] text-gpgp-blue`}
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
                  <div key={field.id} className="w-full p-2">
                    <label
                      htmlFor={field.id}
                      className={`block font-semibold xxxl:text-[1.5rem] text-gpgp-blue`}
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
            <button
              className={`m-10 border w-[200px] sm:w-[150px]  xxxl:w-[210px] h-[45px] sm:h-[50px] xxxl:h-[65px]  bg-gpgp-blue text-white font-semibold text-[1.3rem] xxxl:text-[2rem] tracking-[3px] rounded-[3px] ${Classes?.FormBtn}`}
            >
              Send
            </button>
          </div>
        </div>
      </BackPattern>
    </div>
  );
}
