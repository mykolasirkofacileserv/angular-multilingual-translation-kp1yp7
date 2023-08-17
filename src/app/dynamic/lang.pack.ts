export enum ISupportedLang {
  ENGLISH = 'English',
  TAMIL = 'Tamil',
  FRENCH = 'French',
  CHINESE = 'Chinese',
}

export interface ILang {
  buttons: {
    en: string;
    ta: string;
    fr: string;
    zh: string;
    signIn: string;
  };
  login: {
    title: string;
    username: {
      label: string;
      placeholder: string;
    };
    password: {
      label: string;
      placeholder: string;
    };
    forgot: string;
    register: string;
  };
}
