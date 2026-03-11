import { BookOpen, Menu, User, X } from 'lucide-react';

import { Button, NavItem } from 'design-system';
import { useSidebar, useLanguage } from 'shared_store/Store';

import Footer from './footer';

function Sidebar() {
  const { t } = useLanguage();
  const { isOpen, toggle, selectedPage, setSelectedPage } = useSidebar();

  return (
    <aside
      className={`flex flex-col bg-gray-900 h-screen transition-all duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'w-64' : 'w-16'
        }`}
    >
      <div
        className={`flex items-center h-14 px-3 border-b border-gray-700 ${isOpen ? 'justify-between' : 'justify-center'
          }`}
      >
        {isOpen && (
          <span className="text-white font-semibold text-sm tracking-wide duration-300 transition-all">
            Zephyr MF
          </span>
        )}
        <Button
          variant="icon"
          onClick={toggle}
          className="text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      <nav className="flex flex-col gap-1 p-2 mt-2">
        <NavItem
          icon={<BookOpen size={18} />}
          label={t.sidebar.softSkill}
          active={selectedPage === 'SOFT_SKILL'}
          collapsed={!isOpen}
          onClick={() => setSelectedPage('SOFT_SKILL')}
        />
        <NavItem
          icon={<User size={18} />}
          label={t.sidebar.aboutMe}
          active={selectedPage === 'ABOUT_ME'}
          collapsed={!isOpen}
          onClick={() => setSelectedPage('ABOUT_ME')}
        />
      </nav>
      <Footer />
    </aside>
  );
}

export default Sidebar;
