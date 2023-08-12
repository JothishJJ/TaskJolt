import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPrimaryBtn]',
})
export class PrimaryBtnDirective {
  @HostBinding('class')
  elementClass = ` bg-blue-600 p-2 rounded-lg border-transparent text-semibold
  font-display text-xl hover:border-blue-600 border-2 hover:bg-transparent
  shadow-md hover:shadow-blue-500 transition w-full`;

  constructor() {}
}
