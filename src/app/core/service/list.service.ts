import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private _apiService: ApiService) { }

  getCategoryList() {
    return this._apiService.get("products/categories")
  }
}
