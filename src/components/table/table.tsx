import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { useGetUsersQuery } from 'store/api/userApi'

const userColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    valueGetter: (params) => {
      return `${params.row?.id?.value || ''}`
    },
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
    valueGetter: (params) => {
      return `${params.row.name.first || ''} ${params.row.name.last || ''}`
    },
  },
  {
    field: 'address',
    headerName: 'Address',
    flex: 1,
    valueGetter: (params) => {
      return `${params.row.location.street.number || ''} ${params.row.location.street.name}`
    },
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
    valueGetter: (params) => {
      return `${params.row.location.city || ''}`
    },
  },
  {
    field: 'state',
    headerName: 'State',
    flex: 1,
    valueGetter: (params) => {
      return `${params.row.location.state || ''}`
    },
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 1,
    valueGetter: (params) => {
      return `${params.row.location.country || ''}`
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    valueGetter: (params) => {
      return `${params.row.email || ''}`
    },
  },
]

export const Table = () => {
  const { data } = useGetUsersQuery()

  const [userData, setUserData] = useState([])

  useEffect(() => data && setUserData(data.results || []), [data])

  return (
    <Box sx={{ height: 'calc(100vh - 175px)' }}>
      <PageHeader title='Table' />
      <DataGrid
        loading={!userData}
        rows={userData}
        columns={userColumns}
        getRowId={(row: any) => row.id + row.name.first}
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
