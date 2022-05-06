import React from 'react'
import '../App.css';
import useCalc from '../hooks/useCalc'

const Calculator = () => {

    const [numeroClick, operacionClick, obtenerResusltado, borrarTodo, borrar, numero1, numero2, 
        operacionActual, resultado] = useCalc();

    return (
        
        <div className="App">
            <div className="calculator-grid">
                <div className="output">
                    <div className="operacion-previa">{operacionActual ? numero1 + operacionActual : ""}</div>
                    <div className="operacion-actual">{resultado ? resultado : (!operacionActual ? numero1: numero2)}</div>
                </div>
                <button onClick={borrarTodo} className="span-two">AC</button>
                <button onClick={borrar}>DEL</button>
                <button onClick={() => {operacionClick("/")}}>/</button>
                <button onClick={() => {numeroClick(7)}}>7</button>
                <button onClick={() => {numeroClick(8)}}>8</button>
                <button onClick={() => {numeroClick(9)}}>9</button>
                <button onClick={() => {operacionClick("*")}}>*</button>
                <button onClick={() => {numeroClick(4)}}>4</button>
                <button onClick={() => {numeroClick(5)}}>5</button>
                <button onClick={() => {numeroClick(6)}}>6</button>
                <button onClick={() => {operacionClick("+")}}>+</button>
                <button onClick={() => {numeroClick(1)}}>1</button>
                <button onClick={() => {numeroClick(2)}}>2</button>
                <button onClick={() => {numeroClick(3)}}>3</button>
                <button onClick={() => {operacionClick("-")}}>-</button>
                <button onClick={() => {numeroClick(".")}}>.</button>
                <button onClick={() => {numeroClick(0)}}>0</button>
                <button onClick={obtenerResusltado}className="span-two">=</button>
            </div>
        </div>
    )
}

export default Calculator