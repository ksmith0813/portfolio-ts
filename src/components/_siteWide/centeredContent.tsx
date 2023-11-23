import { Box, styled } from '@mui/material'

const StyledCenteredContent = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})

export const CenteredContent = ({ children, height = 'calc(100vh - 300px)' }: any) => (
  <StyledCenteredContent style={{ height: height }}>{children}</StyledCenteredContent>
)
