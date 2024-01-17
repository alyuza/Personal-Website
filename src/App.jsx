import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './components'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App