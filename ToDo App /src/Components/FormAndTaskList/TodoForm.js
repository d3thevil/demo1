import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateFormField } from '../../Redux/StateManage';
import { Button, Box, TextField } from '@mui/material';

function TodoForm() {
  const formState = useSelector((state) => state.todos.form);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    dispatch(updateFormField({
      field: event.target.name,
      value: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo({
      note: formState.note,
      name: formState.name
    }));
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        maxWidth: 'sm',
        width: '100%',
        '& > :not(style)': { m: 1, width: '75%' },
      }}
    >
      <h1>ToDo App</h1>
      <TextField
        name="note"
        label="Todo"
        value={formState.note}
        onChange={handleInputChange}
        margin="normal"
        multiline={true}
        rows={4}
        sx={{ width: '100%', fontSize: '1rem' }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Task
      </Button>
    </Box>
  );
}

export default TodoForm;
