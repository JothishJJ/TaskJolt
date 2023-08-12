import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PrimaryBtnDirective } from './primary-btn/primary-btn.directive';

const declarations = [PrimaryBtnDirective];
const imports = [CommonModule, MatIconModule, MatRippleModule];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
