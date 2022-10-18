import React from 'react'
import './Form.css'
import memesData from '../../memesData'

export default function Form() {
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [meme, setMeme] = React.useState(({topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg"}))
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = allMemeImages.data.memes[randomNumber].url
        setMeme(prevValue => {
            return {
                ...prevValue,
                randomImage: url
            }
        }
            )
    }

    return (
        <div className='form--container'>
            <input className='form--input form--field-one' type='text'></input>
            <input className='form--input form--field-two' type='text'></input>
            <button 
            className='form--button linear'
            onClick={getMemeImage}
            >
                Get a new meme image
            </button>
            <img src={meme.randomImage} alt='meme' className='form--image'/>
            
        </div>
    )
}