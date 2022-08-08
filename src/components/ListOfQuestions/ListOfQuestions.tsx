import React from "react";
import {useAppDispatch, useAppSelector} from "../../hook";
import './list-of-questions.styles.scss'
import QuizToShow from "./QuizToShow/QuizToShow";
import {setQuizToEdit} from "../../store/quizSlice";
import {useNavigate} from "react-router-dom";

export interface IQuiz {
    question: string,
    options: { label: string, id: string }[],
    correct: string,
    id: string
}

const ListOfQuestions: React.FC = () => {
    const quizList = useAppSelector(state => state.quiz.quizData)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const editQuiz = (quiz:IQuiz): void => {
        navigate('/create')
        dispatch(setQuizToEdit(quiz))
    }

    return (
        <div className='list_of_questions__container'>
            <ul className='list_of_questions'>
                {quizList.map((item, index) => <QuizToShow index={index + 1} key={item.id} quiz={item} disabled handleClick={editQuiz}/>)}
            </ul>
        </div>
    )
}


export default ListOfQuestions