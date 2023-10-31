import { Typography } from '@mui/material'

interface PageHeaderProps {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => (
  <Typography variant='h5' sx={{ mb: '1rem' }}>
    {title}
  </Typography>
)
