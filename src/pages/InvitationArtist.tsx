import InviteHero from "../components/contribute/Invitation/InviteHero";
import NewInvitationForm from "../components/contribute/Invitation/NewInvitationForm";
import ContributionSection from "../components/gallery/Contribution";

const InvitationArtist = () => {
 
  const formFields = [
    {
      label: "Full Name",
      type: "text",
      width: "half",
      id: "full-name",
    },

    {
      label: "Profession",
      type: "text",
      width: "half",
      id: "profession",
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
      label: "Title of the artwork",
      type: "text",
      width: "full",
      id: "Title_artwork",
    },
    {
      label: "Description of the artwork",
      type: "textarea",
      width: "full",
      id: "Description_artwork",
    },
    {
      label: "Upload your artwork here",
      type: "file",

      width: "full",
      id: "Upload_artwork ",
    },
  ];

  const heading = "Artist";
  return (
    <div className="">
      
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
            container: " mt-4 pb-[20px] md:pb-[2px] md:pt-[15px]",
            heading: "",
            subheading: "",
          }}
        />
      </section>
    </div>
  );
};

export default InvitationArtist;
