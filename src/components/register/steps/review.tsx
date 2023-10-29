import { Typography } from '@mui/material'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Review = () => {
  const { registerState, completeRegistration } = useRegisterReducer()

  const onSubmit = () => completeRegistration()

  return (
    <>
      <Typography variant='h5'>Review content goes here</Typography>
      <Actions submit={onSubmit} />
    </>
  )
}
