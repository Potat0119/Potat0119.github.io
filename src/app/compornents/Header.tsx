import React from "react";

interface HeaderProps {
    toggleLanguage: () => void;
  }
const Header = ({toggleLanguage}:HeaderProps) => {
    return (
        <header className="Header" id="Top">
            <h1 className="PageTitle">REO YOSHIOKA</h1>
            <div className="HeaderMenuBlock">
            <button  className="ENJPChanger" onClick={toggleLanguage}>
            <p className="ENJPChange">EN | JP</p>
            </button>
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
                    <a href="#about" className="HeaderMenuButtonTitle">ABOUT</a>
                </li>   
            </ul>
            </div>
        </header>
    )
}

export default Header;