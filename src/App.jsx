import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MovieList from './components/MovieList'
import Movie from './pages/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}> </Route>
          <Route path='movies/:type' element={<MovieList/>}> </Route>
          <Route path='movies/:*/' element={<h1>Error</h1>}> </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
