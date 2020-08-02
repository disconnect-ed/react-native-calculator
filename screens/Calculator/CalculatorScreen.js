import React, {useState, useEffect} from 'react';
import {useWindowDimensions, Vibration} from 'react-native';
import {VerticalScreen} from "./VerticalScreen";
import {HorizontalScreen} from "./HorizontalScreen";
import {useDispatch} from "react-redux";
import {addCalculate} from "../../redux/actions/history-action";


export const CalculatorScreen = ({route}) => {
    const [resultText, setResultText] = useState('0')
    const [calculationText, setCalculationText] = useState('')
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const operations = ['DEL', '+', '-', '*', '/']
    const horizontalOperations = [['(', ')', '^'], ['sin', 'cos', 'tan'], ['√', 'log', 'e']]
    const dispatch = useDispatch()

    useEffect(() => {
        if (route.params) {
            setResultText(route.params.result)
            setCalculationText(route.params.calculate)
        }
    }, [route.params])

    const getDate = () => {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const hours = date.getHours()
        const minuts = date.getMinutes()
        const seconds = date.getSeconds()
        const fullDate = `${day}.${month}.${year} | ${hours}:${minuts}:${seconds}`
        return fullDate
    }

    const calculateResult = () => {
        let text = calculationText
        if (text.includes('^')) {
            text = text.replace(/\^/g, '**')
        }
        if (text.includes('sin(')) {
            text = text.replace(/sin/g, 'Math.sin')
        }
        if (text.includes('cos(')) {
            text = text.replace(/cos/g, 'Math.cos')
        }
        if (text.includes('tan(')) {
            text = text.replace(/tan/g, 'Math.tan')
        }
        if (text.includes('√(')) {
            text = text.replace(/√/g, 'Math.sqrt')
        }
        if (text.includes('log(')) {
            text = text.replace(/log/g, 'Math.log')
        }
        if (text.includes('e')) {
            text = text.replace(/e/g, 'Math.E')
        }
        try {
            let answer = eval(text)
            if (isNaN(answer)) {
                answer = 0
            } else if (!isFinite(answer)) {
                answer = '∞'
                setResultText('∞')
            } else {
                setResultText(answer)
            }
            const newCalc = {calculate: text, result: answer, date: getDate()}
            dispatch(addCalculate(newCalc))
        } catch (e) {
            if (e instanceof SyntaxError) {
                setResultText('ОШИБКА')
            }
        }

    }

    const validate = () => {
        const text = calculationText
        switch (text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                return false
        }
        return true
    }

    const buttonPressed = (text) => {
        if (text === '=' && calculationText === '') return
        if (text === '=') {
            return validate() && calculateResult()
        }
        setCalculationText(calculationText + text)
    }

    const operate = (operation) => {
        switch (operation) {
            case 'DEL':
                let text = calculationText.split('')
                if (text.lastIndexOf('n') > 0 || text.lastIndexOf('s') > 0) {
                    text = text.slice(0, -3)
                } else {
                    text.pop()
                }
                setCalculationText(text.join(''))
                break
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '.':
                const lastChar = calculationText.split('').pop()
                if (operations.indexOf(lastChar) > 0) return
                if (calculationText === '' && operation !== '-') return
                if (calculationText.slice(-1) === '.') return
                setCalculationText(calculationText + operation)
                break
            case '(':
            case ')':
            case 'e':
                setCalculationText(calculationText + operation)
                break
            case 'cos':
            case 'sin':
            case 'tan':
            case '√':
            case 'log':
                let bracket = '('
                setCalculationText(calculationText + operation + bracket)
                break
        }
    }

    const deleteAll = () => {
        setResultText('0')
        setCalculationText('')
        Vibration.vibrate(150)
    }

    if (windowWidth < windowHeight) {
        return <VerticalScreen resultText={resultText} calculationText={calculationText}
                               buttonPressed={buttonPressed} operate={operate}
                               operations={operations} deleteAll={deleteAll}/>
    } else {
        return <HorizontalScreen resultText={resultText} calculationText={calculationText}
                                 buttonPressed={buttonPressed} operate={operate}
                                 operations={operations} deleteAll={deleteAll}
                                 horizontalOperations={horizontalOperations}
        />
    }

}
