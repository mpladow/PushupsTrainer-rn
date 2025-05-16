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
	initialState: {
		level: 0,
		stat1Level: 0,
		stat1ExpCurrent: 0,
		stat2Level: 0,
		stat2ExpCurrent: 0,
		stat3Level: 0,
		steps: 0,
	},