import './App.css'

import CardBooks from './components/CardBooks'

function App() {

  return (
    <>
      
      <CardBooks 
        titulo='As Cavernas de Aço'
        autor='Isaac Asimov'
      />

      <CardBooks 
        titulo='O Sol Desvelado'
        autor='Isaac Asimov'
      />

    <CardBooks 
        titulo='O Senho dos Áneis: A Sociedade do Anel'
        autor='J.R.R Tolkien'
      />
      

      
    </>
  )
}

export default App
