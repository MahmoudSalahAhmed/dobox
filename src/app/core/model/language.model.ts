import { LanguageTypeEnum } from "../enum/language-type.enum";
import { SelectItem } from "./select-model";

export class LanguageViewModel {
  languageList: SelectItem[] = [
    { ID: LanguageTypeEnum.EN, Name: "English", Url: 'en', Selected: false },
    { ID: LanguageTypeEnum.AR, Name: "العربية", Url: 'ar', Selected: false }
  ];
}
