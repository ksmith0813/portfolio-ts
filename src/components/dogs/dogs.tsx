import { useEffect } from 'react'
import { Box, Button, Card, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { useLazyGetDogQuery } from 'store/api/dogApi'
import { CenteredContent } from 'components/_siteWide/centeredContent'

export const Dogs = () => {
  const [trigger, { data }] = useLazyGetDogQuery()

  useEffect(() => {
    trigger()
  }, [])

  const StyledDogCard = styled(Card)({
    maxheight: 500,
    width: 500,
    marginTop: '2em',
  })

  return (
    <CenteredContent>
      <Box sx={{ height: 'calc(100vh - 175px)' }}>
        <PageHeader title='Random Dog Pics' />
        <Button variant='contained' size='large' onClick={() => trigger()}>
          Fetch a Dog Pic
        </Button>
        {data && (
          <StyledDogCard>
            <CardMedia component='img' image={data?.message} alt='Dog Pic' />
          </StyledDogCard>
        )}
      </Box>
    </CenteredContent>
  )
}
