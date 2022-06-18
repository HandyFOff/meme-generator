import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="container">
                <Meme/>
            </div>
        </div>
    )
}