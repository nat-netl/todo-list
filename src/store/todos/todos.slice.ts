import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemProps } from '../../types/types';

interface initialState {
  todoList: TodoItemProps[];
}

const initialState: initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList') ?? '[]'),
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemProps>) => {
      state.todoList.push(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    updateStatus: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((task) => {
          if (task.id === action.payload.id) {
            task.status = action.payload.status;
          }
        });
        localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo, updateStatus } = todosSlice.actions;
export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
