import { Component } from '@angular/core';
import { language, defineLanguage } from './dynamic/language';
import { ISupportedLang } from './dynamic/lang.pack';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  language = language;

  constructor() {}

  useLanguage(lang: ISupportedLang) {
    defineLanguage(lang);
    this.language = language;
    // this.translate.use(language);
  }
}
