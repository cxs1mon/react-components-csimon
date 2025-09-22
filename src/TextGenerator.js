import { useState } from 'react';
import React from "react";

function TextGenerator() {
    const styles = {
        generatorBtn: {
            backgroundColor: '#aebbff',
            border: '1px solid black',
            borderRadius: '10px',
            padding: '5px',
            width: '100px'
        },
        instruction: {
            fontWeight: 700
        },
        jokeLabel: {
            fontWeight: 700
        }
    };

    const [randomNumber, setRandomNumber] = useState(0)
    const jokes = [
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "Parallel lines have so much in common… it’s a shame they’ll never meet.",
        "Why don’t programmers like nature? Too many bugs.",
        "I asked my dog what’s two minus two. He said nothing.",
        "Why was the math book sad? It had too many problems.",
        "What do you call fake spaghetti? An impasta!",
        "Why did the coffee file a police report? It got mugged.",
        "I tried to catch fog yesterday… Mist."
    ];

    function handleClick() {
        let newRandomNumber;
        do {
            newRandomNumber = Math.floor(Math.random() * jokes.length);
        } while (newRandomNumber === randomNumber);

        setRandomNumber(newRandomNumber);
    }
    return (
        <div className="textGenerator">
            <h1 className='title'>Text Generator</h1>
            <p className='instruction' style={styles.instruction}>Click to display a random Text:</p>
            <button className='generatorBtn' style={styles.generatorBtn} onClick={handleClick}>Generate</button>
            <p className='joke-label' style={styles.jokeLabel}>Joke of the Day:</p>
            <p className='joke-text'>{jokes[randomNumber]}</p>
        </div>
    );
}

export default TextGenerator;
