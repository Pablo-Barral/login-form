import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import logo from '../../assets/signupLogo.png'
import './styles.css'
import Checkbox from '../../components/Checkbox'


function Form() {

  const [valName, setValName] = useState(true)
  const [valEmail, setValEmail] = useState(true)
  const [valPassword, setValPassword] = useState(true)
  const [valPhone, setValPhone] = useState(true)
  const [valBirth, setValBirth] = useState(true)
  const [checked, setChecked] = useState(true)
  let valid = true



  const nav = useNavigate()

  const validate = (e) => {
    e.preventDefault()

    let phone = localStorage.getItem('Phone')
    if (phone){
      if(/^[0-9]+$/.test(phone) && phone.length === 11){
        setValPhone(true)
      }else{
        setValPhone(false)
        valid = false
      }
    }

    let fullName = localStorage.getItem('Full Name')
    if (fullName && fullName.length >= 4 && fullName.includes(' ')){
        setValName(true)
    }else{
      setValName(false)
      valid = false
    }
    if(!fullName){
      setValName(false)
      valid = false
    }

    let email = localStorage.getItem('Email')
    if (email){
      if(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(email)){
        setValEmail(true)
      }else{
        setValEmail(false)
        valid = false
      }
    }else{
      setValEmail(false)
      valid = false
    }

    let password = localStorage.getItem('Password')
    if (password){
      if(/^[6-8]+$/.test(password)){
        setValPassword(true)
      }else{
        setValPassword(false)
        valid = false
      }
    }else{
      setValPassword(false)
      valid = false
    }

  let age = localStorage.getItem('age')
  if(age){
    if (0 > age > 121){
      setValBirth(false)
      valid = false
    }else{
      setValBirth(true)
    }
  }else{
    setValBirth(false)
    valid = false
  }

  let terms = localStorage.getItem('terms')
  if(terms){
    if(terms === 'true'){
      setChecked(true)
    }else{
      setChecked(false)
      valid = false
    }
  }else{
    setChecked(false)
    valid = false
  }

  if(valid){
    nav('/success')
    localStorage.clear()
  }
}

  return (
    <div className="main">
        <header>
            <img src={logo} alt='Header Image'/>
            <h1>Intern Sign Up</h1>
        </header>
      <form className='modal' onSubmit={e => validate(e)}>
        <Input placeholder='Name' field='Full Name' req={true} valid={valName}/>
        <div className='divisionBox'>
          <div className='overBox'>
            <Input placeholder='foo@bar.com' field='Email' req={true} type='email' valid={valEmail}/>
            <Input field='Password' req={true} type='password' valid={valPassword}/>
          </div>
          <div className='subBox'>
            <Input placeholder='(83) 00000-0000' field='Phone' req={false} type='phone' valid={valPhone}/>
            <Input field='Birthday' req={true} type='date' valid={valBirth}/>
          </div>
        </div>
        <div className='footBox'>
          <span>
            <Checkbox name='terms'
            label='I accept the terms and privacy'
            valid={checked}
            msg='You must accept the terms'/>
          </span>
          <Button value='Register'/>
        </div>
      </form>
    </div>
  )
}

export default Form
