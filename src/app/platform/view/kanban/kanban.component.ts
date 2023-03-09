import { Component, OnInit } from '@angular/core';
import { PageViewModel } from 'src/app/core/model/page.model';
import { SharedService } from 'src/app/core/service/shared.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
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
