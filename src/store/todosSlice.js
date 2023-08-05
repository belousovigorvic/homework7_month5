import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo, index) => index !== action.payload);
        },
        completedTodo: (state, action) => {
            const index = action.payload;
            const taskToMove = state[index]; // Запоминаем задачу, которую хотим переместить
            taskToMove.completed = !taskToMove.completed; // Меняем статус завершенности
        
            if (!taskToMove.completed) {
                // Если задача была снята с завершенности, вставляем ее в начало массива
                state.splice(index, 1); // Удаляем задачу из текущей позиции
                state.unshift(taskToMove); // Вставляем задачу в начало массива
            } else {
                // Если задача была помечена как завершенная, перемещаем ее в конец массива
                state.splice(index, 1); // Удаляем задачу из текущей позиции
                state.push(taskToMove); // Добавляем задачу в конец массива
            }
        },
        editTodo: (state, action) => {
            const {id, newText} = action.payload
            state[id].text = newText
        }
    },
});

// Экшены
export const todosActions = todosSlice.actions;

// Для стора
export const todosReducer = todosSlice.reducer;
