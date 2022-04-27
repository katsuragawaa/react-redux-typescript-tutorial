import { useAppSelector } from '../app/hooks';

import AddTodo from '../components/AddTodo/AddTodo';
import TodoItem from '../components/TodoItem/TodoItem';

const TodoList: React.FC = (): JSX.Element => {
  const todoList = useAppSelector((state) => state.todoList.value);

  return (
    <div className="todo-list">
      <AddTodo />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};

export default TodoList;
