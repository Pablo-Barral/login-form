import './styles.css'
import Button from '../../components/Button'
import logo from '../../assets/signupLogo.png'
import { Link } from 'react-router-dom'

function Success() {

  return (
    <div className="main">
      <header>
            <img src={logo} alt='Header Image'/>
            <h1>Intern Sign Up</h1>
        </header>
        <Link to={'/'}>
          <Button success value='Go Back' />
        </Link>
    </div>
  )
}

export default Success
