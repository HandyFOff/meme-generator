import React from "react";
import memesData from './memesData';

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <section className="meme">
            <div className="meme-form">
                <div className="meme-form__text">
                    <input placeholder="Top text"/>
                    <input placeholder="Bottom text"/>
                </div>
                <button className="btn-create__img" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img className="meme-image" src={memeImage}/>
        </section>
    )
}