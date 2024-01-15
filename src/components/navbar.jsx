import { LogoImage } from "./logoimage"
import { SocialMedia } from "./socialmedia"
import { NavButtons } from "./NavButtons"

export const NavBar = () => {
  return (
    <nav>
        <LogoImage />
        <NavButtons />
        <SocialMedia /> 
    </nav>
  )
}
