import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //
  },
});

export const todosReducer = todosSlice.reducer;
