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
    quizData: Array<IQuiz>,
    userChoice: Array<{ optionId: string, quizId: string, isCorrect: boolean }>
}

const initialState: IInitialState = {
    userChoice: [],
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
        countCorrectAnswers(state) {
            state.countOfCorrectAnswers = state.userChoice.reduce((acc, item) => item.isCorrect ? acc + 1 : acc, 0)

        },
        setQuizToEdit(state, action) {
            state.quizToEdit = {...action.payload}
        },
        changeSelectedOption(state, action) {
            state.selectedOption = action.payload
        },
        playAgain(state) {
            state.currentQuiz = 0
            state.userChoice = []
        },
        nextQuiz(state, action) {
            state.userChoice.push({
                optionId: state.selectedOption,
                quizId: action.payload.id,
                isCorrect: action.payload.correct===state.selectedOption
            })
            state.currentQuiz++
            state.selectedOption = ''
        },
        previousQuiz(state) {
            state.currentQuiz--
            state.selectedOption = state.userChoice.pop()!.optionId
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
    countCorrectAnswers,
    changeSelectedOption,
    editQuiz,
    nextQuiz,
    addQuiz,
    previousQuiz
} = quizSlice.actions

export default quizSlice.reducer