import ArtistFormBg from "./ArtistFormBg";
import SponsorFormBg from "./SponsorFormBg";
import CustomFileInput from "./CustomFileInput";
import ContactWave from "../../contact/ContactWave";

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
  return (
    <div
      className={`relative ${
        WavePattern === "Contact" && "mt-[-90px]"
      } md:mt-16 h-auto`}
    >
      <BackPattern>
        <div
          className={`w-full  pt-[250px] xl:pt[650px] ${
            WavePattern === "Contact" &&
            "md:pt-[650px] xl:pt-[550px] xxl:pt-[600px] xxxl:pt-[640px] xxxxl:pt-[1050px] pt-[150px]"
          }`}
        >
          <div className="px-16 xl:pr-28 flex flex-col items-center  -mb-10">
            {SponsorFormLegend && (
              <div className="flex flex-col text-white items-center text-center ">
                <h3 className="text-[1.2rem] md:text-[1.6rem] xxl:text-[2rem] xxxl:text-[2.3rem] font-semibold mb-4">
                  {SponsorFormLegend.heading}
                </h3>
                <h4 className="text-[0.9rem] md:text-[1rem] xl:text-[1.5rem]">
                  {SponsorFormLegend.contact}
                </h4>
                <h2 className="text-[1rem] md:text-[1.2rem] xl:text-[1.9rem] m-10">
                  OR
                </h2>
                <h4 className="text-[0.9rem] md:text-[1.1rem] xl:text-[1.3rem] bg-gpgp-blue z-50 px-4 xxl:text-[1.7rem] font-semibold mb-4">
                  Leave your details and we’ll contact you
                </h4>
              </div>
            )}
            {WavePattern === "Artist" && <h4 className="text-[0.9rem] md:text-[1.1rem] xl:text-[1.3rem] text-white bg-gpgp-blue z-50 px-4 xxl:text-[1.7rem] font-semibold mb-4">
              Leave your details and we’ll contact you
            </h4>}
            <form className="flex flex-wrap sm:border md:border-2 sm:mt-[-32px] pt-10 xl:px-7 pb-4 -mx-2">
              {formField.map((field) =>
                field.width === "half" ? (
                  <div
                    key={field.id}
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
                  >
                    <label
                      htmlFor={field.id}
                      className="block font-semibold text-white"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                ) : (
                  <div key={field.id} className="w-full p-2">
                    <label
                      htmlFor={field.id}
                      className="block font-semibold text-white"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.label}
                        id={field.id}
                        rows={10}
                        className="border rounded px-3 py-2 w-full text-black"
                      />
                    ) : field.type === "file" ? (
                      <CustomFileInput label={field.label} id={field.id} />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        className="border rounded px-3 py-2 w-full"
                      />
                    )}
                  </div>
                )
              )}
            </form>
            <button className="m-10 border w-[150px] h-[50px] rounded-lg bg-white text-gpgp-blue font-bold text-[1.3rem] tracking-[3px]">
              Send
            </button>
          </div>
        </div>
      </BackPattern>
    </div>
  );
}
