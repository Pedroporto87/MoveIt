import { useNavigate } from 'react-router-dom'
import Logofooter from '../img/imageedit_2_5318115556.jpg'
export const LogoFooter = () => {

    const navigate = useNavigate()

    const handleClickHome = () => {
        return navigate("/")
    }

  return (
    <figure id='logo'>
        <img src={Logofooter} onClick={handleClickHome} alt='Logo MovieIt'/>
    </figure>
  )
}