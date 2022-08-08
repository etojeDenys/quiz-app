import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentQuiz: 0,
    countOfCorrectAnswers: 0,
    selectedOption: '',
    quizToEdit: {
        question: '',
        options: [],
        correct: '',
        id: ''
    },
    quizData: [
        {
            question: 'How old is Denys?',
            options: [
                {label: '14', id: 'a'},
                {label: '16', id: 'b'},
                {label: '18', id: 'c'},
                {label: '20', id: 'd'},
            ],
            correct: 'c',
            id: '2'
        },
        {
            question: 'How old is Korp',
            options: [
                {label: '19', id: 'a'},
                {label: '21', id: 'b'},
                {label: '23', id: 'c'},
                {label: '25', id: 'd'},
                {label: '27', id: 'g'},
            ],
            correct: 'a',
            id: '1'
        },
    ]
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
        },
        deleteQuiz(state, action) {
            state.quizData.filter(quiz => quiz.id !== action.payload.id)
        }
    }
})

export const {
    deleteQuiz,
    playAgain,
    setQuizToEdit,
    increaseCorrectAnswers,
    changeSelectedOption,
    editQuiz,
    nextQuiz,
    addQuiz
} = quizSlice.actions

export default quizSlice.reducer