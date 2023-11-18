import { TextField, Typography } from '@mui/material'
import { ERRORS } from 'utils/errors'

interface FormTextFieldProps {
  label: string
  property: string
  element: any
  setElement: any
  error?: string
  required?: boolean
}

export const FormTextField = ({ label, property, element, setElement, required }: FormTextFieldProps) => {
  const currentError = element.errors.filter((e: string) => e === ERRORS[property])[0]
  return (
    <>
      <TextField
        value={element[property] || ''}
        label={label}
        name={property}
        onChange={(e) => setElement({ ...element, [`${property}`]: e.target.value })}
        required={required}
        error={currentError != null && currentError != ''}
        fullWidth
      />
      {currentError && <Typography style={{ color: 'rgb(211, 47, 47)' }}>{currentError}</Typography>}
    </>
  )
}
