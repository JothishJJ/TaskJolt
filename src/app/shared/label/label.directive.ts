import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLabel]',
})
export class LabelDirective {
  @HostBinding('class')
  classes = `absolute left-0 ml-1 px-1 text-sm translate-y-0 duration-100 
  ease-linear peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base 
  peer-placeholder-shown:text-gray-400 peer-focus:ml-1 peer-focus:translate-y-0 
  peer-focus:px-1 peer-focus:text-sm pointer-events-none`;

  constructor() {}
}
