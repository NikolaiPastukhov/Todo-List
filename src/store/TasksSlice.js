import {createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
       
    },
    reducers: {
        addTask(state, action) {
            console.log(action)
            state.tasks.push(
                { 
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    completed: false,
                }
            )
        },
        checkedTaskComplete(state, action) { 
            const checkedTask = state.tasks.find( task => task.id === action.payload.id);
            checkedTask.completed = !checkedTask.completed;
        },
        deleteTask(state, action) { 
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id );
        },
    }
});

export const {addTask, checkedTaskComplete, deleteTask} =  TaskSlice.actions;

export default TaskSlice.reducer;