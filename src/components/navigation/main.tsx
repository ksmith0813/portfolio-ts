import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Navigation } from './navigation'
import { Home } from 'components/home/home'
import 'index.scss'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index path='home' element={<Home />} />
        <Route path='*' element={<Typography variant='h6'>Page Not Found</Typography>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
