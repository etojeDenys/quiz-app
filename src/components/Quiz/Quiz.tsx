import React, {useState} from "react";
import QuizList from "./QuizList/QuizList";
import CustomButton from "./CustomButton/CustomButton";
import {useAppDispatch, useAppSelector} from "../../hook";
import {countCorrectAnswers, nextQuiz, previousQuiz} from "../../store/quizSlice";
import './quiz.styles.scss'
import {IQuiz} from "../ListOfQuestions/ListOfQuestions";

interface QuizProps {
    quiz: IQuiz
}


const Quiz: React.FC<QuizProps> = ({quiz}): JSX.Element => {
    const selectedOption = useAppSelector(state => state.quiz.selectedOption)
    const currentQuiz = useAppSelector(state => state.quiz.currentQuiz)
    const lengthOfQuestions = useAppSelector(state => state.quiz.quizData.length)
    const dispatch = useAppDispatch()
    const [isShowError, setIsShowError] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!selectedOption) {
            setIsShowError(true)
            return
        }
        setIsShowError(false)

        dispatch(nextQuiz({id: quiz.id, correct: quiz.correct}))
        if (currentQuiz === lengthOfQuestions - 1) {
            dispatch(countCorrectAnswers())
        }
    }

    return (
        <div className={`quiz`}>
            <form onSubmit={handleSubmit}>
                <div className="quiz__content">
                    <h2 className='quiz__title'>{quiz.question}</h2>
                    {isShowError
                        ? <span
                            className='quiz__subtitle quiz__subtitle-error'>Choose the correct answer</span>
                        : <span className='quiz__subtitle'>Question: {currentQuiz + 1}/{lengthOfQuestions}</span>
                    }
                    <QuizList
                        options={quiz.options}
                    />
                </div>
                <CustomButton type='submit'>Submit</CustomButton>
            </form>
            {/*TODO Back button*/}
            {!!currentQuiz && <div onClick={() => dispatch(previousQuiz())} className="quiz__back">Back</div>}
        </div>
    )
}

export default Quiz