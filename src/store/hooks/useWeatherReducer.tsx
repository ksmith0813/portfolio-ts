import { useAppDispatch, useAppSelector } from './hooks'
import { setLoading, setSearch, setWeather, weatherSelector } from 'store/slices/weatherSlice'

export const useWeatherReducer = () => {
  const dispatch = useAppDispatch()

  const weatherState = useAppSelector(weatherSelector)

  const setWeatherSearch = (search: string) => dispatch(setSearch(search))

  const setWeatherLoading = (loading: boolean) => dispatch(setLoading(loading))

  const setWeatherData = (data: any) => dispatch(setWeather(data))

  return {
    weatherState,
    setWeatherLoading,
    setWeatherSearch,
    setWeatherData,
  }
}
