import prnLogo from '../assets/prnLogo.png'
import './styles/logo.css'
export default function Logo() {
    return (
        <div className='logoDiv'>
            <a href="/">
            <img className='logo' src={prnLogo} alt='Pocket RN Logo'/>
            </a>
        </div>
    )
}
