import { create } from 'zustand';

import type SidebarState from '../../infra/models/store/sidebar-state';

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  selectedPage: 'SOFT_SKILL',
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setSelectedPage: (page) => set({ selectedPage: page }),
}));
