import './styles.css'

function Button(props){
    return(
        <button onClick={props.function}>{props.value}</button>
    )
}

export default Button