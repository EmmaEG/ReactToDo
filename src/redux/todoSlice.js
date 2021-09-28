import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTasks = createAsyncThunk('todos/getAllTasks',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (response.ok) {
            const todos = await response.json();
            return {todos};
        }
    }
)

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    // { id: 1, title: "todo1", completed: false },
    // { id: 2, title: "todo2", completed: false },
    // { id: 3, title: "todo3", completed: true },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    taskComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
      [getAllTasks.fulfilled]: (state, action) => {
          return action.payload.todos;
      }
  }
});

export const { addTask, taskComplete, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
