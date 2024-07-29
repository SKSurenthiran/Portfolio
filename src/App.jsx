import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home_page/Index'
import Loader from './Components/Loder';
function App() {
  const [showLoding] = useState(false);
  return (
    <BrowserRouter>
    {showLoding ? <Loader/> : null}  
    <Routes>
      <Route path='/' element ={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
