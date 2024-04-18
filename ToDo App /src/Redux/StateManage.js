import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  form: {
    note: '',
  },
};

export const StateManage = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: function(state) {
      const noteExists = state.todos.some(todo => todo.note === state.form.note);
      if (!noteExists) {
        const newTodo = {
          id: Date.now(), 
          note: state.form.note,
        };
        state.todos.push(newTodo);
        state.form.note = '';
      }
    },
    updateFormField: function(state, action) {
      const fieldName = action.payload.field;
      const fieldValue = action.payload.value;
      state.form[fieldName] = fieldValue;
    },
    deleteTodo: function(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateFormField, deleteTodo } = StateManage.actions;
export default StateManage.reducer;
