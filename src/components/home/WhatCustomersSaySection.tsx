import { getTranslationSync } from "@/i18n/i18n";
import TestimonialSlider from "./TestimonialSlider";

export interface Testimonial {
  rating: number;
  text: string;
  name: string;
  date: string;
  imageUrl: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    rating: 4,
    text: "Very easy to use and great service! I received multiple offers within hours and chose a fantastic carpenter.",
    name: "Maria K.",
    date: "November 10, 2025",
    imageUrl: "https://i.pravatar.cc/150?img=47",
  },
  {
    rating: 5,
    text: "Very easy to use and great service! I received multiple offers within hours and chose a fantastic carpenter.",
    name: "Maria K.",
    date: "November 10, 2025",
    imageUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    rating: 4,
    text: "Very easy to use and great service! I received multiple offers within hours and chose a fantastic carpenter.",
    name: "Maria K.",
    date: "November 10, 2025",
    imageUrl: "https://i.pravatar.cc/150?img=33",
  },
  {
    rating: 3,
    text: "Very easy to use and great service! I received multiple offers within hours and chose a fantastic carpenter.",
    name: "Maria K.",
    date: "November 10, 2025",
    imageUrl: "https://i.pravatar.cc/150?img=68",
  },
];

interface WhatCustomersSaySectionProps {
  testimonials?: Testimonial[];
}

const WhatCustomersSaySection = ({
  testimonials = DEFAULT_TESTIMONIALS,
}: WhatCustomersSaySectionProps) => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto max-w-container px-[20px] xs:px-[40px] md:px-[80px] desktop:px-[152px]">
        <h2 className="text-titleMid xss:text-titleXl md:text-titleXxlPlus desktop:text-titleXxxl font-bold text-obsidianBlack text-center xl:leading-[100%] tracking-[0px]">
          {t("homePageConstants.whatCustomersSay")}
        </h2>

        <p className="max-w-[700px] text-center text-textBase desktop:text-textLg font-extraLight text-obsidianBlack xl:leading-[32px] tracking-[0px] mx-auto mt-[48px] mb-[40px]">
          {t("homePageConstants.whatCustomersSayDescription")}
        </p>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default WhatCustomersSaySection;
