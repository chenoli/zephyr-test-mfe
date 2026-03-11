type SidebarState = {
  isOpen: boolean;
  selectedPage: 'SOFT_SKILL' | 'ABOUT_ME';
  close: () => void;
  open: () => void;
  toggle: () => void;
  setSelectedPage: (page: 'SOFT_SKILL' | 'ABOUT_ME') => void;
};

export default SidebarState;
