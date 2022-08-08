import './quiz-item.styles.scss'
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {changeSelectedOption} from "../../../store/quizSlice";

interface IQuizItem {
    label: string,
    id: string,
    correctAnswer?: string,
    disabled?: boolean,
    deleteOption?: (id: string) => void
}

const QuizItem: React.FC<IQuizItem> = ({label, id, deleteOption, correctAnswer, disabled}) => {
    const selectedOption = useAppSelector(state => state.quiz.selectedOption)
    const dispatch = useAppDispatch()
    return (
        <li className='quiz__item'>
            <div>
                <input
                    type="radio"
                    id={id}
                    name='quiz'
                    value={id}
                    checked={selectedOption ? selectedOption === id : correctAnswer === id}
                    onChange={() => dispatch(changeSelectedOption(id))}
                    disabled={disabled}
                />
                <label htmlFor={id}>{label}</label>
            </div>
            {deleteOption && <span onClick={() => deleteOption && deleteOption(id)}>&#128473;</span>}
        </li>
    )
}

export default QuizItem