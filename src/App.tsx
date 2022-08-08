import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import AddNewQuiz from "./components/AddNewQuiz/AddNewQuiz";
import Layout from "./components/Layout/Layout";
import ListOfQuestions from "./components/ListOfQuestions/ListOfQuestions";

function App() {
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
