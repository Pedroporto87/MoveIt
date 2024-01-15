import { LogoImage } from "./logoimage"
import { SocialMedia } from "./socialmedia"
import { NavButtons } from "./NavButtons"
import '../styles/components/navbar.scss'

export const NavBar = () => {
  return (
    <nav>
        <LogoImage />
        <NavButtons />
        <SocialMedia /> 
    </nav>
  )
}
