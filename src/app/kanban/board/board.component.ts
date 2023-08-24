import { Component, Input } from '@angular/core';
import { Board, Task } from '../board.model';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';
import { TaskDetailsDialogComponent } from '../dialogs/task-details-dialog/task-details-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input()
  board!: Board;
  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.board.tasks ? this.board.tasks : [],
      event.previousIndex,
      event.currentIndex
    );
    this.boardService.updateTask(this.board.id, this.board.tasks);
  }

  openDialog(taskId: string | undefined) {
    this.dialog.open(TaskDialogComponent, {
      data: { taskId: taskId },
      minWidth: 20 * 16,
    });
  }

  openDetails(index: number, boardId?: string) {
    this.dialog.open(TaskDetailsDialogComponent, {
      data: { boardId, index },
      autoFocus: false,
      minWidth: 20 * 16,
      maxWidth: 24 * 16,
    });
  }

  deleteBoard(boardId?: string) {
    if (boardId) this.boardService.deleteBoard(boardId);
  }

  deleteTask(e: Event, i: number, board: Board) {
    e.stopPropagation();
    const input = e.target as Element;
    const button = input.nextElementSibling;
    button?.classList.add('line-through');
    // Only deltes after 1 SelectionModel
    setTimeout(() => {
      if (board.tasks && board.id) {
        const task = board.tasks[i];
        this.boardService.removeTask(board.id, task);
      }
    }, 1000);
  }
}
