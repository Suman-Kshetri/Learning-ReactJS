import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1, text: "Hello World!! "}],
};



export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
                // state.todos.push(action.payload); if we use this then it will mutate the state :
                //  but: in react we should never mutate the state since it can create bugs
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)//donot match the given id and return the rest of the todos

        }
    }
});


//exporting the individual reducers since it will come handy in components
export const {addTodo, removeTodo} = todoSlice.actions;

//to export all the reducers
export default todoSlice.reducer;
