import { Component, Input } from '@angular/core';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';

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
    this.dialog.open(TaskDialogComponent, { data: { taskId: taskId } });
  }
}
