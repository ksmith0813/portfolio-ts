import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { App } from './app'
import { Home } from 'components/home/home'
import { Dashboard } from 'components/dashboard/dashboard'
import { Register } from 'components/register/register'
import { Table } from 'components/table/table'
import { Weather } from 'components/weather/weather'
import { Visuals } from 'components/visuals/visuals'
import { Dogs } from 'components/dogs/dogs'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index path='home' element={<Home />} />
        <Route index path='dashboard' element={<Dashboard />} />
        <Route index path='register' element={<Register />} />
        <Route index path='table' element={<Table />} />
        <Route index path='weather' element={<Weather />} />
        <Route index path='visuals' element={<Visuals />} />
        <Route index path='dogs' element={<Dogs />} />
        <Route path='*' element={<Typography variant='h6'>Page Not Found</Typography>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
