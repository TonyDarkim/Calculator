/* eslint-disable default-case */
import { useState} from 'react'

const useCalc = () => {
    //Creacion de  los valores de la calculadora
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [operacionActual, setOperacionActual] = useState("");
    const [resultado, setResultado] = useState("");

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

    return [numeroClick, operacionClick, obtenerResusltado, borrarTodo, borrar, numero1, 
        numero2, operacionActual, resultado]
}

export default useCalc