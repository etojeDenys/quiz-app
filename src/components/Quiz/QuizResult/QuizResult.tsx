import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import './quiz-result.styles.scss'
import {useAppDispatch, useAppSelector} from "../../../hook";
import {playAgain} from "../../../store/quizSlice";


const QuizResult: React.FC = () => {
    const countOfAllQuestions = useAppSelector(state => state.quiz.quizData.length)
    const countOfCorrectAnswers = useAppSelector(state => state.quiz.countOfCorrectAnswers)
    const dispatch = useAppDispatch()

    return (
        <div className='quiz'>
            <div className='result'>Result: <span>{countOfCorrectAnswers}/{countOfAllQuestions}</span></div>
            <CustomButton type='submit' handleClick={()=>dispatch(playAgain())}>Try again</CustomButton>
        </div>
    )
}

export default QuizResult