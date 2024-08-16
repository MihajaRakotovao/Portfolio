import React from 'react'
import Header from './components/header/Header'
import PageNotFound from './components/pageNotFound/PageNotFound'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Projet from './components/projet/Projet'
import CV from './components/Cv/CV'
function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/projet' element = {<Projet />} />
          <Route path='/resume' element = {<CV />} />
          <Route path='*' element = {<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
export default App