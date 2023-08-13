import { Component, Input } from '@angular/core';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input()
  board!: Board;
  constructor(private boardService: BoardService) {}

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.board.tasks ? this.board.tasks : [],
      event.previousIndex,
      event.currentIndex
    );
    this.boardService.updateTask(this.board.id, this.board.tasks);
  }
}
