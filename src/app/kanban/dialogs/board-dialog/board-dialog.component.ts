import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../../board.service';
import { Board } from '../../board.model';

@Component({
  selector: 'app-board-dialog',
  template: `
    <div class="p-8">
      <h3 class="pb-8">Add Board</h3>
      <div class="relative">
        <input type="text" placeholder="Title" appInput [(ngModel)]="title" />
        <label for="Board" appLabel>Title</label>
      </div>
      <div class="flex gap-4 pt-8">
        <button appPrimaryOutlinedBtn [mat-dialog-close]>Cancel</button>
        <button
          class="flex items-center justify-center"
          appPrimaryBtn
          (click)="addBoard()"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class BoardDialogComponent {
  title = '';

  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numberOfBoards: number },
    private boardService: BoardService
  ) {}

  addBoard() {
    this.boardService.createBoard(<Board>{
      priority: this.data.numberOfBoards,
      title: this.title,
      id: this.title,
    });
    this.dialogRef.close();
  }
}
