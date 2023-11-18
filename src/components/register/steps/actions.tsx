import { useEffect, useRef, useState } from 'react'
import { Alert, Box, Button, styled, Slide, Typography } from '@mui/material'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
interface ActionProps {
  submit: () => void
}

const StyledActionBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '2rem',
})

const StyledCompleteAlert = styled(Alert)({
  position: 'fixed',
  right: '1rem',
  top: 'calc(64px + 1rem)',
})

export const Actions = ({ submit }: ActionProps) => {
  const { registerState, previousRegisterStep, resetRegisterStep, resetRegistration, completeRegistration } =
    useRegisterReducer()
  const containerRef = useRef<HTMLElement>(null)

  const [showCompleteAlert, setShowCompleteAlert] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompleteAlert(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [showCompleteAlert])

  const step = registerState.step

  const onComplete = () => {
    setShowCompleteAlert(true)
    completeRegistration()
  }

  return (
    <>
      <StyledActionBox>
        {step < 4 && (
          <Button variant='outlined' sx={{ mr: '1rem' }} size='large' onClick={() => resetRegisterStep()}>
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
          <>
            <Button variant='outlined' sx={{ mr: '1rem' }} size='large' onClick={() => resetRegistration()}>
              Reset
            </Button>
            <Button variant='contained' size='large' onClick={onComplete}>
              Submit
            </Button>
          </>
        )}
      </StyledActionBox>
      {step === 4 && showCompleteAlert && registerState.complete && (
        <Slide in={showCompleteAlert} container={containerRef.current}>
          <StyledCompleteAlert severity='success'>
            <Typography>Your information has been successfully submitted!</Typography>
          </StyledCompleteAlert>
        </Slide>
      )}
    </>
  )
}
