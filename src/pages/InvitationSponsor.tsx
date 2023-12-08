import ContributeHero from "../components/contribute/ContributeHero";
import InvitationForm from "../components/contribute/Invitation/InvitationForm";
import InviteHero from "../components/contribute/Invitation/InviteHero";
import NewInvitationForm from "../components/contribute/Invitation/NewInvitationForm";
import ContributionSection from "../components/gallery/Contribution";

export default function InvitationSponsor() {
  const HeroContent = {
    heading: "Invitation for sponsors",
    subheading:
      "Do you believe in the power of art and innovation to drive environmental change? ",
    HeroLegend: [
      `If you're an investor who wants to support a project with a significant ecological and social impact, we encourage you to apply to become a vital partner in the GPGP Art Project. Your investment will help us clean up and prevent further pollution in the Great Pacific Garbage Patch. Join us in fostering a cleaner, healthier ocean ecosystem and a more sustainable future.`,
    ],
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

  const SponsorFormLegend = {
    heading: "Get in touch with us",
    contact: "infinart@risidio.com",
  };

  const heading = "Sponsor";
  return (
    <div>
      
    <InviteHero heading={heading} />

    <NewInvitationForm
      formField={formFields}
      heading={heading}
      Classes={{
        FormBtn: "",
      }}
    />

    <section className="">
      <ContributionSection
        classes={{
          container: " mt-4 md:mt-0 pb-[20px] md:pb-[2px] md:pt-[15px]",
          heading: "",
          subheading: "",
        }}
      />
    </section>
  </div>
  );
}
