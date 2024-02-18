import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage, NotFoundPage, ProjectPage, TechnologiesPage } from './Pages';
import { ThemeProvider } from '@emotion/react'; // Import ThemeProvider from Emotion
import theme from '../theme'; // Import your custom theme


function App() {
  return (
    <>
      <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={< AboutPage />} />
            <Route path='/technologies' element={<TechnologiesPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/contact' element={<ContactPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
