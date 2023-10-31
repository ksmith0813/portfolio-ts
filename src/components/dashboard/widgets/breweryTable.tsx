import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { BeerResponse, useGetBeerQuery } from 'store/api/beerApi'

const beerColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'address_1',
    headerName: 'Address',
    flex: 1,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
  },
  {
    field: 'state',
    headerName: 'State',
    flex: 1,
  },
  {
    field: 'brewery_type',
    headerName: 'Type',
    flex: 1,
  },
]
export const BreweryTable = () => {
  const { data } = useGetBeerQuery()

  const [beerData, setBeerData] = useState<BeerResponse[]>([])

  useEffect(() => data && setBeerData(data), [data])

  return (
    <Box sx={{ height: '600px', background: '#FFFFFF' }}>
      <DataGrid
        loading={!beerData || beerData?.length === 0}
        rows={beerData}
        columns={beerColumns}
        columnVisibilityModel={{
          id: false,
        }}
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
}
