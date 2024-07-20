
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavBar'
import Home from './components/Home'  // Assuming you have a Home component
import About from './components/About' // Assuming you have an About component
import Loadercom from './components/Loader'
import Contact from './components/contact'
import { useEffect, useState } from 'react'
import SkillStack from './components/SkillStack'
import AnimatedCursor from "react-animated-cursor"
import Project from './components/Project'



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }
 , []);


  return (
    <div className='App'>
    <AnimatedCursor  
      innerSize="15px"
      outerSize="15px"
      color='189, 49, 105'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
      {loading ? (
        <Loadercom />
      
       
      ) : (
        <>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<SkillStack />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/work' element={<Project/>} />
          </Routes>
        </>
      )}




      
    </div>
  )
}

export default App

