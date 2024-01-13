import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type Environment = {
  status?: string;
  error?: Error;
  timezone: string;
  locale: string;
  language: string;
  city: string;
  theme: string;
  searchbar: string;
}

const initialState: Environment = {
  status: 'pending',
  error: undefined,
  timezone: "UTC",
  locale: "en-US",
  language: "en",
  city: "US",
  theme: "emerald",
  searchbar: "visible"
}

function fetchLocale(){
  return (navigator.language && navigator.languages[0])
    || navigator.language
    || navigator.languages[0]
    || "en-US"
}

export const environmentController = createSlice({
  name: 'env',
  initialState,
  reducers: {
      // setTheme: (state, action: PayloadAction<themeOption>) => { state.theme = action.payload },
      // setSearchbar: (state, action: PayloadAction<searchbarOption>) => { state.searchbar = action.payload },
      createEnv: (state) => {
          const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
          const locale = fetchLocale()
          const separatorLocale = locale.indexOf('-')
          state.status = 'fulfilled'
          state.timezone = timeZone
          state.locale = locale
          state.language = locale.slice(0, separatorLocale)
          state.city = locale.slice(separatorLocale + 1)
      }
  }
})

export const { 
  createEnv, 
  // setTheme, 
  // setSearchbar 
} = environmentController.actions

export const getTimezone = (state: RootState): string => state.env.timezone
export const getLocale = (state: RootState): string => state.env.locale
export const getLanguage = (state: RootState): string => state.env.language
export const getCity = (state: RootState): string => state.env.city
// export const getTheme = (state: RootState): themeOption => state.env.theme
// export const getSearchbar = (state: RootState): searchbarOption => state.env.searchbar

export const envReducer = environmentController.reducer

