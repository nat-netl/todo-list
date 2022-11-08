import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemProps } from '../../types/types';

interface initialState {
  filterStatus: string;
  todoList: TodoItemProps[];
}

const initialState: initialState = {
  filterStatus: 'all',
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
      const todoList = localStorage.getItem('todoList');
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
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload.toLowerCase();
    },
    clearCompletedTodo: (state) => {
      const clearCompletedTodoArr = state.todoList.filter((task) => task.status === 'active');
      state.todoList = clearCompletedTodoArr;
      localStorage.setItem('todoList', JSON.stringify(clearCompletedTodoArr));
      console.log(state.todoList);
    },
  },
});

export const { addTodo, updateStatus, updateFilterStatus, clearCompletedTodo } = todosSlice.actions;
export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
