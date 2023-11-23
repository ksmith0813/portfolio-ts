import { Box } from '@mui/material'
import NoData from 'assets/no-data.svg'
import { CenteredContent } from './centeredContent'

export const NoDataContent = ({ message = 'No Data', height = 'calc(100vh - 300px)' }) => (
  <CenteredContent height={height}>
    <img src={NoData} alt='' />
    <Box>{message}</Box>
  </CenteredContent>
)
