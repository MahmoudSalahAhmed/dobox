import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from './log.service';
import { LocalizationService } from './localization.service';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
// import { ToastrService } from 'ngx-toastr/public_api';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public _logService: LogService,
    private _localizationService: LocalizationService,
    public _storageService: StorageService,
    // private toastr: ToastrService,
  ) { }

  back(){
    history.back()
  }
  isDevMode(): boolean {
    return !environment.production;
  }
  isLTR(): boolean {
    return this._localizationService.getLanguage() != 'ar';
  }
  getSumValues(list: any[]): number {
    return list.reduce((acc, cur) => acc + cur, 0);
  }
  getCurrentMoudleName(): string {
    return this.router.url.split('?')[0].split('/')[1];
  }
  getCurrenPageName(): string {
    return this.router.url.split('?')[0].split('/')[2]?.split('?')[0]
  }
  downloadFile(data: any, fileName: string) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.download = fileName + ' ' + new Date().toLocaleDateString() + ' .xls';
    anchor.href = url;
    anchor.click();
  }
}