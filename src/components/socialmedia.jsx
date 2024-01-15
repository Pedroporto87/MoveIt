import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import '../styles/components/socialmedia.scss'

export const SocialMedia = () => {
    const handleClickIn = () => {
        window.location.href='https://www.linkedin.com/company/movieit-tecnologia-e-solu%C3%A7%C3%B5es/about/'
    }
    
    const handleClickWP = () => {
        window.location.href="https://api.whatsapp.com/send?phone=5521988399021&text=Texto%20aqui"
    }
    return (
        <section className='social-media'>
            <FaLinkedinIn id='linkedin' onClick={handleClickIn}/>
            <FaWhatsapp id='tiktok' onClick={handleClickWP}/>
            
        </section>
      )
}
