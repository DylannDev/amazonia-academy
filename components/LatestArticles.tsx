import { blogArticles } from "@/data";
import BlogCard from "./BlogCard";
import Button from "./ui/Button";
import Section from "./ui/Section";
import Title from "./ui/Title";

const LatestArticles = () => {
  return (
    <Section>
      <div className="w-full flex justify-between items-center mb-10">
        <Title level="h2" label="Nos derniers articles" className="mb-0" />
        <Button label="Voir tous nos articles" />
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {blogArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </Section>
  );
};

export default LatestArticles;
