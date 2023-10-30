import { Box, Button } from '@mui/material'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'

interface ActionProps {
  reset?: () => void
  submit: () => void
}

export const Actions = ({ reset, submit }: ActionProps) => {
  const { registerState, previousRegisterStep, resetRegisterStep, completeRegistration } = useRegisterReducer()
  const step = registerState.step

  return (
    <Box display='flex' alignItems='center' justifyContent='center' sx={{ mt: '2rem' }}>
      {step < 4 && (
        <Button
          variant='outlined'
          sx={{ mr: '1rem' }}
          size='large'
          onClick={() => {
            resetRegisterStep()
            reset && reset()
          }}
        >
          Reset
        </Button>
      )}
      {step > 0 && (
        <Button variant='outlined' sx={{ mr: '1rem' }} size='large' onClick={() => previousRegisterStep()}>
          Previous
        </Button>
      )}
      {step < 4 && (
        <Button variant='contained' size='large' onClick={() => submit()}>
          Next
        </Button>
      )}
      {step === 4 && (
        <Button variant='contained' size='large' onClick={() => completeRegistration()}>
          Submit
        </Button>
      )}
    </Box>
  )
}
