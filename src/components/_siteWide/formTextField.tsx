import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form'
import { TextField } from '@mui/material'

interface FormTextFieldProps {
  register: any
  label: string
  property: string
  element: any
  setElement: any
  errors: FieldErrors<FieldValues>
  required?: boolean
  pattern?: RegExp
}

export const FormTextField = ({
  register,
  label,
  property,
  element,
  setElement,
  errors,
  required,
  pattern,
}: FormTextFieldProps) => (
  <>
    <TextField
      {...register(property, { required: required || false, pattern })}
      value={element[property] || ''}
      label={label}
      onChange={(e) => setElement({ ...element, [`${property}`]: e.target.value })}
      fullWidth
      required
    />
    {errors.lastName && <p>{`${property} is required.`}</p>}
  </>
)
