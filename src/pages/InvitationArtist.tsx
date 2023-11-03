import ContributeHero from "../components/contribute/ContributeHero";
import InvitationForm from "../components/contribute/Invitation/InvitationForm";

const InvitationArtist = () => {
  const HeroContent = {
    heading: "Invitation for artists",
    subheading: "Calling All Artists Submit Your Work",
    HeroLegend: [
      `Are you an artist passionate about environmental conservation and sustainable living? We invite you to submit your artwork, whether it's paintings, sculptures, photographs, or any other medium, to be featured in our awareness campaigns and fundraising initiatives. Your creativity can help us inspire change and bring attention to this critical cause.`,
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
      label: "Date of Birth",
      type: "date",
      width: "half",
      id: "date-of-birth",
    },
    {
      label: "Location",
      type: "text",
      width: "half",
      id: "location",
    },
    {
      label: "Phone Number",
      type: "tel",
      width: "half",
      id: "phone-number",
    },
    {
      label: "Email",
      type: "email",
      width: "half",
      id: "email",
    },
    {
      label: "Profession",
      type: "text",
      width: "half",
      id: "profession",
    },
    {
      label: "Field of Arts",
      type: "text",
      width: "half",
      id: "field-of-arts",
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

  const WavePattern = "Artist";
  return (
    <div>
      <ContributeHero
        HeroContent={HeroContent}
        classes={{
          container: "mb-[2.7rem] sm:-mb-8",
          image: "opacity-50 z-[-14px] hidden",
          heading: "sm:text-[2.2rem] lg:text-[2.4rem] xxl:text-[3rem] mb-7 sm:mb-10",
          subheading: "font-be-vietnam text-[1.2rem] md:text-[1.7rem] xxxl:text-[2rem]",
          paragraph: "w-[148%] leading-[1rem] sm:leading-6 xxl:text-[1.5rem] xxl:leading-[2rem]",
        }}
      />

      <InvitationForm formField={formFields} WavePattern={WavePattern} />
    </div>
  );
};

export default InvitationArtist;
