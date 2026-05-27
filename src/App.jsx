import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
