import {
  DashboardHeaderBagIcon,
  DashboardHeaderCompletedIcon,
  DashboardHeaderStarIcon,
} from '@/assets/icons/CommonIcons';
import { getTranslationSync } from '@/i18n/i18n';
function DashboardHeaderCard() {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  const dashboardHeaderCardConst = [
    {
      icon: <DashboardHeaderBagIcon className='text-deepTeal'/>,
      title: t('dashboardHeaderCard.headerCardTitleActiveProjects'),
      value: 0,
    },
    {
      icon: <DashboardHeaderStarIcon />,
      title: t('dashboardHeaderCard.headerCardTitleTotalOffers'),
      value: 0,
    },
    {
      icon: <DashboardHeaderCompletedIcon />,
      title: t('dashboardHeaderCard.headerCardTitleCompleted'),
      value: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {dashboardHeaderCardConst?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 rounded-2xl bg-white px-5 py-5 shadow-sm"
        >
          <div className="flex rounded-custom  items-center justify-center p-[15px] bg-mintUltraLight">
            {item?.icon}
          </div>

          <div className='space-y-[2px]'>
            <p className="text-base font-light text-charcoalGrey opacity-70">
              {item?.title}
            </p>
            <p className="text-2xl font-semibold text-obsidianBlack">
              {item?.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardHeaderCard;
