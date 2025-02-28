import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
 import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { headerInterceptor } from './core/interceptors/header/header.interceptor';
import { loadingSpinnerInterceptor } from './core/interceptors/loading_Spinner/loading-spinner.interceptor';
import { handlingErrorInterceptor } from './core/interceptors/handling_error/handling-error.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json')};
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:"top"})), provideClientHydration(withEventReplay()),provideHttpClient(withInterceptors([headerInterceptor,loadingSpinnerInterceptor,handlingErrorInterceptor])),provideAnimations(),provideToastr(),importProvidersFrom(NgxSpinnerModule,TranslateModule.forRoot({
         loader: {
           provide: TranslateLoader,
           useFactory: HttpLoaderFactory,
           deps: [HttpClient]
         }
       }))]
};
