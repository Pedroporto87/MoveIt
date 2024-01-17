import { LogoFooter } from "./logofooter" 
import { SocialMedia } from "./socialmedia"
import '../styles/components/footer.scss'
import '../styles/components/socialmedia.scss'
import { Contact } from "./contact"

export const Footer = () => {
  return (
    <footer className='footer'>
      <LogoFooter />
      <Contact />
      <SocialMedia />
    </footer>
  )
}
