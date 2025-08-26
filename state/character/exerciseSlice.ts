// handles progress during an active exercise 

import { ExerciseDay } from '@/models/schema/ExerciseDay'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExerciseSliceType {
	exercise?: ExerciseDay
}
const initialSlice: ExerciseSliceType = {
	exercise: undefined
}

const exerciseSlice = createSlice({
	name: 'exercisesSlice',
	initialState: initialSlice,
	reducers: {
		// sets the current exercise for the user to do for the day
		setExercise: (state, action: PayloadAction<ExerciseDay>) => {
			state.exercise = action.payload;
		},
	}
})

export const { setExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;