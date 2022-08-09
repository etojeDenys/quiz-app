import React from "react";
import Quiz from "../Quiz";
import QuizResult from "../QuizResult/QuizResult";
import { useAppSelector} from "../../../hook";


const QuizApp: React.FC = () => {
    const quizData = useAppSelector(state => state.quiz.quizData)
    const currentQuiz = useAppSelector(state => state.quiz.currentQuiz)


    return (
        <div className='quiz__container'>
            {currentQuiz < quizData.length
                ? <Quiz quiz={quizData[currentQuiz]}/>
                : <QuizResult/>

            }
        </div>
    )
}


export default QuizApp