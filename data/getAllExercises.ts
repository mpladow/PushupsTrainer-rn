import { Exercise } from '@/models/schema/Exercise';
import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { ExerciseRepGoal } from '@/models/schema/ExerciseRepGoal';
import { useEffect, useState } from 'react';
import { ExercisePlan, getAllExercises } from './helpers/exerciseHelpers';


export const pushupsExercise: Exercise = {
	exerciseId: 1,
	name: 'Pushups'
}
export const exerciseRepGoal3: ExerciseRepGoal = {
	exercise: pushupsExercise,
	goalCount: 3,
}
export const exerciseRepGoal4: ExerciseRepGoal = {
	exercise: pushupsExercise,
	goalCount: 4,
}
export const exerciseRepGoa7: ExerciseRepGoal = {
	exercise: pushupsExercise,
	goalCount: 7,

}

export const exerciseGoal1: ExerciseDay = {
	exerciseId: '',
	level: 0,
	day: 0,
	exercises: [
		exerciseRepGoal4, exerciseRepGoa7
	]
}
export const exerciseGoal2: ExerciseDay = {
	exerciseId: '',
	level: 0,
	day: 1,
	exercises: [
		exerciseRepGoa7, exerciseRepGoa7, exerciseRepGoal4, exerciseRepGoa7

	]
}





// this mocks an api call that will generate the user's exercises
export const useExercisesApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>()
	const [data, setData] = useState<ExercisePlan[]>()
	useEffect(() => {
		getInitialData();
	}, [])

	const getInitialData = async () => {
		setLoading(true);
		getAllExercises().then((res) => {
			console.log("🚀 ~ getAllExercises ~ res:", res)
			setData(res)

		}).catch((err) => {
			console.log("🚀 ~ getAllExercises ~ err:", err)
			setError(err)

		}).finally(() => {
			setLoading(false)

		})
	}

	return { data, error, loading, getAllExercises }
}