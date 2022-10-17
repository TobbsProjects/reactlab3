import React from 'react'
import './Form.css'
import memeData from '../../memesData'

export default function Form() {
    let selectedImage
    function memeGen(){
        selectedImage = memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)].url
    }

    memeGen()

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
            <img src={selectedImage} alt='meme' />
            
        </div>
    )
}