import { Box, Grid, styled } from '@mui/material'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { BreweryTable } from './widgets/breweryTable'
import { LineChartContent } from 'components/_siteWide/charts/lineChartContent'
import { TreeMap } from 'components/_siteWide/charts/treeMapContent'
import { BarChart } from 'components/_siteWide/charts/barChartContent'

const StyledDashboardGridItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.gray2,
  minHeight: 400,
  padding: '2rem',
}))

export const Dashboard = () => {
  return (
    <Box sx={{ mr: '2rem' }}>
      <PageHeader title='Dashboard' />
      <Grid container spacing={4} sx={{ mt: '1.5rem', ml: '0rem', mr: '2rem' }}>
        <StyledDashboardGridItem item xs={4}>
          <LineChartContent />
        </StyledDashboardGridItem>
        <StyledDashboardGridItem item xs={8}>
          <BreweryTable />
        </StyledDashboardGridItem>
      </Grid>
      <Grid container spacing={4} sx={{ pt: '1.5rem', ml: '0rem', mr: '2rem', height: '100%' }}>
        <StyledDashboardGridItem item xs={8}>
          <TreeMap />
        </StyledDashboardGridItem>
        <StyledDashboardGridItem item xs={4}>
          <BarChart />
        </StyledDashboardGridItem>
      </Grid>
    </Box>
  )
}
