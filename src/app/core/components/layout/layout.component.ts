import { Component, OnInit } from '@angular/core';
import { PageIndexViewModel } from '../../model/page-index.model';
import { SelectItem } from '../../model/select-model';
import { LanguageTypeEnum } from '../../enum/language-type.enum';
import { SharedService } from '../../service/shared.service';
import { LocalizationService } from '../../service/localization.service';
import { CSSFilesService } from '../../service/cssFiles.service';
import { HubAppEnum } from '../../enum/hub-app.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  page: PageIndexViewModel = new PageIndexViewModel()
  closeSideBar: boolean //= window.innerWidth <787
  enterSideBar: boolean;
  currentApp:HubAppEnum = HubAppEnum.DOBOX
  hupAppList: SelectItem[] = [
    { ID: HubAppEnum.CHAT, Name: "Chat", Url: 'chat', Icon: 'chat' },
    { ID: HubAppEnum.DOBOX, Name: "Dobox", Url: '', Icon: 'dobox'}
  ]
  languageList: SelectItem[] = [
    { ID: LanguageTypeEnum.EN, Name: "English", Url: 'en', Selected: false },
    { ID: LanguageTypeEnum.AR, Name: "العربية", Url: 'ar', Selected: false }
  ]
  language: SelectItem = new SelectItem()

  constructor(
    private sharedService: SharedService,
    private _localizationService: LocalizationService,
    private _cssFilesService: CSSFilesService
  ) { }

  ngOnInit(): void {
    this.initializePage()
  }

  initializePage() {
    let storageLang: string = this._localizationService.getCurrentLanguage()
    if (storageLang && storageLang != this._localizationService.getLanguage()) {
      window.location.reload();
      return;
    }
    this.language = this.languageList.find(i=>i.Url == this._localizationService.getLanguage())??this.languageList[0]
    this._cssFilesService.changeStyle(this.language.Url)
    this.page.isLoaded = true
  }
  closeOrOpenSideBar(value: boolean) {
    this.closeSideBar = value
  }
  enterLeaveSideBar(value: boolean) {
    this.enterSideBar = value
  }
  changeLanguage(index:number) {
    if (this.language.ID == this.languageList[index].ID) return;
    this.language = this.languageList[index]
    this._localizationService.setLanguage(this.language.Url);
    window.location.reload()
  }
  logout() {
    // this.sharedService.logOut()
  }
}
