export interface Board {
  uid?: string;
  id?: string;
  priority?: number;
  title?: string;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  label?: 'green' | 'yellow' | 'blue' | 'red' | 'gray';
}
