import InvitationForm from "../components/contribute/Invitation/InvitationForm";
import ContributionSection from "../components/project/Contribution";

export default function Contact() {


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

      <InvitationForm
        formField={formFields}
        WavePattern={WavePattern}
        SponsorFormLegend={SponsorFormLegend}
        
      />

      <section className="hidden md:block">
        <ContributionSection
          classes={{
            container: "mt-0  xxxxl:pt-[400px]",
            heading: "",
            subheading: "",
          }}
        />
      </section>
    </div>
  );
}
