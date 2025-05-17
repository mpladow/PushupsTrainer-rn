import { PlayerCharacter } from '@/models/playerCharacter';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PlayerCharacter = {
	playerCharacterId: 0,
	level: 0,
	stat1Level: 0,
	stat1ExpCurrent: 0,
	stat2Level: 0,
	stat2ExpCurrent: 0,
	stat3Level: 0,
	steps: 0,

}

const characterSlice = createSlice({
	name: 'character',
	initialState: initialState,
	reducers: {
		setLevel: (state, action) => {
			state.level = action.payload;
		},
		setStat1Level: (state, action) => {
			state.stat1Level = action.payload;
		},
		setStat1ExpCurrent: (state, action) => {
			state.stat1ExpCurrent = action.payload;
		},
		setStat2Level: (state, action) => {
			state.stat2Level = action.payload;
		},
		setStat2ExpCurrent: (state, action) => {
			state.stat2ExpCurrent = action.payload;
		},
		setStat3Level: (state, action) => {
			state.stat3Level = action.payload;
		},
		setSteps: (state, action) => {
			state.steps = action.payload;
		},
	}
})

export const { setLevel, setStat1Level, setStat1ExpCurrent, setStat2Level, setStat2ExpCurrent, setStat3Level, setSteps } = characterSlice.actions;

export default characterSlice.reducer;