import { useAppDispatch, useAppSelector } from './hooks'
import {
  ContactProps,
  MovieProps,
  MusicProps,
  RegisterProps,
  TravelProps,
  complete,
  nextStep,
  previousStep,
  registerSelector,
  reset,
  resetAll,
  setContact,
  setMovie,
  setMusic,
  setTravel,
} from 'store/slices/registerSlice'

export const useRegisterReducer = () => {
  const dispatch = useAppDispatch()

  const registerState: RegisterProps = useAppSelector(registerSelector)

  const setRegisterContact = (contact: ContactProps) => dispatch(setContact(contact))

  const setRegisterMovie = (movie: MovieProps) => dispatch(setMovie(movie))

  const setRegisterMusic = (music: MusicProps) => dispatch(setMusic(music))

  const setRegisterTravel = (travel: TravelProps) => dispatch(setTravel(travel))

  const resetRegisterStep = () => dispatch(reset())

  const resetRegistration = () => dispatch(resetAll())

  const previousRegisterStep = () => dispatch(previousStep())

  const nextRegisterStep = (step: any) => dispatch(nextStep(step))

  const completeRegistration = () => dispatch(complete())

  return {
    registerState,
    setRegisterContact,
    setRegisterMovie,
    setRegisterMusic,
    setRegisterTravel,
    resetRegisterStep,
    resetRegistration,
    previousRegisterStep,
    nextRegisterStep,
    completeRegistration,
  }
}
