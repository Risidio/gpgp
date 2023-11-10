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
  WavePattern: string;
  SponsorFormLegend?: SponsorFormLegend;
  Classes?: any;
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
      setRows(window.innerWidth >= 640 ? 10 : 1);
    };

    // Set initial rows
    updateRows();

    // Add event listener for window resize
    window.addEventListener("resize", updateRows);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateRows);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div
      className={`relative ${
        WavePattern === "Contact" && "mt-[90px]"
      } md:mt-16 h-auto`}
    >
      <BackPattern>
        <div
          className={`w-full  pt-[250px] xl:pt[650px] ${
            WavePattern === "Contact" &&
            "pt-2"
          }`}
        >
          <div className={`px-16 xl:pr-28 flex flex-col items-center   -mb-10`}>
            {SponsorFormLegend && (
              <div
                className={`flex flex-col ${
                  WavePattern === "Contact" ? "text-black" : "text-white"
                }  items-center text-center `}
              >
                <h3 className="text-[1.2rem] md:text-[1.6rem] xxl:text-[2rem] xxxl:text-[2.3rem] font-semibold mb-4">
                  {SponsorFormLegend.heading}
                </h3>
                <h4 className={`text-[0.9rem] ${WavePattern ==="Contact" && "text-gpgp-blue"} md:text-[1rem] xl:text-[1.5rem]`}>
                  {SponsorFormLegend.contact}
                </h4>
                <h2 className="text-[1rem] md:text-[1.2rem] xl:text-[1.9rem] m-10">
                  OR
                </h2>
                <h4
                  className={`text-[0.9rem] md:text-[1.1rem] xl:text-[1.3rem] ${
                    WavePattern === "Contact"
                      ? "text-black bg-white"
                      : " text-white bg-gpgp-blue"
                  }  z-50 px-4 xxl:text-[1.7rem] font-semibold mb-4`}
                >
                  Leave your details and we’ll contact you
                </h4>
              </div>
            )}
            {WavePattern === "Artist" && (
              <h4
                className={`text-[0.9rem] md:text-[1.1rem] text-center xl:text-[1.3rem]  text-white bg-gpgp-blue  z-50 px-4 xxl:text-[1.7rem] font-semibold mb-4`}
              >
                Leave your details and we’ll contact you
              </h4>
            )}
            <form
              className={`flex flex-wrap sm:border md:border-2 ${
                WavePattern === "Contact" ? "border-[#0A2471]" : "border-white"
              } rounded-[13px] sm:px-5 sm:mt-[-32px] pt-10 xl:px-7 pb-4 -mx-2`}
            >
              {formField.map((field) =>
                field.width === "half" ? (
                  <div
                    key={field.id}
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
                  >
                    <label
                      htmlFor={field.id}
                      className={`block font-semibold ${
                        WavePattern === "Contact"
                          ? "text-gpgp-blue"
                          : "text-white"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className={`border ${WavePattern === "Contact" ? "border-[#0A2471]" : "border-white"} rounded px-3 py-2 w-full`}
                    />
                  </div>
                ) : (
                  <div key={field.id} className="w-full p-2">
                    <label
                      htmlFor={field.id}
                      className={`block font-semibold ${
                        WavePattern === "Contact"
                          ? "text-gpgp-blue"
                          : "text-white"
                      }`}
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.label}
                        id={field.id}
                        rows={field.label === "Message" ? rows : 8}
                        className={`border ${WavePattern === "Contact" ? "border-[#0A2471]" : "border-white"} rounded px-3 py-2 w-full text-black`}
                      />
                    ) : field.type === "file" ? (
                      <CustomFileInput label={field.label} id={field.id} />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        className={`border ${WavePattern === "Contact" ? "border-[#0A2471]" : "border-white"} rounded px-3 py-2 w-full`}
                      />
                    )}
                  </div>
                )
              )}
            </form>
            <button className="m-10 border w-[150px] h-[50px] rounded-lg bg-gpgp-blue text-white font-bold text-[1.3rem] tracking-[3px]">
              Send
            </button>
          </div>
        </div>
      </BackPattern>
    </div>
  );
}
