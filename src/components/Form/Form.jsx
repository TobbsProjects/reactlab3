import React from 'react'
import './Form.css'
import memeData from '../../memesData'

export default function Form() {
    const [memeImg, setMeme] = React.useState(memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)].url)
    
    function memeGen(){
        setMeme(memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)].url)
    }

    return (
        <div className='form--container'>
            <input className='form--input form--field-one' type='text'></input>
            <input className='form--input form--field-two' type='text'></input>
            <button 
            className='form--button linear'
            onClick={memeGen}
            >
                Get a new meme image
            </button>
            <img src={memeImg} alt='meme' className='form--image'/>
            
        </div>
    )
}