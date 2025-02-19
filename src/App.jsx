import './App.css'
import NavBar from './components/NavBar'
import ArticlesDisplay from './components/ArticlesDisplay'
import { Route, Routes } from 'react-router-dom'
import Article from './components/Article'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ArticlesDisplay /> } />
        <Route path="/articles/:article_id" element={ <Article />} />

      </Routes>
    </div>
  )
}

export default App
