import {NavLink, Outlet} from "react-router-dom";
import React from "react";

import './layout.styles.scss'

const Layout: React.FC = () => {

    return (
        <>
            <header className="add-quiz__links__container">
                <NavLink className='add-quiz__link' to='/'>Start</NavLink>
                <NavLink className='add-quiz__link' to='/list'>List of questions</NavLink>
                <NavLink className='add-quiz__link' to='/create'>Add new Quiz</NavLink>
            </header>
            <Outlet/>
        </>

    )
}

export default Layout