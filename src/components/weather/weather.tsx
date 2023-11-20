import { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { useGetWeatherQuery } from 'store/api/weatherApi'

export const Weather = () => {
  const [search, setSearch] = useState<string>('Fayetteville, AR')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { data } = useGetWeatherQuery({ search: 'Fayetteville, AR', key: process.env.REACT_APP_WEATHER_API })

  const onChange = (e: any) => setSearch(e.target.value || '')

  return (
    <>
      <PageHeader title='Weather' />
      <TextField
        value={search}
        label='You can search by zip code, latitude/longitude, or city/state.'
        onChange={onChange}
        fullWidth
      />
    </>
  )
}
