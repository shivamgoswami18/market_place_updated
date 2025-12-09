import BaseButton from "../base/BaseButton";
import {
  HowItWorksArrowRightIcon,
  DocumentStarIcon,
  PercentageIcon,
  TrophyIcon,
} from "@/assets/icons/CommonIcons";
import { getTranslationSync } from "@/i18n/i18n";
import HowItWorksCard from "./HowItWorksCard";
import BaseInput from "../base/BaseInput";

const HowItWorksSection = () => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  const cards = [
    {
      icon: <DocumentStarIcon />,
      title: t("homePageConstants.describeYourProject"),
      description: t("homePageConstants.describeYourProjectDescription"),
      isElevated: false,
    },
    {
      icon: <PercentageIcon />,
      title: t("homePageConstants.getOffersFromProfessionals"),
      description: t("homePageConstants.getOffersFromProfessionalsDescription"),
      isElevated: true,
    },
    {
      icon: <TrophyIcon />,
      title: t("homePageConstants.chooseTheRightProfessional"),
      description: t("homePageConstants.chooseTheRightProfessionalDescription"),
      isElevated: false,
    },
  ];

  return (
    <div className="w-full bg-white mt-[130px] mb-[50px] md:mb-[100px]">
      <div className="relative w-full mx-auto max-w-container flex flex-col px-[20px] xs:px-[40px] md:px-[80px] desktop:px-[152px]">
        <div className="w-full mx-auto px-[20px] xs:px-[40px] md:px-[80px] desktop:px-[152px] left-1/2 transform -translate-x-1/2 absolute  top-[-165px] md:top-[-180px]">
          <div className="relative w-full">
            <BaseInput
              placeholder={t("homePageConstants.whatDoYouNeedForYourHelp")}
              className="w-full bg-white text-textLg font-extraLight border-none text-darkGray placeholder:text-textLg placeholder:text-obsidianBlack rounded-[16px] pl-[20px] py-[20px] md:pl-[50px] pr-[90px] md:py-[34px] shadow-[0px_16px_32px_0px_#108A001A]"
            />
            <BaseButton
              className="bg-deepTeal border-none cursor-pointer rounded-[8px] p-[10px] flex items-center justify-center absolute right-[15px] md:right-[28px] top-1/2 transform -translate-y-1/2 z-10"
              endIcon={<HowItWorksArrowRightIcon />}
            />
          </div>
        </div>

        <h2 className="text-titleMid xxs:text-titleXl md:text-titleXxlPlus desktop:text-titleXxxl font-bold text-obsidianBlack text-center xl:leading-[100%] tracking-[0px]">
          {t("homePageConstants.howItWorks")}
        </h2>

        <div className="flex flex-col justify-center items-center md:flex-row gap-[40px] md:gap-[20px] mt-[50px] md:mt-[80px] desktop:mt-[100px] mb-[28px]">
          {cards?.map((card, index) => (
            <HowItWorksCard
              key={index}
              icon={card?.icon}
              title={card?.title}
              description={card?.description}
              isElevated={card?.isElevated}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <BaseButton
            label={t("homePageConstants.postAProjectFree")}
            className="bg-deepTeal border-none cursor-pointer rounded-[8px] py-[15px] px-[15px] sm:px-[25px] text-textSm md:text-textBase font-medium text-white items-center justify-center xl:leading-[24px] tracking-[0px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
