import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RogersToolbox from './assets/RogersToolbox.png'
import Nav from './Navbar/navbar.jsx'
import { ProjectCard } from './ProjectCard/projectCard.jsx'

function App() {


  return (
    <div>
      <Nav />
      <ProjectCard title="Warehouse Automation Tool" description="a tool for rogers" imageUrl={RogersToolbox} githubUrl="www.github.com/joshieingold" liveUrl="nah"/>
    </div>
  )
}

export default App
