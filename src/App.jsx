import { Outlet } from "react-router-dom"
import { NavBar } from './components/navbar'
import { Footer } from './components/footer'
import '../src/styles/components/devPorto.scss'

function App() {
  const devPorto = () => {
    window.location.href='https://www.linkedin.com/in/pedro-porto-pp/'
}

  return (
    <>
     <NavBar />
      <Outlet />
     <Footer />
     <section onClick={devPorto} className="devPorto">DevPorto</section>
     </>
  )
}

export default App
