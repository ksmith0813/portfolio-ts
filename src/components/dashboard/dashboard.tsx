import { Box, Grid, styled } from '@mui/material'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { BreweryTable } from './widgets/breweryTable'
import { LineChartContent } from 'components/_siteWide/charts/lineChartContent'
import { TreeMap } from 'components/_siteWide/charts/treeMapContent'
import { BarChart } from 'components/_siteWide/charts/barChartContent'

const StyledGridTopContainer = styled(Grid)({
  margin: '1.5rem 2rem 0 0',
})

const StyledGridBottomContainer = styled(Grid)({
  margin: '0rem 2rem 0 0',
  paddingTop: '1.5rem',
})

const StyledDashboardGridItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.gray2,
  minHeight: 400,
  padding: '2rem',
}))

export const Dashboard = () => {
  return (
    <Box sx={{ mr: '2rem' }}>
      <PageHeader title='Dashboard' />
      <StyledGridTopContainer container spacing={4}>
        <StyledDashboardGridItem item xs={4}>
          <LineChartContent />
        </StyledDashboardGridItem>
        <StyledDashboardGridItem item xs={8}>
          <BreweryTable />
        </StyledDashboardGridItem>
      </StyledGridTopContainer>
      <StyledGridBottomContainer container spacing={4}>
        <StyledDashboardGridItem item xs={8}>
          <TreeMap />
        </StyledDashboardGridItem>
        <StyledDashboardGridItem item xs={4}>
          <BarChart />
        </StyledDashboardGridItem>
      </StyledGridBottomContainer>
    </Box>
  )
}
