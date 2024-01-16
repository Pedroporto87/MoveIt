import { LogoFooter } from "./logofooter" 
import { SocialMedia } from "./socialmedia"
import '../styles/components/footer.scss'
import '../styles/components/socialmedia.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <LogoFooter />
      <SocialMedia />
    </footer>
  )
}
