// all data

import { Exercise } from '@/models/schema/Exercise';
import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface ExerciseData {
	loading: boolean;
	exercises: Exercise[] // all exercises enabled for this user
	exerciseDays: ExerciseDay[] // lsit of all exercise days assigned to the player
}

const initialState: ExerciseData = {
	loading: false,
	exercises: [],
	exerciseDays: []
}

const dataSlice = createSlice({
	name: "exerciseData",
	initialState: initialState,
	reducers: {
		setExercises: (state, action) => {
			state.exercises = action.payload;
		},
		setExerciseDays: (state, action) => {
			state.exerciseDays = action.payload;
		},
		updateExerciseDay: (state, action: PayloadAction<ExerciseDay>) => {
			const index = state.exerciseDays.findIndex(ed => ed.day === action.payload.day && ed.level == action.payload.level);
			if (index !== -1) {
				state.exerciseDays[index] = action.payload;
			}
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		}
	}
})

export const { setExercises, setExerciseDays, updateExerciseDay, setLoading } = dataSlice.actions;
export default dataSlice.reducer;