import { TextField, Typography } from '@mui/material'

interface FormTextFieldProps {
  label: string
  property: string
  element: any
  setElement: any
  error?: string
  required?: boolean
}

export const FormTextField = ({ label, property, element, setElement, error, required }: FormTextFieldProps) => (
  <>
    <TextField
      value={element[property] || ''}
      label={label}
      name={property}
      onChange={(e) => setElement({ ...element, [`${property}`]: e.target.value })}
      required={required}
      error={error != null && error != ''}
      fullWidth
    />
    {error && <Typography style={{ color: 'rgb(211, 47, 47)' }}>{error}</Typography>}
  </>
)
