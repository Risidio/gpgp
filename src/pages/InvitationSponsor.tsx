import InviteHero from "../components/contribute/Invitation/InviteHero";
import NewInvitationForm from "../components/contribute/Invitation/NewInvitationForm";
import ContributionSection from "../components/gallery/Contribution";

export default function InvitationSponsor() {
 

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
