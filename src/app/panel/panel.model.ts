import { FormControl } from "@angular/forms";

export interface IPanelForm {
  ms: FormControl<number>;
  size: FormControl<number>;
  additionalIDs: FormControl<string>;
}
