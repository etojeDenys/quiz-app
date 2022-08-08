import {NavLink, Outlet} from "react-router-dom";
import React from "react";

import './layout.styles.scss'
import {useAppDispatch} from "../../hook";
import {setQuizToEdit} from "../../store/quizSlice";

const Layout: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <header className="add-quiz__links__container">
                <NavLink className='add-quiz__link' to='/'>Start</NavLink>
                <NavLink className='add-quiz__link' to='/list'>List of questions</NavLink>
                <NavLink className='add-quiz__link' to='/create' onClick={() => dispatch(setQuizToEdit({
                    question: '',
                    options: [],
                    correct: '',
                    id: ''
                }))}>Add new
                    Quiz</NavLink>
            </header>
            <Outlet/>
        </>

    )
}

export default Layout