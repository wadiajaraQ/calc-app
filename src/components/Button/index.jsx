import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

/*
    //Esta es una funcion completa, cuando se devuelve un solo parametro se puede reducir el codigo.
    a como quedo abajo
    const Button = ({text, type, clickHandler}) => {
        return (
            <button className={type} onClick={() => {
                console.log("onClick en el Button")
                clickHandler(text)
            }}>
                <span>{text}</span>
            </button>
        )
    }
*/

const Button = ({text, type, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text) }>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button