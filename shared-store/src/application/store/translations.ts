import type AppTranslations from '../../infra/models/app-translations';
import type Language from '../../infra/models/language';

const pt: AppTranslations = {
  nav: {
    softSkill: 'Soft Skill',
    aboutMe: 'Sobre mim',
  },
  separator: {
    softSkill: 'SOFT SKILL',
    aboutMe: 'SOBRE MIM',
  },
  communication: {
    title: 'Comunicação',
    paragraphs: [
      [
        {
          text: 'Na minha opnião, a comunicação é a chave pra toda, e qualquer, ',
          type: 'normal',
        },
        { text: 'soft skill.', type: 'highlight' },
        {
          text: ' Um bom nível dessa habilidade deixa mais fácil ',
          type: 'normal',
        },
        { text: 'o desenvolvimento', type: 'highlight' },
        { text: ' das outras skills.', type: 'normal' },
      ],
      [
        {
          text: 'Um ambiente comunicativo acelera o aprendizado, e melhora a atmosfera. ',
          type: 'normal',
        },
        { text: 'Compartilhar', type: 'highlight' },
        {
          text: ' suas dúvidas e conhecimentos de forma efetiva ajuda, tanto a você, quanto seus companheiros.',
          type: 'normal',
        },
      ],
      [
        { text: 'De acordo com um ', type: 'normal' },
        { text: 'estudo', type: 'highlight' },
        { text: ' realizado pelo ', type: 'normal' },
        {
          text: 'CareerBuilder',
          type: 'link',
          href: 'https://www.careerbuilder.com/',
        },
        {
          text: ', cerca de 77% de recrutadores consideram que as soft skills são tão ',
          type: 'normal',
        },
        { text: 'importantes', type: 'highlight' },
        { text: ' quanto skills técnicas.', type: 'normal' },
      ],
      [
        {
          text: 'Ainda na mesma pesquisa, dentre as 10 soft skills que as empresas mais buscam nos profissionais, 56% dizem que o candidato deve ser um ',
          type: 'normal',
        },
        { text: 'Comunicador Efetivo.', type: 'highlight' },
      ],
    ],
  },
  footer: {
    madeWith: 'Feito com',
    by: 'por',
  },
  sidebar: {
    softSkill: 'Soft Skill',
    aboutMe: 'Sobre Mim',
  },
  zephyr: {
    title: 'Platforma Zephyr',
    intro:
      'Achei a plataforma da Zephyr muito simples de usar para subir uma aplicação. Todo o processo foi bem direto ao ponto, sem etapas desnecessárias ou complicações. Mesmo sendo a primeira vez que utilizei, consegui entender rapidamente como configurar e colocar minha aplicação no ar. No geral, a experiência foi fluida e eficiente, o que me deu confiança para explorar outras funcionalidades da plataforma.',
    understanding: {
      title: 'Como funciona',
      text: 'A aplicação foi construída com Module Federation com vários remotes independentes. Cada micro-frontend expõe seus módulos via remoteEntry.js, e o host consome eles em runtime sem precisar de rebuild. Também usei uma biblioteca de componentes compartilhada via npm link, então consigo editar os componentes localmente e ver as mudanças refletindo direto em todos os remotes.',
    },
    feedback: {
      title: 'Feedback do processo',
      text: 'O processo foi surpreendentemente tranquilo. Configurar o vite-plugin-federation, expor os módulos e conectar os remotes levou pouco tempo. O npm link funcionou bem para o desenvolvimento local da design system. No geral, a experiência foi fluida e a plataforma abstraiu bem a complexidade do Module Federation.',
    },
  },
  aboutMe: {
    title: 'Sobre Mim',
    hello: 'Olá, eu sou',
    name: 'Carlos Henrique de Oliveira.',
    role: 'Desenvolvedor React & React Native há 10 anos, com sólida experiência fullstack.',
    bio: 'Apaixonado por construir interfaces modernas e funcionais, e sistemas robustos. Sempre em busca de novos desafios e tecnologias.',
    contact: 'Entre em contato:',
  },
};

const en: AppTranslations = {
  nav: {
    softSkill: 'Soft Skill',
    aboutMe: 'About Me',
  },
  separator: {
    softSkill: 'SOFT SKILL',
    aboutMe: 'ABOUT ME',
  },
  communication: {
    title: 'Communication',
    paragraphs: [
      [
        {
          text: 'In my opinion, communication is the key to every single ',
          type: 'normal',
        },
        { text: 'soft skill.', type: 'highlight' },
        {
          text: ' A good level of this ability makes it easier to develop ',
          type: 'normal',
        },
        { text: 'other skills.', type: 'highlight' },
        { text: '', type: 'normal' },
      ],
      [
        {
          text: 'A communicative environment accelerates learning and improves the atmosphere. ',
          type: 'normal',
        },
        { text: 'Sharing', type: 'highlight' },
        {
          text: ' your questions and knowledge effectively helps both you and your teammates.',
          type: 'normal',
        },
      ],
      [
        { text: 'According to a ', type: 'normal' },
        { text: 'study', type: 'highlight' },
        { text: ' conducted by ', type: 'normal' },
        {
          text: 'CareerBuilder',
          type: 'link',
          href: 'https://www.careerbuilder.com/',
        },
        {
          text: ', about 77% of recruiters consider soft skills to be just as ',
          type: 'normal',
        },
        { text: 'important', type: 'highlight' },
        { text: ' as technical skills.', type: 'normal' },
      ],
      [
        {
          text: 'In the same research, among the 10 soft skills companies seek most in professionals, 56% say the candidate must be an ',
          type: 'normal',
        },
        { text: 'Effective Communicator.', type: 'highlight' },
      ],
    ],
  },
  footer: {
    madeWith: 'Made with',
    by: 'by',
  },
  sidebar: {
    softSkill: 'Soft Skill',
    aboutMe: 'About Me',
  },
  zephyr: {
    title: 'Zephyr Platform',
    intro:
      'I found the Zephyr platform very easy to use for deploying an application. The whole process was straightforward, without unnecessary steps or complications. Even though it was my first time using it, I quickly understood how to configure and get my application up and running. Overall, the experience was smooth and efficient, which gave me confidence to explore other features of the platform.',
    understanding: {
      title: 'How it works',
      text: 'The application was built with Module Federation using multiple independent remotes. Each micro-frontend exposes its modules via `remoteEntry.js`, and the host consumes them at runtime without needing a rebuild. I also used a shared component library via `npm link`, so I can edit the components locally and see the changes reflected directly across all remotes.',
    },
    feedback: {
      title: 'Process feedback',
      text: 'The process was surprisingly smooth. Setting up vite-plugin-federation, exposing modules, and connecting the remotes took very little time. npm link worked great for local design system development. Overall, the experience was seamless and the platform abstracted away the complexity of Module Federation well.',
    },
  },
  aboutMe: {
    title: 'About Me',
    hello: "Hi, I'm",
    name: 'Carlos Henrique de Oliveira.',
    role: 'React & React Native developer for 10 years, with solid fullstack experience.',
    bio: 'Passionate about building modern, rich interfaces and robust systems. Always looking for new challenges and technologies.',
    contact: 'Get in touch:',
  },
};

export const translations: Record<Language, AppTranslations> = { pt, en };
