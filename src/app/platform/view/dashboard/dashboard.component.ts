import { Component, OnInit } from '@angular/core';
import { PageViewModel } from 'src/app/core/model/page.model';
import { SharedService } from 'src/app/core/service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  page: PageViewModel = new PageViewModel()
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.initializePage()
  }

  initializePage() {
    this.page.isLoaded = true
  }

}
