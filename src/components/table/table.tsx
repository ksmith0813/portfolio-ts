import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { PageHeader } from 'components/_siteWide/pageHeader'

export const Table = () => (
  <Box sx={{ height: 'calc(100vh - 175px)', width: '100%' }}>
    <PageHeader title='Table' />
    <Typography>Content goes here</Typography>
  </Box>
)
