import './styles.css'

function Input (props){

const dateSplit = (date) => {
    let birthday = new Date(date)
    let bday = birthday.getDay()
    let bmonth = birthday.getMonth()
    let byear = birthday.getFullYear()

    const today = new Date()
    let age = (today.getFullYear() - byear)
    if(today.getMonth() < bmonth){
        age -= 1
    }else{
        if(today.getMonth() === bmonth){
            if(today.getDay() < bday){
                age -= 1
            }
        }
    }
    localStorage.setItem('age', age)
}

return(
    <div className='inputBox'>
        <label htmlFor={props.field}>{props.field} {props.req && '*'}</label>
        <input name={props.field} 
        placeholder={props.placeholder} 
        type={props.type}
        onChange={ e => {
            if (props.type === 'date'){
                dateSplit(e.target.value)
            }else{
                localStorage.setItem(`${props.field}`, e.target.value)
            }
        }} />
        { !props.valid && <p className='errorMsg'>{props.field} Invalid</p>}
    </div>
)
}

export default Input