import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from '../../model/select-model';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  mobileView: boolean = window.innerWidth < 500
  @Output() closeOrOpenSideBar: EventEmitter<boolean> = new EventEmitter();
  @Output() enterLeaveSideBar: EventEmitter<boolean> = new EventEmitter();
  @Input() appList: SelectItem[];
  
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  }

  getCurrentMoudleName(): string {
    return this.sharedService.getCurrentMoudleName()
  }
  enterORLeaveSideBar(value:boolean) {
    if (!this.mobileView)
      this.enterLeaveSideBar.emit(value)
  }
  closeSideBar() {
    this.closeOrOpenSideBar.emit(false)
  }
  logout() {
    // this.sharedService.logOut()
  }
  isLtr():boolean{
    return this.sharedService.isLTR()
  }

}
