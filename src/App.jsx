import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer } from './components'
import { ThemeProvider } from '@emotion/react'; // Import ThemeProvider from Emotion
import theme from '../theme'; // Import your custom theme
import { HomeSection, SoonPage } from './components/MainPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/about' element={<SoonPage />} />
            <Route path='/technologies' element={<SoonPage />} />
            <Route path='/projects' element={<SoonPage />} />
            <Route path='/contact' element={<SoonPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
