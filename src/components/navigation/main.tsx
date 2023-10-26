import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './navigation'
import { Home } from 'components/home/home'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index path='home' element={<Home />} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
