import React from "react";
import QuizList from "../../Quiz/QuizList/QuizList";
import CustomButton from "../../Quiz/CustomButton/CustomButton";
import {IQuiz} from "../ListOfQuestions";
import './quiz-to-show.styles.scss'
import {ReactComponent as DeleteIcon} from "./delete.svg";
import {deleteQuiz} from "../../../store/quizSlice";
import {useAppDispatch} from "../../../hook";

interface QuizToShowProps {
    quiz: { question: string, options: Array<{ label: string, id: string }>, correct: string, id: string },
    index?: number,
    isEdit?: boolean,
    handleClick: (quiz: IQuiz) => void,
    disabled?: boolean,
    deleteOption?: (id: string) => void,
    errorMessage?: string
}

const QuizToShow: React.FC<QuizToShowProps> = (props) => {
    const dispatch = useAppDispatch()

    const {
        quiz,
        errorMessage,
        index,
        isEdit,
        deleteOption,
        handleClick,
        disabled
    } = props

    console.log(isEdit)
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
                    {!deleteOption && <DeleteIcon onClick={() => dispatch(deleteQuiz(quiz.id))} className='delete-icon'/>}
                </div>
                <CustomButton type='submit'>{isEdit || disabled ? 'Edit' : 'Create'}</CustomButton>
            </form>
        </div>
    )
}


export default QuizToShow