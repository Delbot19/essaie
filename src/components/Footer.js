import { useState } from 'react'
import '../styles/Footer.css'

function Footer({cart}) {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
        <footer className='footer'>
            <div className='footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <input
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
            <div className='footer-elem'>Laissez-nous votre mail :</div>
        </footer>
    )
}

export default Footer