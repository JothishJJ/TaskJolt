import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPrimaryBtn]',
  hostDirectives: [],
})
export class PrimaryBtnDirective {
  @HostBinding('class')
  elementClass = ` bg-emerald-600 p-2 rounded-lg border-transparent text-semibold
  font-display text-xl hover:border-emerald-600 border-2 hover:bg-transparent
  shadow-md hover:shadow-emerald-500 transition`;

  constructor() {}
}
