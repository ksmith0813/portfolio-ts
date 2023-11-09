import { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { useGetUsersQuery } from 'store/api/userApi'
import { userColumns } from './columns'

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-row:nth-child(odd)': {
    backgroundColor: theme.gray1,
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: `${theme.primaryLight}`,
  },
  '& .MuiDataGrid-row.Mui-selected': {
    backgroundColor: `${theme.primaryLight}`,
  },
}))

export const Table = () => {
  const { data } = useGetUsersQuery()

  const [userData, setUserData] = useState([])

  useEffect(() => data && setUserData(data.results || []), [data])

  return (
    <Box sx={{ height: 'calc(100vh - 175px)' }}>
      <PageHeader title='Table' />
      <StyledDataGrid
        loading={!userData || userData?.length === 0}
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
