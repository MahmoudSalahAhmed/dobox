import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SideBarComponent } from './core/components/side-bar/side-bar.component';
import { AuthGuardService } from './auth/guard/auth-guard.service ';
import { LocalizationService } from './core/service/localization.service';
import { HeaderComponent } from './core/components/header/header.component';
import { HubAppListComponent } from './core/components/hub-app-list/hub-app-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    HubAppListComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }, isolate: true
    }),
    
  ],
  providers: [AuthGuardService, DatePipe],
  exports: [
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule, 
    HttpClientModule,
    TranslateModule,
    HeaderComponent,
    HubAppListComponent,
    SideBarComponent
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService, private localizationService: LocalizationService) {
    this.translate.use(localizationService.getLanguage());
    localizationService.setLanguage(localizationService.getLanguage())
  }
}
