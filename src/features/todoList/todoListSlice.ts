import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoListState, Todo } from '../../types';

const initialState: TodoListState = {
  value: [
    {
      id: 'a1b2c3',
      title: 'Example',
      description: 'Add some description here',
    },
  ],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Todo>) => {
      const id = uuidv4();
      state.value.push({ id, ...action.payload });
    },
    deleteItem: (state, action: PayloadAction<Todo>) => {
      state.value = state.value.filter((t) => t.id != action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = todoListSlice.actions;
export default todoListSlice.reducer;
