import QuizItem from "../QuizItem/QuizItem";
import './quiz-list.styles.scss'
import React from "react";

interface IQuizList {
    options: Array<IOption>,
    correctAnswer?: string,
    disabled?:boolean,
    deleteOption?: (id:string)=>void
}

interface IOption {
    label: string,
    id: string,
}

const QuizList: React.FC<IQuizList> = ({options,deleteOption,correctAnswer,disabled}: IQuizList) => {

    return (
        <ul className='quiz__list'>
            {options.map(item => <QuizItem
                key={item.id}
                label={item.label}
                id={item.id}
                correctAnswer={correctAnswer}
                disabled={disabled}
                deleteOption={deleteOption}
            />)}
        </ul>
    )
}


export default QuizList