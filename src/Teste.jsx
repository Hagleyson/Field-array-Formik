import React, { useState } from "react"

export default function Tester(props) {
    const [select, setSelect] = useState([])    
    const [teste, setTeste] = useState([])
    console.log(teste)
    const add = () => {
        const testando =<select key={teste.length} value={select[teste.length]} onChange={e => setSelect(select[teste.length]=e.target.value)}>
        <option value="1">valor1</option>
        <option value="2">valor2</option>
        <option value="3">valor3</option>
            </select>
        setTeste(teste.concat(testando))
    }    
    return (
        <>
            <select value={select[0]} onChange={e => setSelect[0]=e.target.value}>
        <option value="1">valor1</option>
        <option value="2">valor2</option>
        <option value="3">valor3</option>
            </select>
           {teste.map((t)=>t)}
    <button onClick={add}>add</button></>)
}