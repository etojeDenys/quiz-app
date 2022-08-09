import {createSlice} from "@reduxjs/toolkit";

interface IQuiz {
    question: string,
    options: Array<{ label: string, id: string }>,
    correct: string,
    id: string
}

interface IInitialState {
    currentQuiz: number,
    countOfCorrectAnswers: number,
    selectedOption: string,
    quizToEdit: IQuiz,
    quizData: Array<IQuiz>
}

const initialState: IInitialState = {
    currentQuiz: 0,
    countOfCorrectAnswers: 0,
    selectedOption: '',
    quizToEdit: {
        question: '',
        options: [],
        correct: '',
        id: ''
    },
    quizData: []
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        editQuiz(state, action) {
            state.quizData = state.quizData.map(quiz => {
                if (quiz.id === action.payload.id) {
                    return action.payload
                }
                return quiz
            })
            state.quizToEdit = {
                question: '',
                options: [],
                correct: '',
                id: ''
            }
            state.selectedOption = ''

            localStorage.setItem('quizData', JSON.stringify(state.quizData))
        },

        setQuizToEdit(state, action) {
            state.quizToEdit = {...action.payload}
        },
        changeSelectedOption(state, action) {
            state.selectedOption = action.payload
        },
        playAgain(state) {
            state.currentQuiz = 0
            state.countOfCorrectAnswers = 0
        },
        nextQuiz(state) {
            state.currentQuiz++
            state.selectedOption = ''
        },
        increaseCorrectAnswers(state) {
            state.countOfCorrectAnswers++
        },
        addQuiz(state, action) {
            state.quizData.push(action.payload)
            state.selectedOption = ''

            localStorage.setItem('quizData', JSON.stringify(state.quizData))
        },
        deleteQuiz(state, action) {
            state.quizData = state.quizData.filter(quiz => quiz.id !== action.payload)

            localStorage.setItem('quizData', JSON.stringify(state.quizData))

        },
        loadQuizData(state) {
            const quizDataString = localStorage.getItem('quizData')
            if (quizDataString) {
                state.quizData = JSON.parse(quizDataString)
            }
        }
    }
})

export const {
    deleteQuiz,
    playAgain,
    setQuizToEdit,
    loadQuizData,
    increaseCorrectAnswers,
    changeSelectedOption,
    editQuiz,
    nextQuiz,
    addQuiz
} = quizSlice.actions

export default quizSlice.reducer