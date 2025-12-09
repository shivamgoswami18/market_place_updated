import BaseAccordion from "../base/BaseAccordion";
import { getTranslationSync } from "@/i18n/i18n";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const DUMMY_FAQS = [
  {
    question: "Er det gratis å legge ut et prosjekt?",
    answer:
      "Dette avhenger av prosjektets type og beliggenhet, men de fleste kunder mottar flere tilbud.",
  },
  {
    question: "Er det gratis å legge ut et prosjekt?",
    answer:
      "Dette avhenger av prosjektets type og beliggenhet, men de fleste kunder mottar flere tilbud.",
  },
  {
    question: "Er fagfolkene verifisert?",
    answer:
      "Ja, alle fagfolk på plattformen vår gjennomgår en verifiseringsprosess for å sikre kvalitet og pålitelighet.",
  },
  {
    question: "Betaler jeg gjennom plattformen?",
    answer:
      "Betalingsalternativene varierer etter prosjekt. Du kan diskutere betalingsvilkår direkte med fagpersonen du velger.",
  },
];

const FAQSection = ({ faqs = DUMMY_FAQS }: FAQSectionProps) => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };

  return (
    <div className="w-full bg-white mt-[100px]">
      <div className="w-full mx-auto max-w-container xl:max-w-[1200px] flex flex-col px-[20px] xs:px-[40px] md:px-[80px] desktop:px-[152px]">
        <h2 className="text-titleMid xxs:text-titleXl md:text-titleXxlPlus desktop:text-titleXxxl font-bold text-obsidianBlack text-center xl:leading-[100%] tracking-[0px] mb-[43px]">
          {t("homePageConstants.frequentlyAskedQuestions")}
        </h2>

        <BaseAccordion items={faqs} defaultExpandedIndex={1} />
      </div>
    </div>
  );
};

export default FAQSection;
