import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTasks = createAsyncThunk("todos/getAllTasks", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  } catch (error) {
    console.log(error);
    throw new Error("Server error");
  }
});

export const createTask = createAsyncThunk(
  "todos/createTask",
  async (payload) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ title: payload.title }), // pasamos el title que obtenemos del payload del body
        }
      );

      if (response.ok) {
        const todo = await response.json();
        return { todo };
      }
    } catch (error) {
      console.log(error);
      throw new Error("Server error");
    }
  }
);

export const completedTask = createAsyncThunk(
  "todos/completedTask",
  async (payload) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${payload.id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ completed: payload.completed }),
        }
      );
      if (response.ok) {
        const todo = await response.json();
        return { id: todo.id, completed: todo.completed };
      }
    } catch (error) {
      console.log(error);
      throw new Error("Server error");
    }
  }
);

export const deleteAsyncTask = createAsyncThunk(
  "todos/deleteAsyncTask",
  async (payload) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${payload.id}`,
        {
          method: "DELETE",
        });
      if (response.ok) {
        return { id: payload.id };
      }
    } catch (error) {
      console.log(error);
      throw new Error("Server error");
    }
  }
);

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
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      };
      // state.push(newTodo);
      state.unshift(newTodo);
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
    [getAllTasks.pending]: (state, action) => {
      console.log("fetching data..");
    },
    [getAllTasks.fulfilled]: (state, action) => {
      console.log("data ok");
      return action.payload.todos;
    },
    [createTask.fulfilled]: (state, action) => {
      state.unshift(action.payload.todo);
    },
    [completedTask.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    [deleteAsyncTask.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  },
});

export const { addTask, taskComplete, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
