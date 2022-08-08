import {configureStore} from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

const store = configureStore({
    reducer: {
        quiz: quizSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch