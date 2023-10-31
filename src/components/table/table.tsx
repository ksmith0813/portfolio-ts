import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { columns } from 'data/table/columns'
import { rows } from 'data/table/rows'

export const Table = () => (
  <Box sx={{ height: 'calc(100vh - 175px)', width: '100%' }}>
    <PageHeader title='Table' />
    <DataGrid
      loading={rows.length === 0}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20,
          },
        },
      }}
      pageSizeOptions={[20]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
)
