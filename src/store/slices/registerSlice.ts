import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export interface ContactProps {
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

export interface MovieProps {
  favoriteMovie: string
  favoriteGenres: string[]
  errors: string[]
}

export interface MusicProps {
  favoriteBand: string
  favoriteSong: string
  instruments: string[]
  soundCloud: string
  errors: string[]
}

export interface TravelProps {
  favoriteCountries: string[]
  favoriteCity: string
  placesVisited: string[]
  errors: string[]
}

export interface RegisterProps {
  step: number
  clean: boolean
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

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    step: 0,
    clean: true,
    contact: defaultContact,
    movie: defaultMovie,
    music: defaultMusic,
    travel: defaultTravel,
  },
  reducers: {
    setClean: (state, action: PayloadAction<boolean>) => {
      state.clean = action.payload
    },
    setContact: (state, action: PayloadAction<ContactProps>) => {
      state.contact = action.payload
    },
    setMovie: (state, action: PayloadAction<MovieProps>) => {
      state.movie = action.payload
    },
    setMusic: (state, action: PayloadAction<MusicProps>) => {
      state.music = action.payload
    },
    setTravel: (state, action: PayloadAction<TravelProps>) => {
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
      state.clean = true
    },
    previousStep: (state) => {
      state.step = state.step - 1
      state.clean = true
    },
    nextStep: (state, action: PayloadAction<any>) => {
      if (validateFormUpdate(state, action.payload)) {
        state.step = state.step + 1
        state.clean = true
      }
    },
    complete: () => alert('Your information has been successfully submitted!'),
  },
})

export const { setClean, setContact, setMovie, setMusic, setTravel, reset, previousStep, nextStep, complete } =
  registerSlice.actions

export const registerSelector = (state: RootState) => state.registerReducer

export default registerSlice.reducer

const validateFormUpdate = (state: any, payload: any) => {
  let isValid = true
  switch (state.step) {
    case 1:
      isValid = validateMovieUpdate(payload)
      break
    case 2:
      isValid = validateMusicUpdate(payload)
      break
    case 3:
      isValid = validateTravelUpdate(payload)
      break
    default:
      isValid = validateContactUpdate(payload)
      break
  }

  return isValid
}

const validateContactUpdate = (payload: ContactProps) => {
  let copy = { ...payload }
  copy.errors = []
  return !copy.errors.length
}

const validateMovieUpdate = (payload: MovieProps) => {
  let copy = { ...payload }
  copy.errors = []
  return !copy.errors.length
}

const validateMusicUpdate = (payload: MusicProps) => {
  let copy = { ...payload }
  copy.errors = []
  return !copy.errors.length
}

const validateTravelUpdate = (payload: TravelProps) => {
  let copy = { ...payload }
  copy.errors = []
  return !copy.errors.length
}