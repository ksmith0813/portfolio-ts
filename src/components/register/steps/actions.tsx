import { Alert, Box, Button, styled } from '@mui/material'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
interface ActionProps {
  reset?: () => void
  submit: () => void
}

const StyledActionBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: '2rem',
})

export const Actions = ({ reset, submit }: ActionProps) => {
  const { registerState, previousRegisterStep, resetRegisterStep, completeRegistration } = useRegisterReducer()
  const step = registerState.step

  return (
    <>
      <StyledActionBox>
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
      </StyledActionBox>
      {registerState.complete && (
        <StyledActionBox>
          <Alert severity='success'>Your information has been successfully submitted!</Alert>
        </StyledActionBox>
      )}
    </>
  )
}
