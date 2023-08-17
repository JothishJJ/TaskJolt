import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MatComponents
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

// Custom Directives
import { PrimaryBtnDirective } from './primary-btn/primary-btn.directive';
import { InputDirective } from './input/input.directive';
import { LabelDirective } from './label/label.directive';
import { PrimaryOutlinedBtnDirective } from './primary-oulined-btn/primary-outlined-btn.directive';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';

const declarations = [
  PrimaryBtnDirective,
  InputDirective,
  LabelDirective,
  PrimaryOutlinedBtnDirective,
  DangerBtnDirective,
];

const imports = [
  CommonModule,
  MatIconModule,
  MatRippleModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
