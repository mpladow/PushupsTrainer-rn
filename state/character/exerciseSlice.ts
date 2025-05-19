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
	name: 'exerciseSlice',
	initialState: initialSlice,
	reducers: {
		setExercise: (state, action: PayloadAction<ExerciseDay>) => {
			state.exercise = action.payload;
		},
	}
})

export const { setExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;