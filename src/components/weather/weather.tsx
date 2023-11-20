import { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import newMoon from 'assets/moon-new.svg'
import waxingCrescent from 'assets/moon-waxing-crescent.svg'
import firstQuarter from 'assets/moon-first-quarter.svg'
import waxingGibbous from 'assets/moon-waxing-gibbous.svg'
import fullMoon from 'assets/moon-full.svg'
import waningGibbous from 'assets/moon-waning-gibbous.svg'
import lastQuarter from 'assets/moon/moon-last-quarter.svg'
import waningCrescent from 'assets/moon-waning-crescent.svg'
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
