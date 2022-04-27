import { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { addItem } from '../../features/todoList/todoListSlice';
import { Todo } from '../../types';

import './AddTodo.css';

const AddTodo: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<Todo>({
    title: '',
    description: '',
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.title == '' || todo.description == '') return;

    dispatch(addItem(todo));
    setTodo({ title: '', description: '' });
  };

  return (
    <form className="add-todo" onSubmit={(e) => add(e)}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={(e) => handleInput(e)}
        value={todo.title}
      />
      <textarea
        id="description"
        placeholder="Description"
        onChange={(e) => handleInput(e)}
        value={todo.description}
      />
      <button>Add todo</button>
    </form>
  );
};

export default AddTodo;
