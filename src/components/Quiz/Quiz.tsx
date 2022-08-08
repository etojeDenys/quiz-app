import React from "react";
import QuizList from "./QuizList/QuizList";
import CustomButton from "./CustomButton/CustomButton";
import {useAppDispatch, useAppSelector} from "../../hook";
import {increaseCorrectAnswers, nextQuiz} from "../../store/quizSlice";
import './quiz.styles.scss'


interface IQuiz {
    quiz: { question: string, options: Array<{ label: string, id: string }>, correct: string },
}


const Quiz: React.FC<IQuiz> = ({quiz}: IQuiz): JSX.Element => {
    const selectedOption = useAppSelector(state => state.quiz.selectedOption)
    const currentQuiz = useAppSelector(state => state.quiz.currentQuiz)
    const lengthOfQuestions = useAppSelector(state => state.quiz.quizData.length)
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!selectedOption) {
            return
        }
        if (quiz.correct === selectedOption) {
            dispatch(increaseCorrectAnswers())
        }
        dispatch(nextQuiz())
    }

    return (
        <div className={`quiz`}>
            <form onSubmit={handleSubmit}>
                <div className="quiz__content">
                    <h2 className='quiz__title'>{quiz.question}</h2>
                    <span className='quiz__subtitle'>Question: {currentQuiz+1}/{lengthOfQuestions}</span>
                    <QuizList
                        options={quiz.options}
                    />
                </div>
                <CustomButton type='submit'>Submit</CustomButton>
            </form>
            {/*TODO Back button*/}
            <div className="quiz__back">Back</div>
        </div>
    )
}

export default Quiz