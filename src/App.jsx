import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer } from './components'
import { ThemeProvider } from '@emotion/react'; // Import ThemeProvider from Emotion
import theme from '../theme'; // Import your custom theme
import { AboutSection, HomeSection, ContactSection, TechnologiesSection } from './components/MainPage';
import ProjectSection from './components/MainPage/ProjectsSection';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/technologies' element={<TechnologiesSection />} />
            <Route path='/projects' element={<ProjectSection />} />
            <Route path='/contact' element={<ContactSection />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
