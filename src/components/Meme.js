import React from "react";
import memesData from './memesData';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "SHUT UP",
        bottomText: "AND TAKE MY MONEY",
        memeImage: "http://i.imgflip.com/3si4.jpg",
    });

    const [allMemeImages, setAllMemeImage] = React.useState(memesData);

    console.log(meme);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            memeImage: url,
        }));
    }

    function handlerChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        });
    }

    return (
        <section className="meme">
            <div className="meme-form">
                <div className="meme-form__text">
                    <input placeholder={meme.topText} name="topText" onChange={handlerChange}/>
                    <input placeholder={meme.bottomText} name="bottomText" onChange={handlerChange}/>
                </div>
                <button className="btn-create__img" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme-result">
                <img className="meme-image" src={meme.memeImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}