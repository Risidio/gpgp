import { useSinglePrismicDocument } from "@prismicio/react";
import BottomContributeWaveSection from "../components/base/BottomContributeWaveSection";
import InviteHero from "../components/contribute/Invitation/InviteHero";
import NewInvitationForm from "../components/contribute/Invitation/NewInvitationForm";
import prismicDocumentTypes from "../utility/prismicDocumentTypes";

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
  const [document] = useSinglePrismicDocument(prismicDocumentTypes.gallery);
  return (
    <>
      <InviteHero heading={heading} />

      <NewInvitationForm
        formField={formFields}
        heading={heading}
        Classes={{
          FormBtn: "",
        }}
      />

      <section className="mt-9">
       <BottomContributeWaveSection contents={document?.data["body"][3].primary}/>
      </section>
      </>
  );
}
