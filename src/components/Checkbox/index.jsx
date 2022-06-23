import styled from 'styled-components'

function Checkbox (props){

return(
    <div className={props.className}>
        <span>
            <input name={props.name}  
            type='checkbox'
            onChange={ e => {  
                localStorage.setItem(`${props.name}`, e.target.checked)
            }} />
            <label htmlFor={props.name}>{props.label}</label>
        </span>
        { !props.valid && <p className='errorMsg'>{props.msg}</p>}
    </div>
)
}

const StyledCheckbox = styled(Checkbox)`
display: flex;
flex-direction: column;
input{

}
.errorMsg{
    color: red;
}
`

export default StyledCheckbox

