import { CharacterDto } from '@/models/dtos/CharacterDto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IncrementExercise = {
	exerciseId: number;
	value: number
}

const initialState: CharacterDto = {
	level: 0,
	day: 0,
	exerciseProgress: [],
	totals: []
}

const recordSlice = createSlice({
	name: 'records',
	initialState: initialState,
	reducers: {
		setInitialValue: (state, { payload }: PayloadAction<CharacterDto>) => {
			return payload
		},
		addToExercise: (state, { payload }: PayloadAction<IncrementExercise>) => {
			const totalToUpdate = state.totals.find(t => t.Exercise.exerciseId == payload.exerciseId);
			if (totalToUpdate) {
				totalToUpdate.totals += payload.value;
			}
		},
		completeExercise: (state, { payload }: PayloadAction<number>) => {
			const exerciseProgressToUpdate = state.exerciseProgress.find(e => e.Exercise.exerciseId == payload)
			if (exerciseProgressToUpdate) {
				exerciseProgressToUpdate.completedAt = new Date();
			}
		}
	}
})
export const { } = recordSlice.actions;

export default recordSlice.reducer