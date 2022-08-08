import React from "react";
import QuizList from "../../Quiz/QuizList/QuizList";
import CustomButton from "../../Quiz/CustomButton/CustomButton";
import {IQuiz} from "../ListOfQuestions";
import './quiz-to-show.styles.scss'

interface QuizToShowProps {
    quiz: { question: string, options: Array<{ label: string, id: string }>, correct: string, id: string },
    index?: number,
    isEdit?: boolean,
    handleClick: (quiz: IQuiz) => void,
    disabled?: boolean,
    deleteOption?: (id: string) => void,
    errorMessage?: string
}

const QuizToShow: React.FC<QuizToShowProps> = ({
                                                   quiz,
                                                   errorMessage,
                                                   index,
                                                   isEdit,
                                                   deleteOption,
                                                   handleClick,
                                                   disabled
                                               }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleClick(quiz)
    }


    return (
        <div className={`quiz`}>
            <form onSubmit={handleSubmit}>
                <div className="quiz__content">
                    <h2 className='quiz__title'>{quiz.question ? quiz.question : 'Where is your question? ヽ(°□° )ノ'}</h2>
                    {errorMessage
                        ? <span className='quiz__subtitle-error'>{errorMessage}</span>
                        : <span className='quiz__subtitle'>{index ? `Question: ${index}` : 'Options:'}</span>
                    }
                    <QuizList
                        disabled={disabled}
                        options={quiz.options}
                        correctAnswer={quiz.correct}
                        deleteOption={deleteOption}
                    />
                </div>
                <CustomButton type='submit'>{isEdit || disabled ? 'Edit' : 'Create'}</CustomButton>
            </form>
        </div>
    )
}


export default QuizToShow