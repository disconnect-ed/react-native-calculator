import React, {useState} from 'react';
import {useWindowDimensions, Vibration} from 'react-native';
import {VerticalScreen} from "./screens/Calculator/VerticalScreen";
import {HorizontalScreen} from "./screens/Calculator/HorizontalScreen";

export default function App() {
    // const [resultText, setResultText] = useState('0')
    // const [calculationText, setCalculationText] = useState('')
    // const windowWidth = useWindowDimensions().width;
    // const windowHeight = useWindowDimensions().height;
    // const operations = ['DEL', '+', '-', '*', '/']
    // const horizontalOperations = [['(', ')', '^'], ['sin', 'cos', 'tan'], ['√', 'log', 'e']]
    //
    // const calculateResult = () => {
    //     let text = calculationText
    //     if (text.includes('^')) {
    //         text = text.replace(/\^/g, '**')
    //     }
    //     if (text.includes('sin(')) {
    //         text = text.replace(/sin/g, 'Math.sin')
    //     }
    //     if (text.includes('cos(')) {
    //         text = text.replace(/cos/g, 'Math.cos')
    //     }
    //     if (text.includes('tan(')) {
    //         text = text.replace(/tan/g, 'Math.tan')
    //     }
    //     if (text.includes('√(')) {
    //         text = text.replace(/√/g, 'Math.sqrt')
    //     }
    //     if (text.includes('log(')) {
    //         text = text.replace(/log/g, 'Math.log')
    //     }
    //     if (text.includes('e')) {
    //         text = text.replace(/e/g, 'Math.E')
    //     }
    //     try {
    //         setResultText(eval(text))
    //     } catch (e) {
    //         if (e instanceof SyntaxError) {
    //             setResultText('ОШИБКА')
    //         }
    //     }
    //
    // }
    //
    // const validate = () => {
    //     const text = calculationText
    //     switch (text.slice(-1)) {
    //         case '+':
    //         case '-':
    //         case '*':
    //         case '/':
    //             return false
    //     }
    //     return true
    // }
    //
    // const buttonPressed = (text) => {
    //     if (text === '=') {
    //         return validate() && calculateResult()
    //     }
    //     setCalculationText(calculationText + text)
    // }
    //
    // const operate = (operation) => {
    //     switch (operation) {
    //         case 'DEL':
    //             let text = calculationText.split('')
    //             console.log(text.lastIndexOf('n'))
    //             if (text.lastIndexOf('n') > 0 || text.lastIndexOf('s') > 0) {
    //                 text = text.slice(0, -3)
    //                 console.log(text)
    //             } else {
    //                 text.pop()
    //             }
    //             setCalculationText(text.join(''))
    //             break
    //         case '+':
    //         case '-':
    //         case '*':
    //         case '/':
    //         case '^':
    //             const lastChar = calculationText.split('').pop()
    //             if (operations.indexOf(lastChar) > 0) return
    //             if (calculationText === '' && operation !== '-') return
    //             setCalculationText(calculationText + operation)
    //             break
    //         case '(':
    //         case ')':
    //         case 'e':
    //             setCalculationText(calculationText + operation)
    //             break
    //         case 'cos':
    //         case 'sin':
    //         case 'tan':
    //         case '√':
    //         case 'log':
    //             let bracket = '('
    //             // if (operation === 'cos' || operation === 'sin') bracket = '('
    //             setCalculationText(calculationText + operation + bracket)
    //             break
    //     }
    // }
    //
    // const deleteAll = () => {
    //     setResultText('0')
    //     setCalculationText('')
    //     Vibration.vibrate(150)
    // }
    //
    // if (windowWidth < windowHeight) {
    //     return <VerticalScreen resultText={resultText} calculationText={calculationText}
    //                            buttonPressed={buttonPressed} operate={operate}
    //                            operations={operations} deleteAll={deleteAll}/>
    // } else {
    //     return <HorizontalScreen resultText={resultText} calculationText={calculationText}
    //                              buttonPressed={buttonPressed} operate={operate}
    //                              operations={operations} deleteAll={deleteAll}
    //                              horizontalOperations={horizontalOperations}
    //     />
    // }

}
