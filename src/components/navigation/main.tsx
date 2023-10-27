import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Navigation } from './navigation'
import { Home } from 'components/home/home'
import { Dashboard } from 'components/dashboard/dashboard'
import { Register } from 'components/register/register'
import { Table } from 'components/table/table'
import { List } from 'components/list/list'
import { Weather } from 'components/weather/weather'
import { Visuals } from 'components/visuals/visuals'
import 'index.scss'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index path='home' element={<Home />} />
        <Route index path='dashboard' element={<Dashboard />} />
        <Route index path='register' element={<Register />} />
        <Route index path='table' element={<Table />} />
        <Route index path='list' element={<List />} />
        <Route index path='weather' element={<Weather />} />
        <Route index path='visuals' element={<Visuals />} />
        <Route path='*' element={<Typography variant='h6'>Page Not Found</Typography>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
