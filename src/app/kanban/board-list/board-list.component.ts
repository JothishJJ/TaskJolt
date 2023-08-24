import { Component, OnDestroy, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { Subscription } from 'rxjs';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../dialogs/board-dialog/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[] = [];
  sub?: Subscription;

  constructor(public boardService: BoardService, private dialog: MatDialog) {}

  ngOnInit() {
    this.sub = this.boardService
      .getUserBoards()
      .subscribe((boards) => (this.boards = boards as Board[]));
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  openBoardDialog() {
    this.dialog.open(BoardDialogComponent, {
      data: { numberOfBoards: this.boards.length },
      minWidth: 20 * 16,
    });
  }
}
