import './App.css'
import NavBar from './components/NavBar'
import ArticlesDisplay from './components/ArticlesDisplay'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={ <ArticlesDisplay /> }></Route>
        

      </Routes>
    </>
  )
}

export default App
