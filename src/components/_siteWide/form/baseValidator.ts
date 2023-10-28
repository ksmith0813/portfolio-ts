export const validateProperty = (validator: any, form: any, property: string, required = false, section = null) => {
  let value = form[property]
  let propertyName = property

  form.errors = form.errors.filter((e: any) => e.property !== propertyName)
  let error

  if (validator) error = validator(value, form, property)
  if (!value && !error && required) error = getRequiredMessage(propertyName)
  if (error) addError(form, propertyName, error, section)
}

export const validateRequiredFields = (form: any, optionalFields: string[] = []) => {
  Object.keys(form).forEach((k: string) => {
    if (optionalFields.includes(k) || k === 'errors') return
    const value = form[k]
    if ((Array.isArray(value) && !value.length) || !value) {
      form.errors.push({ property: k, message: getRequiredMessage(k) })
    }
  })

  return form
}

const spacesToProperty = (property: string) => {
  let propertyName = property
  if (Array.isArray(property)) propertyName = property[1]
  if (property.includes('_')) propertyName = propertyName.replace('_', ' ')
  return propertyName.replace(/([a-z])([A-Z])/g, '$1 $2')
}

const getRequiredMessage = (property: string) => `${spacesToProperty(property)} is required`

const addError = (form: any, property: string, error: string, section = null) => {
  form.errors.push({
    property: property,
    message: error,
    section: section,
  })
}
