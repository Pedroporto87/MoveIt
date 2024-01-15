
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { ProdutosSolucoes } from './pages/ProdutosSolucoes.jsx'
import { Contato } from './pages/Contato'
import './styles/main.scss'
import Empresa from './pages/Empresa.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/empresa",
        element: <Empresa/>,
      },
      {
        path:"/produtos-soluções",
        element: <ProdutosSolucoes/>,
      },
      {
        path:"/contato",
        element: <Contato />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
