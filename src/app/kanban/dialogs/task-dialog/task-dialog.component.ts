import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../../board.service';
import { Task } from '../../board.model';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="p-12">
      <h3>Add Task</h3>
      <div class="relative">
        <input
          type="text"
          placeholder="Task"
          appInput
          [(ngModel)]="taskDescription"
        />
        <label for="text" appLabel>Task</label>
      </div>
      <div class="pt-8">
        <mat-form-field>
          <mat-label>Select an option</mat-label>
          <mat-select [(value)]="taskLabel">
            <mat-option value="red">Red</mat-option>
            <mat-option value="blue">Blue</mat-option>
            <mat-option value="green">Green</mat-option>
            <mat-option value="yellow">Yellow</mat-option>
            <mat-option value="purple">Purple</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
    <div class="flex gap-6 px-12 pb-12">
      <button matRipple appPrimaryOutlinedBtn (click)="onNoClick()">
        Cancel
      </button>
      <button matRipple appPrimaryBtn (click)="addTaskToBoard()">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
  styles: [],
})
export class TaskDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: string },
    private boardsService: BoardService
  ) {}

  taskDescription?: string;
  taskLabel = 'green';

  onNoClick() {
    this.dialogRef.close();
  }

  addTaskToBoard() {
    this.boardsService.addTask(this.data.taskId, <Task>{
      description: this.taskDescription,
      label: this.taskLabel,
    });
    this.dialogRef.close();
  }
}
