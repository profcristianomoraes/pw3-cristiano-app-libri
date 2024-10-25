/* Importa os componente de navegação da aplicação */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Importa o CSS */
import './App.css'

/* Importa o componente de meu */
import NavBar from './components/layout/NavBar'

/* Importa o componente de container */
import Container from './components/layout/Container'

/* Importação das páginas */
import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'
import DetailBook from './components/pages/DetailBook'

function App() {

  return (
    <>
      
      {/* Estrutura de navegação */}
      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home />}/>
              <Route path='/listBook' element={<ListBooks />}/>
              <Route path='/createBook' element={<CreateBooks />}/>
              <Route path='/DetailBook/:cod_livro' element={<DetailBook />}/>
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>
      
    </>
  )
}

export default App
