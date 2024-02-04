import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exacth path='/'element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
