import BottomContributeWaveSection from "../components/base/BottomContributeWaveSection";
import InvitationForm from "../components/contribute/Invitation/InvitationForm";

export default function Contact() {
  const formFields = [
    {
      label: "Name",
      type: "text",
      width: "half",
      id: "full-name",
    },
    {
      label: "Email",
      type: "email",
      width: "half",
      id: "email",
    },

    {
      label: "Subject",
      type: "type",
      width: "full",
      id: "phone-number",
    },

    {
      label: "Purpose",
      type: "textarea",
      width: "full",
      id: "message",
    },
  ];

  const WavePattern = "Contact";

  const SponsorFormLegend = {
    heading: `We’d love to hear from you`,
    contact: `infinart@risidio.com`,
  };

  return (
    <div className="">
      <InvitationForm
        formField={formFields}
        WavePattern={WavePattern}
        SponsorFormLegend={SponsorFormLegend}
      />
      <BottomContributeWaveSection/>
    </div>
  );
}
