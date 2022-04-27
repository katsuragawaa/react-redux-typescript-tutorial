export interface Todo {
  id?: string;
  title: string;
  description: string;
}

export interface TodoListState {
  value: Todo[];
}
