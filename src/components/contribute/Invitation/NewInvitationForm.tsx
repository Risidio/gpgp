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

export default function NewInvitationForm({
  formField,
  heading,
  SponsorFormLegend,
  Classes,
}: {
  formField: FormField[];
  heading: string | undefined;
  SponsorFormLegend?: SponsorFormLegend;
  Classes?: Classes;
}) {
  

  const [rows, setRows] = useState(1);

  useEffect(() => {
    const updateRows = () => {
      heading === "Contact"
        ? setRows(window.innerWidth >= 640 ? 6 : 1)
        : setRows(window.innerWidth >= 640 ? 10 : 1);
    };

    updateRows();

    window.addEventListener("resize", updateRows);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateRows);
    };
  }, [heading]); // Empty dependency array to run the effect only once on mount

  return (
    <div
      className={`relative mt-[14px] sm:mt-[90px] `}
    >
      <div
        className={`w-full   "pt-2" `}
      >
        <div className={`px-16 xl:pr-28 flex flex-col items-center   -mb-10`}>
          <h4
            className={`font-semibold text-[0.9rem] md:text-[1.1rem] text-center xl:text-[1.3rem] text-gpgp-blue md:text-black bg-white  z-50 px-4 xxl:text-[1.7rem]  mb-4`}
          >
            Leave your details and we’ll contact you
          </h4>

          <form
            className={`flex flex-wrap sm:border md:border-[3px]  border-[#0A2471] rounded-[33px] sm:px-5 sm:mt-[-32px] pt-10 px-5 xl:px-7 pb-10 -mx-2`}  >
            {formField.map((field) =>
              field.width === "half" ? (
                <div
                  key={field.id}
                  className="w-full mt-3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
                >
                  <label
                    htmlFor={field.id}
                    className={`block font-semibold
                    
                        text-gpgp-blue
                       
                    `}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className={`border  border-[#0A2471] rounded-[7px] lg:h-[55px]   px-3 py-2 w-full`}
                  />
                </div>
              ) : (
                <div key={field.id} className="w-full p-2">
                  <label
                    htmlFor={field.id}
                    className={`block font-semibold  text-gpgp-blue rounded-[7px]  `}
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.label}
                      id={field.id}
                      rows={field.label === "Message" ? rows : 8}
                      className={`border border-[#0A2471] rounded-[7px] 
                      px-3 py-2 w-full text-black`}
                    />
                  ) : field.type === "file" ? (
                    <CustomFileInput label={field.label} id={field.id} />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className={`border  border-[#0A2471] lg:h-[55px] rounded-[7px] px-3 py-2 w-full`}
                    />
                  )}
                </div>
              )
            )}
          </form>
          <button
            className={`m-10 border w-[150px] md:w-[200px] md:h-[55px] h-[50px] xxl:w-[250px] xxl:h-[65px] bg-gpgp-blue text-white font-bold 
            text-[1.3rem] lg:text-[1.5rem] tracking-[3px] ${Classes?.FormBtn}`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
