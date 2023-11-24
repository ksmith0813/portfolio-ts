import { useEffect, useState } from 'react'
import { Avatar, Box, Chip, CircularProgress, Grid, LinearProgress, styled, Switch, TextField } from '@mui/material'
import newMoon from 'assets/moon-new.svg'
import waxingCrescent from 'assets/moon-waxing-crescent.svg'
import firstQuarter from 'assets/moon-first-quarter.svg'
import waxingGibbous from 'assets/moon-waxing-gibbous.svg'
import fullMoon from 'assets/moon-full.svg'
import waningGibbous from 'assets/moon-waning-gibbous.svg'
import lastQuarter from 'assets/moon-last-quarter.svg'
import waningCrescent from 'assets/moon-waning-crescent.svg'
import { NoDataContent } from 'components/_siteWide/noData'
import { PageHeader } from 'components/_siteWide/pageHeader'
import { useGetWeatherQuery } from 'store/api/weatherApi'
import { DataItem } from 'components/_siteWide/dataItem'
import { formatDate } from 'utils/date'
import { CenteredContent } from 'components/_siteWide/centeredContent'
import { useWeatherReducer } from 'store/hooks/useWeatherReducer'

const StyledTempAvatar = styled(Avatar)(({ theme }) => ({
  height: '200px',
  width: '200px',
  fontSize: '3rem',
  background: theme.linearGradientAngle,
}))

const StyledLocationGrid = styled(Grid)({
  paddingTop: '2rem',
  fontSize: '1.25rem',
})

const StyledLocationLinearProgress = styled(LinearProgress)({
  height: '10px',
  width: '75%',
})

const StyledWeatherBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.gray2,
  color: theme.gray7,
  paddingBottom: '1rem',
  fontSize: '1.5rem',
  textAlign: 'center',
}))

const StyledHourlyWeather = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  flexFlow: 'nowrap',
  overflowX: 'auto',
  alignItems: 'flex-start',
  width: 'calc(100% - 50px)',
  marginBottom: '2rem',
  '& div.forecast-item': {
    margin: '1.75rem 1rem 1.5rem 1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '200px',
    backgroundColor: theme.gray2,
  },
}))

const StyledMoonIcon = styled('img')({
  height: '50px',
})

export const Weather = () => {
  const { weatherState, setWeatherSearch, setWeatherLoading, setWeatherData } = useWeatherReducer()
  const search = weatherState.search
  const loading = weatherState.loading
  const weather = weatherState.weather
  const { data } = useGetWeatherQuery({ search: search, key: process.env.REACT_APP_WEATHER_API })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search) {
        setWeatherLoading(true)
        if (data?.location) {
          setWeatherData(data)
          setWeatherLoading(false)
        } else {
          setWeatherData(null)
          setWeatherLoading(false)
        }
      } else {
        setWeatherData(null)
        setWeatherLoading(false)
      }
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [search, data])

  const onChange = (e: any) => setWeatherSearch(e.target.value || '')

  return (
    <>
      <PageHeader title='Weather' />
      <TextField
        value={search}
        label='You can search by zip code, latitude/longitude, or city/state.'
        onChange={onChange}
        style={{ width: '600px' }}
      />
      <Box>
        {loading && (
          <CenteredContent>
            <CircularProgress />
          </CenteredContent>
        )}
        {!loading && !weather && <NoDataContent />}
        {!loading && weather && <WeatherContent weather={weather} />}
      </Box>
    </>
  )
}

const WeatherContent = ({ weather }: any) => {
  const [type, setType] = useState('F')
  const location = weather.location
  const current = weather.current
  const forecastDay = weather.forecast?.forecastday[0]
  const forecastHourly = forecastDay ? forecastDay.hour.filter((f: any) => new Date(f.time) >= new Date()) : null

  return (
    <div className='weather-detail'>
      <HeaderRow location={location} type={type} setType={setType} />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CurrentWeather location={location} current={current} type={type} />
        <Astro astro={forecastDay.astro} />
      </Box>
      {forecastHourly && <HourlyWeather forecastHourly={forecastHourly} type={type} />}
    </div>
  )
}

const HeaderRow = ({ location, type, setType }: any) => (
  <Grid container style={{ paddingTop: '2rem', fontSize: '2rem' }}>
    <Grid item>
      <b>
        {location.name}, {location.region}
      </b>
    </Grid>
    <Grid>
      <span style={{ marginLeft: '3rem' }}>Temp in °{type}</span>
      <Switch
        checked={type === 'F'}
        onChange={(e: any) => {
          setType(e.currentTarget.checked ? 'F' : 'C')
        }}
      />
    </Grid>
  </Grid>
)

