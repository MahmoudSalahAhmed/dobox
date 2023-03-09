import { FormGroup } from '@angular/forms';
import { ResponseViewModel } from './response.model';

export class PageViewModel {
  form: FormGroup;
  isLoaded: boolean = false;
  isSearching: boolean = true;
  isSearchClicked: boolean = false;
  isUploading: boolean = false;
  isSaving: boolean = false;
  isDeleting: boolean = false;
  resultViewModel: ResponseViewModel;
}
