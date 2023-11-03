import ContributeHero from "../components/contribute/ContributeHero";
import InvitationForm from "../components/contribute/Invitation/InvitationForm";

export default function Contact() {
  const HeroContent = {
    heading: "Contacts",
  };

  const formFields = [
    {
      label: "Full Name",
      type: "text",
      width: "half",
      id: "full-name",
    },
    {
      label: "Title",
      type: "text",
      width: "half",
      id: "title",
    },

    {
      label: "Email",
      type: "email",
      width: "half",
      id: "email",
    },

    {
      label: "Phone Number",
      type: "tel",
      width: "half",
      id: "phone-number",
    },

    {
      label: "Message",
      type: "textarea",
      width: "full",
      id: "message",
    },
  ];

  const WavePattern = "Contact";

  const SponsorFormLegend = {
    heading: `Get in touch with us`,
    contact: `infinart@risidio.com`,
  };

  return (
    <div className="flex flex-col">
      <ContributeHero
        HeroContent={HeroContent}
        classes={{
          container: "mb:[-150px] md:mb-[-450px]",
          image: "hidden opacity-40 blur-md md:z-[-2px] z-[-4px]",
          heading: "mb-[20.25rem] sm:mb-[24rem]",
          paragraph: "",
        }}
      />

      <InvitationForm
        formField={formFields}
        WavePattern={WavePattern}
        SponsorFormLegend={SponsorFormLegend}
        Classes={{
            container: "top-[100px] xsm:top-[190px] sm:top-[300px] md:top-[380px] lg:top-[440px] xl:top-[520px]",
            heading: "",
            subheading: "",
            paragraph: "",
          }}
      />
    </div>
  );
}
