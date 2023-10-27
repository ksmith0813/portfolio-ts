import { ReactElement } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined'
import TableViewIcon from '@mui/icons-material/TableView'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import BarChartIcon from '@mui/icons-material/BarChart'

export type PageLink = {
  route: string
  icon: ReactElement
}

export const pageLinks: PageLink[] = [
  { route: '/home', icon: <HomeIcon /> },
  { route: '/dashboard', icon: <ViewQuiltIcon /> },
  { route: '/register', icon: <AppRegistrationOutlinedIcon /> },
  { route: '/table', icon: <TableViewIcon /> },
  { route: '/list', icon: <FormatListBulletedOutlinedIcon /> },
  { route: '/weather', icon: <WbSunnyIcon /> },
  { route: '/visuals', icon: <BarChartIcon /> },
]
