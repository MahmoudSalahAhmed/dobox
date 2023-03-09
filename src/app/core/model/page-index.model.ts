import { ColumnViewModel } from './column-view-model';
import { FormGroup } from '@angular/forms';
import { ResponseViewModel } from './response.model';
import { environment } from 'src/environments/environment';
import { PageViewModel } from './page.model';

export class PageIndexViewModel extends PageViewModel{
  orderBy: string = 'ID';
  isAscending: boolean = false;
  isAllSelected: boolean = false;
  selectedAll: boolean = false;
  columns: ColumnViewModel[];
  options = {
    itemsPerPage: environment.pageSize,
    currentPage: 1,
    id: 'Pagination',
    totalItems: 0,
    totalPages: 0,
  };
}
