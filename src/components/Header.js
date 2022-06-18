import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="container-header">
                <div className="logo">
                    <img className="logo-img" alt="logo" src={require('../assets/img/logo.png')}/>
                    <span className="logo-name">Meme Generator</span>
                </div>
                <div className="course">
                    <span className="course-name">HandyF Product</span>
                </div>
            </div>
        </header>
    )
}