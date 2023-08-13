import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board/board.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [BoardListComponent, BoardComponent, DialogComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    DragDropModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class KanbanModule {}
