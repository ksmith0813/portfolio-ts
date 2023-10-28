export const validateEmail = (value: string) => {
  if (!value) return
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  return !isValid && 'name@gmail.com'
}
