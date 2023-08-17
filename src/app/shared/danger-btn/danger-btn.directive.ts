import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDangerBtn]',
})
export class DangerBtnDirective {
  @HostBinding('class')
  elementClass = ` bg-red-600 p-2 rounded-lg border-transparent text-semibold
  font-display text-xl hover:border-red-600 border-2 hover:bg-transparent
  shadow-md hover:shadow-red-500 transition w-full`;

  constructor() {}
}
