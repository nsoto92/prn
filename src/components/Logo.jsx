import React from 'react'
import prnLogo from '../assets/prnLogo.png'
import '../styles/logo.css'
export default function Logo() {
    return (
        <div className='logoDiv'>
            <img className='logo' src={prnLogo} alt='Pocket RN Logo'/>
        </div>
    )
}
