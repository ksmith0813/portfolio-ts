import { Box, Grid, styled } from '@mui/material'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { LineChartContent } from 'components/_siteWide/charts/lineChartContent'
import { TreeMap } from 'components/_siteWide/charts/treeMapContent'
import { BarChart } from 'components/_siteWide/charts/barChartContent'
import { Table } from 'components/table/table'

const StyledGridTopContainer = styled(Grid)({
  margin: '1.5rem 2rem 0 0',
  height: '100%',
})

const StyledGridBottomContainer = styled(Grid)({
  margin: '0rem 2rem 1.5rem 0',
  paddingTop: '1.5rem',
  height: '100%',
})

const StyledDashboardGridItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.gray2,
  padding: '2rem',
}))

const topContent = (
  <StyledGridTopContainer container spacing={4}>
    <StyledDashboardGridItem item xs={4}>
      <LineChartContent />
    </StyledDashboardGridItem>
    <StyledDashboardGridItem item xs={8}>
      <Table height='calc(50vh - 160px)' />
    </StyledDashboardGridItem>
  </StyledGridTopContainer>
)

const bottomContent = (
  <StyledGridBottomContainer container spacing={4}>
    <StyledDashboardGridItem item xs={8}>
      <TreeMap />
    </StyledDashboardGridItem>
    <StyledDashboardGridItem item xs={4}>
      <BarChart />
    </StyledDashboardGridItem>
  </StyledGridBottomContainer>
)

const ContaierContent = ({ content }: any) => <Box style={{ height: 'calc(50vh - 95px)' }}>{content}</Box>

export const Dashboard = () => {
  return (
    <Box sx={{ mr: '2rem' }}>
      <PageHeader title='Dashboard' />
      <ContaierContent content={topContent} />
      <ContaierContent content={bottomContent} />
    </Box>
  )
}
