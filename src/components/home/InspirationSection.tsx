import { getTranslationSync } from "@/i18n/i18n";
import Image from "next/image";
import new_1_image from "@/assets/images/new_1_image.jpg";
import new_2_image from "@/assets/images/new_2_image.jpg";
import new_3_image from "@/assets/images/new_3_image.jpg";

const INSPIRATION_ARTICLES = [
  {
    image: new_1_image,
    title:
      "Skal du grave eller drenere i hagen? Miljøentreprenør deler sine beste tips",
    date: "November 10, 2025",
  },
  {
    image: new_2_image,
    title:
      "Skal du grave eller drenere i hagen? Miljøentreprenør deler sine beste tips",
    date: "November 11, 2025",
  },
  {
    image: new_3_image,
    title:
      "Skal du grave eller drenere i hagen? Miljøentreprenør deler sine beste tips",
    date: "November 12, 2025",
  },
];

const InspirationSection = () => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  return (
    <div className="w-full bg-white mt-[25px] md:mt-[48px] mb-[50px] md:mb-[100px]">
      <div className="w-full flex flex-col justify-center items-center mx-auto max-w-container px-[20px] xs:px-[40px] md:px-[80px] desktop:px-[152px]">
        <h2 className="text-titleMid xxs:text-titleXl md:text-titleXxlPlus desktop:text-titleXxxl font-bold text-obsidianBlack text-center xl:leading-[100%] tracking-[0px] mb-[40px] md:mb-[60px]">
          {t("homePageConstants.inspirationGoodAdviceAndNews")}
        </h2>

        <div className="flex flex-col lg:flex-row gap-[20px] w-full">
          {INSPIRATION_ARTICLES?.map((article, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-[16px] overflow-hidden hover:shadow-[0px_0px_32px_0px_#108A001A]"
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={article?.image}
                  alt={article?.title}
                  fill
                  className="object-cover max-h-[250px]"
                />
              </div>
              <div className="p-[16px] md:p-[24px]">
                <h3 className="text-textBase md:text-textLg xl:text-titleMid font-medium text-obsidianBlack mb-[15px] xl:leading-[32px] tracking-[0px]">
                  {article?.title}
                </h3>
                <p className="text-textSm md:text-textBase font-extraLight text-obsidianBlack text-opacity-50 xl:leading-[100%] tracking-[0px]">
                  {article?.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
