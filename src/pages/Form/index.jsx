import './styles.css'

function Form() {

  return (
    <div className="main">
      <form className='modal'>
        <header>
            <img alt='Header Image'/>
            <h1>Intern Sign Up</h1>
        </header>
        <Input placeholder='Name' field='Full Name' req={true}/>
        <div>
          <Input placeholder='foo@bar.com' field='Email' req={true} type='email'/>
          <Input field='Password' req={true} type='password'/>
        </div>
        <div>
          <Input placeholder='(83) 00000-0000' field='Phone' type='phone'/>
          <Input field='Birthday' req={true} type='date'/>
        </div>
        <span>
          <Input type='checkbox'/>
          <Button/>
        </span>
      </form>
    </div>
  )
}

export default Form
