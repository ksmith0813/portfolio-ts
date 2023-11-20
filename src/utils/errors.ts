const getRequiredText = (property: string) => `${property} is required`

export const ERRORS: any = {
  firstName: getRequiredText('First name'),
  lastName: getRequiredText('Last name'),
  address: getRequiredText('Address'),
  city: getRequiredText('City)'),
  state: getRequiredText('State'),
  zip: getRequiredText('Zip'),
  email: getRequiredText('Email'),
  phone: getRequiredText('Phone'),
}
