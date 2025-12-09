import hero_section_men_image from "@/assets/images/hero_section_men_image.png";
import hero_section_shape_image from "@/assets/images/hero_section_shape_image.png";
import Image from "next/image";
import BaseButton from "../base/BaseButton";
import {
  HomePageUserIcon,
  HomePageRatingIcon,
} from "@/assets/icons/CommonIcons";
import { getTranslationSync } from "@/i18n/i18n";
import { homePageConstants } from "../constants/HomePage";

const HeroSection = () => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  return (
    <div className="w-full bg-aquaMist pb-[50px] md:pb-[0px]">
      <div className="w-full mx-auto max-w-container flex flex-col xl:flex-row items-center justify-between p-[20px] xs:p-[40px] md:px-[80px] md:py-[50px] desktop:px-[152px] desktop:py-[77px]">
        <div className="flex flex-col w-full xl:max-w-[50%]">
          <h1 className="text-titleMid xxs:text-titleXl sm:text-titleXxl md:text-titleXxlPlus xl:text-titleHuge font-bold text-obsidianBlack xl:leading-[72px] xl:tracking-[-1px]">
            {t("homePageConstants.findTrustedProfessionals")}
          </h1>

          <p className="text-textBase sm:text-textMd md:text-textLg font-extraLight text-obsidianBlack my-[10px] xl:mt-[34px] xl:mb-[42px] xl:leading-[32px] tracking-[0px]">
            {t("homePageConstants.projectDescription")}
          </p>

          <div className="flex flex-col xs:flex-row gap-[10px] xs:gap-[24px]">
            <BaseButton
              label={t("homePageConstants.postAProjectFree")}
              className="text-textSm sm:text-textBase font-medium bg-deepTeal border-none cursor-pointer text-white rounded-[8px] py-[15px] px-[15px] sm:px-[25px] xl:leading-[24px] tracking-[0px] w-full xs:w-auto items-center justify-center"
            />

            <BaseButton
              label={t("homePageConstants.becomeAProfessional")}
              className="text-textSm sm:text-textBase font-medium text-obsidianBlack bg-white cursor-pointer border-charcoalPale border-[2px] rounded-[8px] py-[15px] px-[15px] sm:px-[29px] xl:leading-[24px] tracking-[0px] w-full xs:w-auto items-center justify-center"
            />
          </div>
        </div>

        <div className="w-full xl:max-w-[50%] flex justify-center items-center mt-[50px] xl:mt-0">
          <div className="relative w-full max-w-[500px] xl:max-w-none">
            <Image
              src={hero_section_men_image}
              alt={t("homePageConstants.heroSectionMenImageAlt")}
              className="w-full h-auto"
            />

            <div className="absolute top-[-50px] right-[-10px] z-10 hidden md:block">
              <Image
                src={hero_section_shape_image}
                alt={t("homePageConstants.heroSectionShapeImageAlt")}
              />
            </div>

            <div className="flex relative md:absolute  md:bottom-[120px] md:left-[-75px] z-20 bg-white rounded-[8px] p-[10px]">
              <div className="flex items-center gap-[12px]">
                <div className="bg-deepTeal bg-opacity-5 p-[12px] rounded-[10px]">
                  <HomePageUserIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-titleSm sm:text-titleMid md:text-titleLg font-bold xl:leading-[32px] tracking-[0px]">
                    {homePageConstants.satisfiedClientsCount}
                  </span>
                  <span className="text-textSm sm:text-textBase font-light xl:leading-[100%] tracking-[0px] text-obsidianBlack text-opacity-70">
                    {t("homePageConstants.satisfiedClients")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex relative md:absolute md:top-[200px] md:right-[-15px] xl:top-[280px] xl:right-[-5px] z-20 bg-white rounded-[8px] p-[10px] mt-[10px] md:mt-[0px]">
              <div className="flex md:flex-col gap-[12px]">
                <div className="bg-deepTeal bg-opacity-5 p-[12px] rounded-[10px] flex justify-center items-center">
                  <HomePageRatingIcon />
                </div>
                <div className="flex flex-col md:items-center">
                  <span className="text-titleSm sm:text-titleMid md:text-titleLg font-bold xl:leading-[32px] tracking-[0px]">
                    {homePageConstants.ratingCount}
                  </span>
                  <span className="text-textSm sm:text-textBase font-light xl:leading-[100%] tracking-[0px] text-obsidianBlack text-opacity-70">
                    {t("homePageConstants.rating")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
