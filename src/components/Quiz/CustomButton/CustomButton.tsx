import React from "react";
import './custom-button.styles.scss'

interface ICustomButton {
    children?: JSX.Element | JSX.Element[] | string | string[],
    handleClick?: () => void,
    type: "button" | "submit" | "reset" | undefined
}

const CustomButton: React.FC<ICustomButton> = ({children, handleClick, type}: ICustomButton) => {

    return (
        <button className='custom-btn' type={type} onClick={handleClick}>{children}</button>
    )
}

export default CustomButton