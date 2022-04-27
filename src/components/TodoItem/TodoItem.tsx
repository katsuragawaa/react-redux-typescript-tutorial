import { Todo } from '../../types';
import { deleteItem } from '../../features/todoList/todoListSlice';
import { useAppDispatch } from '../../app/hooks';

import './TodoItem.css';

interface Props {
  item: Todo;
}

const TodoItem: React.FC<Props> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();
  const destroy = () => {
    dispatch(deleteItem(item));
  };

  return (
    <div className="todo">
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <button onClick={destroy}>Delete</button>
    </div>
  );
};

export default TodoItem;
