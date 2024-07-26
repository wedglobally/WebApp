import React from 'react'
import Button from '../button/Button'
import SearchIcon from '../icon/search'
import Menu from './Menu'
import './Navigation.css'

export default function Navigation() {
    return (
        <>
            <div className="navbar-collapse h-auto collapse">
                <ul className="navbar-nav ml-auto menu">
                    <li><a href="#">Log in</a></li>
                    <li><Button /></li>
                    <li><SearchIcon /></li>
                </ul>
            </div>
        </>
    )
}
