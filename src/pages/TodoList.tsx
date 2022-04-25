import AddTodo from '../components/AddTodo/AddTodo';
import Todo from '../components/Todo/Todo';

const TodoList: React.FC = (): JSX.Element => {
  return (
    <div className="todo-list">
      <AddTodo />
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
