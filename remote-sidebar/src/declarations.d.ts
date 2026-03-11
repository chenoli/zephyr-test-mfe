declare module 'shared_store/Store' {
  import type { UseBoundStore, StoreApi } from 'zustand';

  type SharedStoreState = {
    isOpen: boolean;
    selectedPage: 'SOFT_SKILL' | 'ABOUT_ME';
    close: () => void;
    open: () => void;
    toggle: () => void;
    setSelectedPage: (page: 'SOFT_SKILL' | 'ABOUT_ME') => void;
  };

  type Language = 'pt' | 'en';

  type AppTranslations = {
    nav: {
      softSkill: string;
      aboutMe: string;
    };
    separator: {
      softSkill: string;
      aboutMe: string;
    };
    communication: {
      title: string;
      paragraphs: TextSegment[][];
    };
    footer: {
      madeWith: string;
      by: string;
    };
    sidebar: {
      softSkill: string;
      aboutMe: string;
    };
    zephyr: {
      title: string;
      intro: string;
      understanding: { title: string; text: string };
      feedback: { title: string; text: string };
    };
    aboutMe: {
      title: string;
      hello: string;
      name: string;
      role: string;
      bio: string;
      contact: string;
    };
  };

  type LanguageState = {
    language: Language;
    t: AppTranslations;
    setLanguage: (lang: Language) => void;
  };

  const useSidebar: UseBoundStore<StoreApi<SharedStoreState>>;
  const useLanguage: UseBoundStore<StoreApi<LanguageState>>;
  export { useSidebar, useLanguage };
}
