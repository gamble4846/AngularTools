import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { CoreModule } from './Core/core.module';
import { ConfigService } from './Core/Services/ConfigService/config.service';

registerLocaleData(en);

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule], providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: APP_INITIALIZER, multi: true, deps: [ConfigService], useFactory: (ConfigService: ConfigService) => { return () => { return ConfigService.loadEverything(); }; }, },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
