export const validatePhone = (value: string) => {
  if (!value) return
  const isValid = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(value)
  return !isValid && '123-456-7890'
}
