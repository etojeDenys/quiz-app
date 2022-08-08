import FormInput from "../FormInput/FormInput";
import React, {useEffect, useState} from "react";
import './add-new-quiz.styles.scss'
import CustomButton from "../Quiz/CustomButton/CustomButton";
import {useAppDispatch, useAppSelector} from "../../hook";
import {addQuiz, editQuiz} from "../../store/quizSlice";
import {useNavigate} from "react-router-dom";
import QuizToShow from "../ListOfQuestions/QuizToShow/QuizToShow";
import {IQuiz} from "../ListOfQuestions/ListOfQuestions";

interface IQuizUseState {
    options: Array<{ id: string, label: string }>,
    option: string,
    question: string,
    correct: string,
    id: string
}

const AddNewQuiz = () => {
    const quizToEdit = useAppSelector(state => state.quiz.quizToEdit)
    const selectedOption = useAppSelector(state => state.quiz.selectedOption)
    const [quiz, setQuiz] = useState<IQuizUseState>({
        option: '',
        question: quizToEdit.question,
        options: quizToEdit.options,
        correct: quizToEdit.correct,
        id: quizToEdit.id

    })

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (selectedOption) {
            setQuiz({
                ...quiz,
                correct: selectedOption,
            })
        }
    }, [selectedOption])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setQuiz({...quiz, [name]: value})
    }

    const addOption = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!quiz.option) {
            return
        }
        setQuiz({
            ...quiz,
            option: '',
            options: [...quiz.options, {label: quiz.option, id: Date.now().toString()}]
        })
    }

    const deleteOption = (id: string) => {
        setQuiz({...quiz, options: quiz.options.filter(item => item.id !== id)})
    }

    const createQuiz = (quiz: IQuiz) => {
        if (quiz.question && quiz.correct && quiz.options.length >= 2) {
            if (quiz.id) {
                dispatch(editQuiz({
                    question: quiz.question,
                    options: quiz.options,
                    correct: quiz.correct,
                    id: quiz.id
                }))
            } else {
                dispatch(addQuiz({
                    question: quiz.question,
                    options: quiz.options,
                    correct: quiz.correct,
                    id: Date.now().toString()
                }))
            }
            navigate('/')
        }
    }

    return (
        // TODO error message & required fields
        <div className='add-quiz__container'>
            <div className="add-quiz">
                <form onSubmit={addOption}>
                    <FormInput
                        value={quiz.question}
                        name='question'
                        handleChange={handleChange}
                        type="text"
                        label='Question'
                    />
                    <div className='wrapper'>
                        <FormInput
                            value={quiz.option}
                            name='option'
                            handleChange={handleChange}
                            type="text"
                            label='Options'
                        />
                        <CustomButton type='submit'>Add option</CustomButton>
                    </div>
                </form>

                <QuizToShow quiz={quiz} isEdit={!!quizToEdit.id} deleteOption={deleteOption} handleClick={createQuiz}/>
            </div>
        </div>
    )
}


export default AddNewQuiz