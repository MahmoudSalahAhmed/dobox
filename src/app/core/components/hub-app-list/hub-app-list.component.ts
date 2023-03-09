import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HubAppEnum } from '../../enum/hub-app.enum';
import { SelectItem } from '../../model/select-model';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'hub-app-list',
  templateUrl: './hub-app-list.component.html',
  styleUrls: ['./hub-app-list.component.scss']
})
export class HubAppListComponent implements OnInit {

  mobileView: boolean = window.innerWidth < 500
  @Output() closeOrOpenSideBar: EventEmitter<boolean> = new EventEmitter();
  @Output() onSelectApp: EventEmitter<HubAppEnum> = new EventEmitter();
  @Input() currentApp: HubAppEnum;
  @Input() appList: SelectItem[];

  
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  }

}
