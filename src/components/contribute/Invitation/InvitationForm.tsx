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
}: {
  formField: FormField[];
  WavePattern: string;
  SponsorFormLegend?: SponsorFormLegend;
  Classes?: any;
}) {
  return (
    <div className="relative mt-16 h-auto">
      {/* {WavePattern === "Artist" ? <ArtistFormBg /> : <SponsorFormBg />} */}
      <ContactWave>
      <div className="w-fullbg-gpgp-blue md:pt-[500px] pt-[150px]">
       <div className="px-16 flex flex-col items-center  -mb-10">
          {SponsorFormLegend && (
              <div className="flex flex-col text-white items-center text-center ">
                  <h3 className="text-[1.2rem] md:text-[1.6rem] font-semibold mb-4">{SponsorFormLegend.heading}</h3>
                  <h4 className="text-[0.9rem] md:text-[1rem]">{SponsorFormLegend.contact}</h4>
                  <h2 className="text-[1rem] md:text-[1.2rem] m-10">OR</h2>
                  <h4 className="text-[0.9rem] md:text-[1.1rem] xl:text-[1.3rem] font-semibold mb-4">
                    Leave your details and we’ll contact you
                   </h4>
            </div>
            )}
          <form className="flex flex-wrap pt-10 -mx-2">
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
      </ContactWave>
    </div>
  );
}