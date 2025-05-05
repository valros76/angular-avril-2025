import { ApplicationConfig, provideExperimentalZonelessChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import fr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '@/interceptors/auth/auth.interceptor';

registerLocaleData(fr);
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), 
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([
        AuthInterceptor
      ])
    ),
    {
      provide: LOCALE_ID,
      useValue: "fr-FR"
    }
  ]
};
