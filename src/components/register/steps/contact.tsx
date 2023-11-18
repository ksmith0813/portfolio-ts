import { Grid } from '@mui/material'
import { FormTextField } from 'components/_siteWide/form/formTextField'
import { useRegisterReducer } from 'store/hooks/useRegisterReducer'
import { Actions } from './actions'

export const Contact = () => {
  const { registerState, setRegisterContact, nextRegisterStep } = useRegisterReducer()

  const contact = registerState.contact

  const onSubmit = () => nextRegisterStep(contact)

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField
            label='First'
            property='firstName'
            element={contact}
            setElement={setRegisterContact}
            required
          />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField label='Last' property='lastName' element={contact} setElement={setRegisterContact} required />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField
            label='Address Line 1'
            property='address'
            element={contact}
            setElement={setRegisterContact}
            required
          />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField label='Address Line 2' property='apt' element={contact} setElement={setRegisterContact} />
        </Grid>
      </Grid>
      <Grid container spacing={4} columns={{ xs: 4, sm: 6, md: 12 }} sx={{ mt: 0, mb: 0 }}>
        <Grid item xs={2} sm={4} md={4}>
          <FormTextField label='City' property='city' element={contact} setElement={setRegisterContact} required />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormTextField label='State' property='state' element={contact} setElement={setRegisterContact} required />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormTextField label='Zip' property='zip' element={contact} setElement={setRegisterContact} required />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 0 }}>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField label='Email' property='email' element={contact} setElement={setRegisterContact} />
        </Grid>
        <Grid item xs={2} sm={6} md={12}>
          <FormTextField label='Phone' property='phone' element={contact} setElement={setRegisterContact} required />
        </Grid>
      </Grid>
      <Actions submit={onSubmit} />
    </form>
  )
}
