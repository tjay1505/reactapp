import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './compo/Header'
import 'bootstrap/dist/js/bootstrap'
import MenuBar from './compo/MenuBar'
import Dummy from './Dummy'
import SecOne from './SecOne'
import SecTwo from './SecTwo'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import { enableBodyScroll ,disableBodyScroll } from "body-scroll-lock";
  
function App() {
  const [mode, setMode] = useState('dark')
  const [menuTF,setMenuTF] = useState(true)
  const [scroll,setScroll] = useState(true)
  scroll ? enableBodyScroll(document): disableBodyScroll(document)
  return (
    <div className="cont container-fluid " data-theme={mode} >
        <Header mode={mode} setMode ={setMode} menuTF={menuTF} setMenuTF={setMenuTF} setScroll={setScroll} scroll={scroll}/>
        <MenuBar menuTF={menuTF} setMenuTF={setMenuTF} setScroll={setScroll} scroll={scroll}/>
        <SecOne /> 
        <About />
        <SecTwo /> 
        <Project/> 
        <Experience/>
        <Contact />
        <Footer/>
    </div>
    
  )
}

export default App
