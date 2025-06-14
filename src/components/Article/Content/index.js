import printContent from "@/utils/printContent";

export default function ArticleContent({ content }) {
  if (content) {
    return <>{content.map((item, index) => printContent(item, index))}</>
  }
  return null;
}
  
