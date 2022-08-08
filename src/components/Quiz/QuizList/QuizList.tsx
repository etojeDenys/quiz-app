import QuizItem from "../QuizItem/QuizItem";
import './quiz-list.styles.scss'
import React from "react";

interface IQuizList {
    options: Array<IOption>,
    correctAnswer?: string,
    disabled?:boolean,
}

interface IOption {
    label: string,
    id: string,
}

const QuizList: React.FC<IQuizList> = ({options,correctAnswer,disabled}: IQuizList) => {

    return (
        <ul className='quiz__list'>
            {options.map(item => <QuizItem
                key={item.id}
                label={item.label}
                id={item.id}
                correctAnswer={correctAnswer}
                disabled={disabled}
            />)}
        </ul>
    )
}


export default QuizList