import { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ExitIntentModal from './components/ExitIntentModal.jsx'
import { routes } from './routes.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return <div className="min-h-[60vh] flex items-center justify-center text-white">Page not found</div>
}

// Pages rendered without the global footer (_shared-misc.md: /2026-paid-lp ends at its last feature row).
const hideFooterOn = ['/2026-paid-lp']

function MaybeFooter() {
  const { pathname } = useLocation()
  return hideFooterOn.includes(pathname.replace(/\/$/, '') || '/') ? null : <Footer />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          {routes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
          {/* live redirects: /university 301s to the classes page; /apac-demo isn't specced, so it falls back to /book-demo */}
          <Route path="/university" element={<Navigate to="/university/classes" replace />} />
          <Route path="/apac-demo" element={<Navigate to="/book-demo" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <MaybeFooter />
      <ExitIntentModal />
    </BrowserRouter>
  )
}
