import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MatComponents
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Custom Directives
import { PrimaryBtnDirective } from './primary-btn/primary-btn.directive';
import { InputDirective } from './input/input.directive';
import { LabelDirective } from './label/label.directive';
import { PrimaryOutlinedBtnDirective } from './primary-oulined-btn/primary-outlined-btn.directive';

const declarations = [
  PrimaryBtnDirective,
  InputDirective,
  LabelDirective,
  PrimaryOutlinedBtnDirective,
];

const imports = [
  CommonModule,
  MatIconModule,
  MatRippleModule,
  MatSnackBarModule,
];

/**
 * The Components/Directives or anything else to use Globally is defined here
 *
 * Add your Global angular imports here
 */

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
