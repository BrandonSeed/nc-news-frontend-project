import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ArticlesDisplay from './components/ArticlesDisplay'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <ArticlesDisplay></ArticlesDisplay>
    </>
  )
}

export default App
