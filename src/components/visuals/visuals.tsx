import { useState } from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, styled } from '@mui/material'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { LineChartContent } from 'components/_siteWide/charts/lineChartContent'
import { TreeMap } from 'components/_siteWide/charts/treeMapContent'
import { BarChart } from 'components/_siteWide/charts/barChartContent'

const line = 'line'
const bar = 'bar'
const tree = 'tree'

const StyledGridChart = styled(Grid)(({ theme }) => ({
  minHeight: 'calc(100vh - 220px)',
  paddingTop: '2rem',
}))

export const Visuals = () => {
  const [selectedChart, setSelectedChart] = useState<string>(line)

  return (
    <>
      <PageHeader title='Visuals' />
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={selectedChart === line} onChange={() => setSelectedChart(line)} />}
          label='Line Chart'
        />
        <FormControlLabel
          control={<Checkbox checked={selectedChart === bar} onChange={() => setSelectedChart(bar)} />}
          label='Bar Chart'
        />
        <FormControlLabel
          control={<Checkbox checked={selectedChart === tree} onChange={() => setSelectedChart(tree)} />}
          label='Tree Map'
        />
      </FormGroup>
      {selectedChart === line && (
        <Grid container sx={{ width: '100%' }}>
          <StyledGridChart item xs>
            <LineChartContent />
          </StyledGridChart>
        </Grid>
      )}
      {selectedChart === bar && (
        <Grid container sx={{ width: '100%' }}>
          <StyledGridChart item xs>
            <BarChart />
          </StyledGridChart>
        </Grid>
      )}
      {selectedChart === tree && (
        <Grid container sx={{ width: '100%' }}>
          <StyledGridChart item xs>
            <TreeMap />
          </StyledGridChart>
        </Grid>
      )}
    </>
  )
}
