// take chosen language from db or user-chose. For now it's just english
import { ILang, ISupportedLang } from './lang.pack';
import * as Languages from './languages/index';

export let language: ILang = Languages.LEnglish;

export function defineLanguage(definedLanguage: ISupportedLang) {
  switch (definedLanguage) {
    case ISupportedLang.ENGLISH: {
      language = Languages.LEnglish;
      console.info(`${definedLanguage} selected`);
      break;
    }
    case ISupportedLang.TAMIL: {
      language = Languages.LTamil;
      console.info(`${definedLanguage} selected`);
      break;
    }
    case ISupportedLang.FRENCH: {
      language = Languages.LFrench;
      console.info(`${definedLanguage} selected`);
      break;
    }
    case ISupportedLang.CHINESE: {
      language = Languages.LChinese;
      console.info(`${definedLanguage} selected`);
      break;
    }
    default: {
      console.error('Error while using ', definedLanguage);
    }
  }
}
