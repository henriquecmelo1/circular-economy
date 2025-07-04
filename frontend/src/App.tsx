import './App.css'
import MessageBox from './components/MessagesBox'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {



  return (
    <>
      <Routes>
        <Route path="/caixa-de-mensagens" element={<MessageBox />} />
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </>
  )
}

export default App
