import { create } from 'zustand';

import { translations } from './translations';

import type LanguageState from '../../infra/models/store/language-state';

import type Language from '../../infra/models/language';

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  t: translations['en'],
  setLanguage: (lang: Language) =>
    set(() => ({
      language: lang,
      t: translations[lang],
    })),
}));
