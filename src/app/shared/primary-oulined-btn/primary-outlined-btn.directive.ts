import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPrimaryOutlinedBtn]',
})
export class PrimaryOutlinedBtnDirective {
  @HostBinding('class')
  elementClass = ` bg-transparent p-2 rounded-lg border-blue-600 text-semibold
  font-display text-xl hover:border-transparent border-2 hover:bg-blue-600
  shadow-md hover:shadow-blue-500 transition w-full`;

  constructor() {}
}
