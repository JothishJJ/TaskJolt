import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../../board.service';
import { Board, Task } from '../../board.model';

@Component({
  selector: 'app-task-details-dialog',
  template: `
    <div class="p-8" *ngIf="board">
      <h3>
        {{ task?.description }}
      </h3>
      <small>{{ 'From ' + board.title }}</small>

      <div class="flex gap-4 py-4">
        <button appPrimaryBtn (click)="closeDialog()">Close</button>
        <button appPrimaryOutlinedBtn (click)="closeDialog()">Edit</button>
      </div>

      <button appDangerBtn (click)="deleteDialog(task ?? {})">Delete</button>
    </div>
  `,
  styles: [],
})
export class TaskDetailsDialogComponent {
  board?: Board;
  task?: Task;
  board$ = this.boardService.getBoard(this.data.boardId);

  constructor(
    private boardService: BoardService,
    private dialogRef: MatDialogRef<TaskDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { boardId: string; index: number }
  ) {
    this.board$?.subscribe((board: Board) => {
      this.board = board;
      this.task = this.board?.tasks?.[this.data.index] ?? <Task>{};
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateDialog() {
    this.dialogRef.close();
  }

  deleteDialog(task: Task) {
    this.boardService.removeTask(this.data.boardId, task);
    this.dialogRef.close();
  }
}
