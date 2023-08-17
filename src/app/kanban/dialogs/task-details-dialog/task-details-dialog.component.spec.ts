import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsDialogComponent } from './task-details-dialog.component';

describe('TaskDetailsDialogComponent', () => {
  let component: TaskDetailsDialogComponent;
  let fixture: ComponentFixture<TaskDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(TaskDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
