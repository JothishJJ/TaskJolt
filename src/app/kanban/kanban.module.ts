import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [BoardListComponent, BoardComponent],
  imports: [CommonModule, KanbanRoutingModule, SharedModule, DragDropModule],
})
export class KanbanModule {}
