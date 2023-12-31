import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board/board.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BoardDialogComponent } from './dialogs/board-dialog/board-dialog.component';
import { TaskDetailsDialogComponent } from './dialogs/task-details-dialog/task-details-dialog.component';

@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent,
    TaskDialogComponent,
    BoardDialogComponent,
    TaskDetailsDialogComponent,
  ],
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