const CurrentWeather = ({ location, current, type }: any) => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
          }}
        >
          <StyledTempAvatar>{`${!type || type === 'F' ? current.temp_f : current.temp_c}° ${type}`}</StyledTempAvatar>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <LocationTime location={location} current={current} />
      </Grid>
      <Grid item xs={2}>
        <StyledWeatherBox style={{ paddingTop: '1rem' }}>
          <CenteredContent height={150}>
            <DataItem label='Condition' children={current.condition.text} />
          </CenteredContent>
        </StyledWeatherBox>
      </Grid>
      <Grid item xs={2}>
        <StyledWeatherBox style={{ paddingTop: '1rem' }}>
          <CenteredContent height={150}>
            <DataItem label='Wind' children={`${current.wind_mph} MPH`} />
          </CenteredContent>
        </StyledWeatherBox>
      </Grid>
      <Grid item xs={2}>
        <StyledWeatherBox style={{ paddingTop: '1rem' }}>
          <CenteredContent height={150}>
            <DataItem label='Wind Direction' children={<Chip label={current.wind_dir} />} />
          </CenteredContent>
        </StyledWeatherBox>
      </Grid>
    </Grid>
  </>
)

const LocationTime = ({ location, current }: any) => (
  <>
    <StyledLocationGrid container>
      <Grid item xs={4}>
        <DataItem label='Local Time' children={formatDate(location.localtime, true)} />
      </Grid>
      <Grid item xs={4}>
        <DataItem label='Timezone' children={location.tz_id} />
      </Grid>
    </StyledLocationGrid>
    <StyledLocationGrid container>
      <Grid item xs={4}>
        <DataItem label='Latitude' children={location.lat} />
      </Grid>
      <Grid item xs={4}>
        <DataItem label='Longitude' children={location.lon} />
      </Grid>
    </StyledLocationGrid>
    <StyledLocationGrid container>
      <Grid item xs={4}>
        <DataItem
          label='Cloud Cover'
          children={<StyledLocationLinearProgress variant='determinate' value={current.cloud} />}
        />
      </Grid>
      <Grid item xs={4}>
        <DataItem
          label='Humidity'
          children={<StyledLocationLinearProgress variant='determinate' value={current.humidity} />}
        />
      </Grid>
    </StyledLocationGrid>
  </>
)

const Astro = ({ astro }: any) => (
  <>
    <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
      <Grid item xs={2}>
        <StyledWeatherBox style={{ paddingTop: '1rem' }}>
          <CenteredContent height={150}>
            <DataItem label='Sunrise' children={astro.sunrise} />
          </CenteredContent>
        </StyledWeatherBox>
      </Grid>
      <Grid item xs={2}>
        <StyledWeatherBox style={{ paddingTop: '1rem' }}>
          <CenteredContent height={150}>
            <DataItem label='Sunset' children={astro.sunset} />
          </CenteredContent>
        </StyledWeatherBox>
      </Grid>
      <Grid item xs={2}>
        <StyledWeatherBox style={{ paddingTop: '1rem' }}>
          <CenteredContent height={150}>
            <DataItem label='Moon Phase' children={<MoonPhaseImg phase={astro.moon_phase} />} />
          </CenteredContent>
        </StyledWeatherBox>
      </Grid>
    </Grid>
  </>
)

const HourlyWeather = ({ forecastHourly, type }: any) => (
  <>
    <Grid style={{ paddingTop: '3rem', paddingBottom: '1rem,', fontSize: '1.5rem' }}>
      Hourly Weather for <b>{formatDate()}</b>
    </Grid>
    <StyledHourlyWeather>
      {forecastHourly.map((f: any) => (
        <Box key={f.time_epoch} className='forecast-item'>
          <Box>{formatDate(f.time)}</Box>
          <Box className='pt-050'>
            <img src={f.condition?.icon} alt='' />
          </Box>
          <Box>
            <b>{`${type === 'F' ? f.temp_f : f.temp_c} °${type}`}</b>
          </Box>
          <Box>{f.condition?.text}</Box>
        </Box>
      ))}
    </StyledHourlyWeather>
  </>
)

const MoonPhaseImg = ({ phase }: any) => {
  let img

  switch (phase) {
    case 'Waxing Crescent':
      img = <StyledMoonIcon src={waxingCrescent} alt='' />
      break
    case 'First Quarter':
      img = <StyledMoonIcon src={firstQuarter} alt='' />
      break
    case 'Waxing Gibbous':
      img = <StyledMoonIcon src={waxingGibbous} alt='' />
      break
    case 'Full Moon':
      img = <StyledMoonIcon src={fullMoon} alt='' />
      break
    case 'Waning Gibbous':
      img = <StyledMoonIcon src={waningGibbous} alt='' />
      break
    case 'Last Quarter':
      img = <StyledMoonIcon src={lastQuarter} alt='' />
      break
    case 'Waning Crescent':
      img = <StyledMoonIcon src={waningCrescent} alt='' />
      break
    default:
      img = <StyledMoonIcon src={newMoon} alt='' />
      break
  }

  return img
}
