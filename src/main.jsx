import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionPage from './pages/AdmissionPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
