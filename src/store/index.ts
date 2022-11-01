import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos.slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

const rootReducer = combineReducers({
  ...store,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default setupStore;
