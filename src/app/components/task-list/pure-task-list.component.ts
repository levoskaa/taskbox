import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
})
export class PureTaskListComponent {
  tasksInOrder: Task[] = [];

  @Input() loading = false;

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];
  }

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
