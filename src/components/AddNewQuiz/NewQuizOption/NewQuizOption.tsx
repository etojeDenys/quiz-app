import React from "react";
import './new-quiz-option.styles.scss'

interface NewQuizOptionProps {
    label: string,
    id: string,
    deleteOption: (id: string) => void,
    chooseCorrectOption: (id: string) => void,
    isCorrect: boolean
}

const NewQuizOption: React.FC<NewQuizOptionProps> = ({
                                                         label,
                                                         id,
                                                         deleteOption,
                                                         chooseCorrectOption,
                                                         isCorrect
                                                     }): JSX.Element => {
    return (
        <li className='new-quiz-option'>
            <span>{label}</span>
            <div>
                <button className='correct'
                        onClick={() => chooseCorrectOption(id)}>{isCorrect ? <>&#9635;</> : <>&#9634;</>}</button>
                <button className='delete' onClick={() => deleteOption(id)}>&#10005;</button>
            </div>
        </li>
    )
}

export default NewQuizOption