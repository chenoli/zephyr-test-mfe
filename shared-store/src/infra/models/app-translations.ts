import TextSegment from './text-segment';

interface AppTranslations {
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
}

export default AppTranslations;
