import './App.css'
import Messages from './pages/Messages'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {



  return (
    <>
      <Routes>
        <Route path="/caixa-de-mensagens" element={<Messages />} />
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </>
  )
}

export default App
