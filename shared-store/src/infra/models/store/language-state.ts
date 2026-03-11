import type AppTranslations from '../app-translations';
import type Language from '../language';

interface LanguageState {
  language: Language;
  t: AppTranslations;
  setLanguage: (lang: Language) => void;
}

export default LanguageState;
