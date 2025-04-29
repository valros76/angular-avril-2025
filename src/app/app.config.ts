import { ApplicationConfig, provideExperimentalZonelessChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import fr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

registerLocaleData(fr);
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), 
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: "fr-FR"
    }
  ]
};
