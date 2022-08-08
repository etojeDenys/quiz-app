import React from "react";
import QuizList from "../../Quiz/QuizList/QuizList";
import CustomButton from "../../Quiz/CustomButton/CustomButton";
import {IQuiz} from "../ListOfQuestions";

interface QuizToShowProps {
    quiz: { question: string, options: Array<{ label: string, id: string }>, correct: string, id: string },
    index?: number,
    isEdit?: boolean,
    handleClick: (quiz: IQuiz) => void,
    disabled?:boolean
}

const QuizToShow: React.FC<QuizToShowProps> = ({quiz, index, isEdit, handleClick,disabled}) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleClick(quiz)
    }


    return (
        <div className={`quiz`}>
            <form onSubmit={handleSubmit}>
                <div className="quiz__content">
                    <h2 className='quiz__title'>{quiz.question ? quiz.question : 'Where is your question? ヽ(°□° )ノ'}</h2>
                    <span className='quiz__subtitle'>{index ? `Question: ${index}` : 'Options:'}  </span>
                    <QuizList
                        disabled={disabled}
                        options={quiz.options}
                        correctAnswer={quiz.correct}
                    />
                </div>
                <CustomButton type='submit'>{isEdit||disabled ? 'Edit' : 'Create'}</CustomButton>
            </form>
        </div>
    )
}


export default QuizToShow