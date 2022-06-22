import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import './styles.css'

function Form() {

  const [valName, setValName] = useState(true)
  const [valEmail, setValEmail] = useState(true)
  const [valPassword, setValPassword] = useState(true)
  const [valPhone, setValPhone] = useState(true)
  const [valBirth, setValBirth] = useState(true)
  const [checked, setChecked] = useState(false)

  const validate = (e) => {
    e.preventDefault()

    let phone = localStorage.getItem('Phone')
    if (phone){
      if(/^[0-9]+$/.test(phone) && phone.length === 11){
        setValPhone(true)
      }else{
        setValPhone(false)
      }
    }

    let fullName = localStorage.getItem('Full Name')
    if (fullName && fullName.length >= 4 && fullName.includes(' ')){
        setValName(true)
    }else{
      setValName(false)
    }
    if(!fullName){
      setValName(false)
    }

    let email = localStorage.getItem('Email')
    if (email){
      if(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(email)){
        setValEmail(true)
      }else{
        setValEmail(false)
      }
    }else{
      setValEmail(false)
    }

    let password = localStorage.getItem('Password')
    if (password){
      if(/^[6-8]+$/.test(password)){
        setValPassword(true)
      }else{
        setValPassword(false)
      }
    }else{
      setValPassword(false)
    }



  let age = localStorage.getItem('age')
  if(age){
    if (0 > age > 121){
      setValBirth(false)
    }else{
      setValBirth(true)
    }
  }else{
    setValBirth(false)
  }

  if(valName && valEmail && valPassword && valBirth && checked){
    console.log('passed')
  }
}

  return (
    <div className="main">
      <form className='modal' onSubmit={e => validate(e)}>
        <header>
            <img alt='Header Image'/>
            <h1>Intern Sign Up</h1>
        </header>
        <Input placeholder='Name' field='Full Name' req={true} valid={valName}/>
        <div>
          <div>
            <Input placeholder='foo@bar.com' field='Email' req={true} type='email' valid={valEmail}/>
            <Input field='Password' req={true} type='password' valid={valPassword}/>
          </div>
          <div>
            <Input placeholder='(83) 00000-0000' field='Phone' req={false} type='phone' valid={valPhone}/>
            <Input field='Birthday' req={true} type='date' valid={valBirth}/>
          </div>
        </div>
        <span>
          <input type='checkbox' onChange={ e => setChecked(e.target.checked) }/>
          <Button value='Register'/>
        </span>
      </form>
    </div>
  )
}

export default Form
