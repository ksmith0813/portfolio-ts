export const validateZip = (value: string) => {
  if (!value) return
  const isValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
  return !isValid && '12345 or 12345-1234'
}
