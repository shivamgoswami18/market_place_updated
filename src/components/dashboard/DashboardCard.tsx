import Image, { StaticImageData } from 'next/image';
import BaseButton from '../base/BaseButton';
import { getTranslationSync } from '@/i18n/i18n';
import { commonLabels } from '../constants/Common';

interface BaseCardProps {
  id?: number | string;
  image?: string | StaticImageData;
  title?: string;
  category?: string;
  date?: string;
  status?: string;
}

export default function DashboardCard({
  id,
  image,
  title,
  category,
  date,
  status,
}: BaseCardProps) {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  const statusColor =
    status === commonLabels.open
      ? 'bg-white/95 text-emrladGreen'
      : status === commonLabels.inProgress
      ? 'bg-white/95 text-vividBlue'
      : 'bg-white/95 text-obsidianBlack opacity-70';

  return (
    <div
      key={id}
      className="bg-white rounded-2xl border-2 border-softGray border-opacity-50 border-solid"
    >
      {image && (
        <div className="relative w-full">
          <Image
            src={image}
            alt={title || t('dashboardCardConstants.dashboardNoProjectImageAlt')}
            className="w-full h-auto object-cover"
            unoptimized
          />
          {status && (
            <div
              className={`absolute top-3 right-3 px-3 py-1 text-sm rounded-[14px] xl:leading-[100%] xl:tracking-[0px] ${statusColor}`}
            >
              {status}
            </div>
          )}
        </div>
      )}  

      <div className="p-5">
        <p className="text-lg text-obsidianBlack mb-[3px] xl:leading-[100%] xl:tracking-[0px]">{title}</p>

        <p className="text-obsidianBlack opacity-70 font-light mb-[18px] xl:leading-[100%] xl:tracking-[0px]">
          {category}
        </p>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="text-obsidianBlack opacity-40 font-normal text-xs xl:leading-[100%] xl:tracking-[0px]">
            {t("dashboardCardConstants.dashboardCardDatePosted")}{date}
          </p>

          <BaseButton
            className="bg-deepTeal/10 text-deepTeal border-none px-[31px] py-[10px] font-medium text-sm rounded-lg xl:leading-[100%] xl:tracking-[0px]"
            label={t("dashboardCardConstants.dashboardCardButtonText")}
          />
        </div>
      </div>
    </div>
  );
}
