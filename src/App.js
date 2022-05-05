import './App.css';
import React, {useState} from "react"

function App() {

  //Creacion de  los valores de la calculadora

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacionActual, setOperacionActual] = useState("");
  const [resultado, setResultado] = useState(0);

  //funcion numero click permite usar los botones numerales 
  function numeroClick (val){
    if(operacionActual === ""){
    setNumero1(numero1 + val);
  }else{
    setNumero2(numero2 + val);
  }

}

//nos permite utilizar los botones de operaciones aritmetricas
function operacionClick (val){
  setOperacionActual(val);
}

//nos permite hacer funcional los botones de operaciones 
function obtenerResusltado () {
  switch(operacionActual){
    case "+":
      setResultado(Number(numero1) + Number(numero2));
      break;
    case "-" :
      setResultado(Number(numero1) - Number(numero2));
      break;
    case "*" :
      setResultado(Number(numero1) * Number(numero2));
      break;
    case "/":
      setResultado(Number(numero1) / Number(numero2));
      break;    
  }
}

//esta es la funcion all clear
function borrarTodo (){
  setNumero1("");
  setNumero2("");
  setOperacionActual("");
  setResultado("");
}

//esta la funcion delete
const borrar = () => {
  setNumero1(numero1.slice(0, numero1.length - 1));
  setNumero2(numero2.slice(0, numero2.length - 1));
  setOperacionActual(operacionActual.slice(0, operacionActual.length - 1));
  setResultado(resultado.slice(0, resultado.length - 1));
}

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
  );
}

export default App;
