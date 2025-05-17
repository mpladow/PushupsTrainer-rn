// all data

import { Exercise } from '@/models/schema/Exercise';
import { ExerciseDay } from '@/models/schema/ExerciseDay';



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
// const dataSlice = createSlice({
// 	name: "exerciseData",
// 	initialState: initialState,
// })