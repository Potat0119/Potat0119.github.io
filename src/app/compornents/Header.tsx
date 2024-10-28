import React from "react";

const Header = () => {
    return (
        <header className="Header">
            <h1 className="PageTitle">REO YOSHIOKA</h1>
            <ul className="HeaderMenu">
                <li className="HeaderMenuButton">
                    <a href="" className="HeaderMenuButtonTitle">HOME</a>
                </li>
                <li className="HeaderMenuButton">
                    <a href="#works" className="HeaderMenuButtonTitle">WORKS</a>
                </li>
                <li className="HeaderMenuButton">
                    <a href="#skills" className="HeaderMenuButtonTitle">SKILLS</a>
                </li>
                <li className="HeaderMenuButton">
                    <a href="" className="HeaderMenuButtonTitle">ABOUT</a>
                </li>
                
            </ul>
        </header>
    )
}

export default Header;