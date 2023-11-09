import { Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'

export const userColumns: GridColDef[] = [
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
    renderCell: (params) => <Chip label={`${params.row.location.country || ''}`} />,
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
