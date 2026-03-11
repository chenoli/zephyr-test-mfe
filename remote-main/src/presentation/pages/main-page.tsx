import { Typography } from 'design-system';
import { useLanguage, useSidebar } from 'shared_store/Store';

import ZephyrContent from '../components/zephyr-content';
import AboutMeContent from '../components/about-me-content';

export default function MainPage() {
  const { t } = useLanguage();
  const { selectedPage } = useSidebar();

  return (
    <main
      id="scrollable"
      className="w-full flex flex-col h-screen overflow-y-auto bg-gray-50"
    >
      <header className="sticky top-0 bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-4 z-10">
        <Typography as="h1" className="text-lg font-semibold text-gray-900">
          {selectedPage === 'SOFT_SKILL' ? t.zephyr.title : t.aboutMe.title}
        </Typography>
      </header>
      <div className="px-8 py-10 max-w-3xl">
        {selectedPage === 'SOFT_SKILL' ? <ZephyrContent /> : <AboutMeContent />}
      </div>
    </main>
  );
}
