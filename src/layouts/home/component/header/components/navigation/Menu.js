import React from 'react'
import '../navigation/Menu.css'

export default function Menu() {
    return (
        <>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto menu">
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Develop</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Sell</a></li>
                </ul>
            </div>
        </>
    )
}
