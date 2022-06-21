import { useState } from 'react'
import './styles.css'

function Input (props){

    const [error, setError] = useState()
    // error still not functional

return(
    <div className='inputBox'>
        <label htmlFor={props.field}>{props.field} {props.req && '*'}</label>
        <input name={props.field} 
        placeholder={props.placeholder} 
        type={props.type}
        onChange={ e => localStorage.setItem(`${props.field}`, e.target.value)} />
        { error && <p className='errorMsg'>{props.field} Invalid</p>}
    </div>
)
}

export default Input