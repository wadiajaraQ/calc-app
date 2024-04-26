/* eslint no-eval: 0 */
//importación
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

//generación de la funcion del componente
//generar un arrow function
const App = () => {
    // Array Destructuring
    // 1er posicion: valor (que inicialmente es el valor por defecto)
    // 2da posicion: function que me va a permitir modific ar el valor por defecto
    // [ xxx, setxxx ]
    const [ stack, setStack ] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)
    
    const value = items.length > 0 ? items[items.length-1] : "0"

    //si la Arrow function tiene un solo parametro los parentesis no son necesarios
    // const clickHandlerFunction = text =>{ 
    //     console.log("Button.clickHandler", text)
    // }

    // Lo que ejecuta la función
    //div.className
    //div.className>button*Cantidad
    console.log("Renderizacion de la App", items);
    return (
        <main className='react-calculator'>
           <Result value={value} />
           <Numbers onClickNumber={number => {
                console.log("Click en number ", number)
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={() => {
                    console.log("onContentClear")
                    setStack('')
                }}
                onDelete={() => {
                    if(stack.length > 0) {
                        console.log("onDelete")
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations 
                onClickOperation={operation => { 
                    console.log("Operation: ", operation) 
                    setStack(`${stack}${operation}`)
                }} 
                onClickEqual={equal => {
                    console.log("Equal: ", equal) 
                    setStack(eval(stack).toString())
                }}
            />
        </main>
    )
}

export default App