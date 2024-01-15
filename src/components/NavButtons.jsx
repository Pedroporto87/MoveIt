import { NavLink } from "react-router-dom"
import '../styles/components/nav-buttons.scss'

export const NavButtons = () => {
  return (
    <section className='page-links'>
    <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/empresa">Empresa</NavLink>
        <NavLink to="/produtos-soluções">Produtos e Soluções</NavLink>
        <NavLink to="/contato" >Contato</NavLink>
    </ul>
</section>
  )
}
