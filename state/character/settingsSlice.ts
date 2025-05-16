import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		darkMode: true,
	},
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
		}
	}
})

// below creates the actions for each case reducer function

export const { toggleDarkMode } = settingsSlice.actions;
// below creates the reducer for the slice
export default settingsSlice.reducer;