import './styles.css'
import styled from 'styled-components'
import React from 'react'

function Checkbox (props){

return(
    <div className={`${props.className} container`}>
        <span>
            <input name={props.name}
            className='checkbox'  
            type='checkbox'
            onChange={ e => {  
                localStorage.setItem(`${props.name}`, e.target.checked)
            }} />
            <span className="checkmark"></span>
            <label htmlFor={props.name}>{props.label}</label>
        </span>
        { !props.valid && <p className='errorMsg'>{props.msg}</p>}
    </div>
)
}

const StyledCheckbox = styled(Checkbox)`
display: flex;
flex-direction: column;
.errorMsg{
    color: red;
}
`

export default StyledCheckbox

