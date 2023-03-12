import { Component, OnInit } from '@angular/core';
import { PageViewModel } from 'src/app/core/model/page.model';
import { SelectItem } from 'src/app/core/model/select-model';
import { SharedService } from 'src/app/core/service/shared.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {
  page: PageViewModel = new PageViewModel()
  tabList: SelectItem[] = [
    {ID:1, Name:"kanban", Url:"/platform/kanban"},
    {ID:1, Name:"main-table", Url:"/platform/main-table"},
    {ID:1, Name:"dashboard", Url:"/platform/dashboard"},
  ]
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.initializePage()
  }

  initializePage() {
    this.page.isLoaded = true
  }

  getCurrentRoute(){
    return this.sharedService.getCurrentRoute()
  }

}
