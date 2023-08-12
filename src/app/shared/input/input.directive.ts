import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class InputDirective {
  @HostBinding('class')
  classes =
    'p-2 focus:outline-none rounded-lg focus:border-b-2 border-blue-600 bg-gray-700 peer w-full border-b placeholder:text-transparent';

  constructor() {}
}
