import { ReactElement } from 'react'
import {
  Box,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import TheatersIcon from '@mui/icons-material/Theaters'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import FlightIcon from '@mui/icons-material/Flight'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Contact } from './steps/contact'
import { Movie } from './steps/movie'
import { Music } from './steps/music'
import { Travel } from './steps/travel'
import { Review } from './steps/review'

const StyledRegisterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
})

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: theme.linearGradient,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: theme.linearGradient,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const StyledStepIconContainer = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: theme.linearGradientAngle,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: theme.linearGradientAngle,
  }),
}))

const ColorStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props

  const icons: { [index: string]: ReactElement } = {
    1: <PersonIcon />,
    2: <TheatersIcon />,
    3: <HeadphonesIcon />,
    4: <FlightIcon />,
    5: <FactCheckIcon />,
  }

  return (
    <StyledStepIconContainer ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </StyledStepIconContainer>
  )
}

export const Register = () => {
  const { registerState } = useRegisterReducer()

  const steps = [
    { title: 'Contact', content: <Contact /> },
    { title: 'Movies', content: <Movie /> },
    { title: 'Music', content: <Music /> },
    { title: 'Travel', content: <Travel /> },
    { title: 'Review', content: <Review /> },
  ]

  return (
    <StyledRegisterBox>
      <Box>
        <Typography variant='h5'>Please complete the registration form below</Typography>
      </Box>
      <Stepper
        activeStep={registerState.step}
        alternativeLabel
        connector={<ColorlibConnector />}
        sx={{ width: '50%', mt: '3rem' }}
      >
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel StepIconComponent={ColorStepIcon}>
              <Typography variant='h6'>{step.title}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: '3rem', width: '50%' }}>{steps[registerState.step].content}</Box>
    </StyledRegisterBox>
  )
}
