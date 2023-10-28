import { useAppDispatch, useAppSelector } from './hooks'
import {
  ContactProps,
  MovieProps,
  MusicProps,
  RegisterProps,
  TravelProps,
  complete,
  previousStep,
  registerSelector,
  reset,
  setClean,
  setContact,
  setMovie,
  setMusic,
  setTravel,
} from 'store/slices/registerSlice'

export const useCatReducer = () => {
  const dispatch = useAppDispatch()

  const registerState: RegisterProps = useAppSelector(registerSelector)

  const setRegisterClean = (clean: boolean) => dispatch(setClean(clean))

  const setRegisterContact = (contact: ContactProps) => dispatch(setContact(contact))

  const setRegisterMovie = (movie: MovieProps) => dispatch(setMovie(movie))

  const setRegisterMusic = (music: MusicProps) => dispatch(setMusic(music))

  const setRegisterTravel = (travel: TravelProps) => dispatch(setTravel(travel))

  const resetRegisterStep = () => dispatch(reset())

  const previousRegisterStep = () => dispatch(previousStep())

  const completeRegistration = () => dispatch(complete())

  return {
    registerState,
    setRegisterClean,
    setRegisterContact,
    setRegisterMovie,
    setRegisterMusic,
    setRegisterTravel,
    resetRegisterStep,
    previousRegisterStep,
    completeRegistration,
  }
}
