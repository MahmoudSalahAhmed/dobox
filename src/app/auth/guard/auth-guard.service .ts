import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { SharedService } from 'src/app/core/service/shared.service';

@Injectable()

export class AuthGuardService implements CanActivate {
  constructor(
    public _sharedService: SharedService
  ) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
}