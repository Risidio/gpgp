// import ContributionSection from "../gallery/Contribution";
import { useSinglePrismicDocument } from "@prismicio/react";
import prismicDocumentTypes from "../../utility/prismicDocumentTypes";
import NewsInfo from "./NewsInfo";

const NewsDetail = () => {
  const [document] = useSinglePrismicDocument(
    prismicDocumentTypes.singleArticlePage
  );
  console.log(document);
  
  
  const primary = document?.data["body"][0].primary;
  const items = document?.data["body"][0].items;
  console.log(primary);
  console.log(items);

  return <NewsInfo contents={primary} items={items} />;
};
export default NewsDetail;
