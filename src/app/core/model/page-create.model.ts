import { FormGroup } from '@angular/forms';
import { PageViewModel } from './page.model';
import { ResponseViewModel } from './response.model';

export class PageCreateViewModel extends PageViewModel{
    isEdit: boolean = false;
}