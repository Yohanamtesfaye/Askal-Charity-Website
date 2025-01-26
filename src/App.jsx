import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Voulenteer from './Pages/Voulenteer'
import JoinUs from './Pages/JoinUs'
import Donate from './Pages/Donate'
import Register from './Pages/Register'
import More from'./Pages/More'
import Login from './Pages/Login'
function App() {


  return (
    <div className='bg-[#F5F5F5]'>
     <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path='/voulenteer' element={<Voulenteer/>} />
            <Route path='/join-us' element={<JoinUs/>} />
            <Route path='/register' element={<Register/>} />
            <Route path="/more/:id" element={<More />} />
            <Route path='/login' element={<Login />} />
            <Route path='/donate' element={<Donate/>} />
          </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
