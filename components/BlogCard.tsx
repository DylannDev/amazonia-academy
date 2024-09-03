import { BsCalendarDate } from "react-icons/bs";
import Card from "./ui/Card";
import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/app/types/blog";

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard = ({ article }: BlogCardProps) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href="/" className="cursor-pointer">
      <Card className="relative p-0 h-full flex flex-col">
        <div className="w-full h-[270px] relative overflow-hidden rounded-t-3xl">
          <Image
            src={article.image}
            alt="amazonia academy blog image"
            fill
            sizes="25vw"
            className="object-cover object-center rounded-t-3xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div className="p-5 flex flex-col justify-between gap-4 flex-grow">
          <h1 className="text-2xl font-bold text-black-100 line-clamp-2 overflow-hidden">
            {article.title}
          </h1>

          <p className="text-gray-500 text-sm flex-grow line-clamp-2 overflow-hidden">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src="/memoji.png"
                  alt="profile photo"
                  fill
                  sizes="100%"
                  className="object-cover object-center rounded-full"
                />
              </div>
              <p className="flex flex-col text-gray-500 font-medium">
                {article.author}
              </p>
            </div>
            <p className="text-gray-500 text-sm font-light flex items-center gap-1">
              <BsCalendarDate className="text-lg text-black-100" />
              <span>{formattedDate}</span>
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
