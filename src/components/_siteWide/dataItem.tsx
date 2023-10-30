import { Box, styled } from '@mui/material'

interface DataItemProps {
  label: string
  children: any
}

const StyledDataItemValue = styled(Box)(({ theme }) => ({
  color: theme.gray6,
}))

export const DataItem = ({ label, children }: DataItemProps) => {
  if ((Array.isArray(children) && !children.length) || !children) children = 'N/A'
  return (
    <>
      <Box>
        <b>{label}</b>
      </Box>
      <StyledDataItemValue>{children}</StyledDataItemValue>
    </>
  )
}
