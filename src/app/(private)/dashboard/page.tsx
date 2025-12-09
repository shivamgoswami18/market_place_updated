import { CreateProjectPlusIcon } from '@/assets/icons/CommonIcons';
import BaseButton from '@/components/base/BaseButton';
import DashboardHeaderCard from '@/components/dashboard/DashboardHeaderCard';
import AddProjectIllustration from '@/assets/images/dashboard_add_icon.png';
import Image from 'next/image';
import { getTranslationSync } from '@/i18n/i18n';
import cardImage1 from '@/assets/images/dashboard_project_card_image1.png';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { createMetadata } from '@/lib/metadata/metadataHelper';
import { pageTitles } from '@/components/constants/PageTitles';

export const metadata = createMetadata(pageTitles.dashboardPageTitle);
const page = () => {
  const t = (key: string, params?: Record<string, string>) => {
    return getTranslationSync(key, params);
  };
  const dashboardCardConst = [
    {
      id: 1,
      title: 'Kjøkkenrenovering',
      category: 'Snekker',
      date: '2025-11-22',
      status: 'Open',
      image: cardImage1,
    },
    {
      id: 2,
      title: 'Reparasjon av baderørsanlegg',
      category: 'Rørlegger',
      date: '2025-11-22',
      status: 'In Progress',
      image: cardImage1,
    },
    {
      id: 3,
      title: 'Elektrisk installasjon for nytt rom',
      category: 'Elektriker',
      date: '2025-11-22',
      status: 'Open',
      image: cardImage1,
    },
    {
      id: 4,
      title: 'Reparasjon av baderørsanlegg',
      category: 'Rørlegger',
      date: '2025-11-22',
      status: 'In Progress',
      image: cardImage1,
    },
    {
      id: 5,
      title: 'Kjøkkenrenovering',
      category: 'Snekker',
      date: '2025-11-22',
      status: 'Open',
      image: cardImage1,
    },
    {
      id: 6,
      title: 'Elektrisk installasjon for nytt rom',
      category: 'Elektriker',
      date: '2025-11-22',
      status: 'Open',
      image: cardImage1,
    },
    {
      id: 7,
      title: 'Elektrisk installasjon for nytt rom',
      category: 'Elektriker',
      date: '2025-11-22',
      status: 'Open',
      image: cardImage1,
    },
    {
      id: 8,
      title: 'Kjøkkenrenovering',
      category: 'Snekker',
      date: '2025-11-22',
      status: 'Open',
      image: cardImage1,
    },
    {
      id: 9,
      title: 'Reparasjon av baderørsanlegg',
      category: 'Rørlegger',
      date: '2025-11-22',
      status: 'In Progress',
      image: cardImage1,
    },
  ];
  return (
    <div className="w-full">
      <DashboardHeaderCard />
      <div className=" bg-white rounded-[16px] mt-[34px] shadow-[0px_0px_32px_0px_rgba(16,138,0,0.1)]">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 p-5 border-0 border-b border-solid border-graySoft border-opacity-[40%]">
          <div className="text-xl text-obsidianBlack font-light xl:leading-[100%] xl:tracking-[0px]">
            {t('dashboardCardConstants.dashboardTitleActiveProjects')}
          </div>

          <BaseButton
            startIcon={<CreateProjectPlusIcon />}
            className="px-[17px] py-[10px] rounded-lg focus:ring-0 text-sm bg-deepTeal xl:leading-[100%] xl:tracking-[0px]"
            label={t('dashboardCardConstants.dashboardNewProjectButtonText')}
          />
        </div>

        {dashboardCardConst?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-5">
            {dashboardCardConst?.map((project) => (
              <DashboardCard
                key={project?.id}
                id={project?.id}
                image={project?.image}
                title={project?.title}
                category={project?.category}
                date={project?.date}
                status={project?.status}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center space-y-4">
            <div className="relative">
              <Image
                src={AddProjectIllustration}
                alt={t('dashboardCardConstants.dashboardNoProjectImageAlt')}
              />

              <BaseButton
                startIcon={<CreateProjectPlusIcon />}
                className="absolute left-1/2 bottom-0 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deepTeal p-0 focus:ring-0 xl:leading-[100%] xl:tracking-[0px]"
              />
            </div>

            <p className="text-xl text-obsidianBlack opacity-50 xl:leading-[100%] xl:tracking-[0px]">
              {t('dashboardCardConstants.dashboardCardNoActiveProject')}
            </p>

            <BaseButton
              startIcon={<CreateProjectPlusIcon />}
              className="px-[17px] py-[10px] rounded-lg bg-deepTeal text-sm focus:ring-0 xl:leading-[100%] xl:tracking-[0px]"
              label={t('dashboardCardConstants.dashboardNewProjectButtonText')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
