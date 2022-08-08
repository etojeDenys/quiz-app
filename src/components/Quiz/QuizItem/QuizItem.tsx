import './quiz-item.styles.scss'
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {changeSelectedOption} from "../../../store/quizSlice";

interface IQuizItem {
    label: string,
    id: string,
    correctAnswer?:string,
    disabled?:boolean,
}

const QuizItem: React.FC<IQuizItem> = ({label, id,correctAnswer,disabled}) => {
    const selectedOption = useAppSelector(state=> state.quiz.selectedOption)
    const dispatch = useAppDispatch()
    return (
        <li className='quiz__item'>
            <input
                type="radio"
                id={id}
                name='quiz'
                value={id}
                checked={selectedOption ? selectedOption===id : correctAnswer===id }
                onChange={ ()=>dispatch(changeSelectedOption(id))}
                disabled={disabled}
            />
            <label htmlFor={id}>{label}</label>
        </li>
    )
}

export default QuizItem