import { useNavigate } from 'react-router-dom'
import Logo from '../img/moveit_logo180.jpg'
import '../styles/components/logo.scss'


export const LogoImage = () => {

    const navigate = useNavigate()

    const handleClickHome = () => {
        return navigate("/")
    }

  return (
    <figure id='logo'>
        <img src={Logo} onClick={handleClickHome} alt='Logo MovieIt'/>
    </figure>
  )
}
