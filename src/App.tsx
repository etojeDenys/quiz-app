import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import AddNewQuiz from "./components/AddNewQuiz/AddNewQuiz";
import Layout from "./components/Layout/Layout";
import ListOfQuestions from "./components/ListOfQuestions/ListOfQuestions";
import {useAppDispatch} from "./hook";
import {loadQuizData} from "./store/quizSlice";

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(loadQuizData())
    }, [dispatch])

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/create" element={<AddNewQuiz/>}/>
                <Route path="/list" element={<ListOfQuestions/>}/>
            </Route>
        </Routes>
    );
}

export default App;
