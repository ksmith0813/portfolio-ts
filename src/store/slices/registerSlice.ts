import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export type ContactProps = {
  firstName: string
  lastName: string
  address: string
  apt: string
  city: string
  state: string
  zip: string
  email: string
  phone: string
  errors: string[]
}

export type MovieProps = {
  favoriteMovie: string
  favoriteGenres: string[]
  errors: string[]
}

export type MusicProps = {
  favoriteBand: string
  favoriteSong: string
  instruments: string[]
  soundCloud: string
  errors: string[]
}

export type TravelProps = {
  favoriteCountries: string[]
  favoriteCity: string
  placesVisited: string[]
  errors: string[]
}

export type RegisterProps = {
  step: number
  complete: boolean
  contact: ContactProps
  movie: MovieProps
  music: MusicProps
  travel: TravelProps
}

const defaultContact: ContactProps = {
  firstName: '',
  lastName: '',
  address: '',
  apt: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
  errors: [],
}

const defaultMovie: MovieProps = {
  favoriteMovie: '',
  favoriteGenres: [],
  errors: [],
}

const defaultMusic: MusicProps = {
  favoriteBand: '',
  favoriteSong: '',
  instruments: [],
  soundCloud: '',
  errors: [],
}

const defaultTravel: TravelProps = {
  favoriteCountries: [],
  favoriteCity: '',
  placesVisited: [],
  errors: [],
}

const initialState = {
  step: 0,
  complete: false,
  contact: defaultContact,
  movie: defaultMovie,
  music: defaultMusic,
  travel: defaultTravel,
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setContact: (state: RegisterProps, action: PayloadAction<ContactProps>) => {
      state.contact = action.payload
    },
    setMovie: (state: RegisterProps, action: PayloadAction<MovieProps>) => {
      state.movie = action.payload
    },
    setMusic: (state: RegisterProps, action: PayloadAction<MusicProps>) => {
      state.music = action.payload
    },
    setTravel: (state: RegisterProps, action: PayloadAction<TravelProps>) => {
      state.travel = action.payload
    },
    reset: (state: RegisterProps) => {
      switch (state.step) {
        case 1:
          state.movie = defaultMovie
          break
        case 2:
          state.music = defaultMusic
          break
        case 3:
          state.travel = defaultTravel
          break
        default:
          state.contact = defaultContact
          break
      }
    },
    resetAll: () => initialState,
    previousStep: (state) => {
      state.step = state.step - 1
    },
    nextStep: (state: RegisterProps) => {
      if (validateFormUpdate(state)) {
        state.step = state.step + 1
      }
    },
    complete: (state: RegisterProps) => {
      state.complete = true
    },
  },
})

export const { setContact, setMovie, setMusic, setTravel, reset, resetAll, previousStep, nextStep, complete } =
  registerSlice.actions

export const registerSelector = (state: RootState) => state.persistedReducer.register

export default registerSlice.reducer

export const ERRORS: any = {
  firstName: 'First name is required',
  lastName: 'Last name is required',
  address: 'Address is required',
  city: 'City is required',
  state: 'State is required',
  zip: 'Zip is required',
  email: 'Email is required',
  phone: 'Phone is required',
}

const validateFormUpdate = (state: RegisterProps) => {
  let isValid = true
  switch (state.step) {
    case 1:
      isValid = validateMovieUpdate(state.movie)
      break
    case 2:
      isValid = validateMusicUpdate(state.music)
      break
    case 3:
      isValid = validateTravelUpdate(state.travel)
      break
    default:
      isValid = validateContactUpdate(state.contact) || false
      break
  }

  return isValid
}

const validateContactUpdate = (contact: ContactProps) => {
  contact.errors = []

  handleError(contact, 'firstName')
  handleError(contact, 'lastName')
  handleError(contact, 'address')
  handleError(contact, 'city')
  handleError(contact, 'state')
  handleError(contact, 'zip')
  handleError(contact, 'email')
  handleError(contact, 'phone')

  // Zip pattern={/(^\d{5}$)|(^\d{5}-\d{4}$)/}
  // Email pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
  // Phone pattern={/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/}

  return !contact.errors.length
}

const validateMovieUpdate = (state: MovieProps) => {
  let copy = { ...state }
  copy.errors = []
  return !copy.errors.length
}

const validateMusicUpdate = (state: MusicProps) => {
  let copy = { ...state }
  copy.errors = []
  return !copy.errors.length
}

const validateTravelUpdate = (state: TravelProps) => {
  let copy = { ...state }
  copy.errors = []
  return !copy.errors.length
}

const handleError = (state: any, property: string) => {
  if (!state[property]) {
    state.errors.push(ERRORS[property])
  }
}
