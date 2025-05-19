import { Exercise } from '@/models/schema/Exercise';
import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { ExerciseRepGoal } from '@/models/schema/ExerciseRepGoal';
import { useEffect, useState } from 'react';


export const exercise: Exercise = {
	exerciseId: 1,
	name: 'Pushups'
}
export const exerciseRepGoal8: ExerciseRepGoal = {
	exercise: exercise,
	goalCount: 8
}
export const exerciseRepGoal7: ExerciseRepGoal = {
	exercise: exercise,
	goalCount: 7
}
export const exerciseRepGoal9: ExerciseRepGoal = {
	exercise: exercise,
	goalCount: 9
}
export const exerciseRepGoal4: ExerciseRepGoal = {
	exercise: exercise,
	goalCount: 14
}
export const exerciseRepGoal5: ExerciseRepGoal = {
	exercise: exercise,
	goalCount: 15
}
export const exerciseGoal1: ExerciseDay = {
	exerciseId: '',
	level: 0,
	day: 0,
	exercises: [
		exerciseRepGoal8, exerciseRepGoal7, exerciseRepGoal9, exerciseRepGoal4, exerciseRepGoal5
	]
}
export const exerciseGoal2: ExerciseDay = {
	exerciseId: '',
	level: 0,
	day: 1,
	exercises: [
		exerciseRepGoal7, exerciseRepGoal8, exerciseRepGoal8, exerciseRepGoal4, exerciseRepGoal5

	]
}
export const getAllExercises = async () => {
	return new Promise<ExerciseDay[]>((resolve, reject) => {
		setTimeout(() => {
			resolve([exerciseGoal1, exerciseGoal2])
		}, 0)
	});
}

// this mocks an api call that will generate the user's exercises
export const useExercisesApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>()
	const [data, setData] = useState<ExerciseDay[]>()
	useEffect(() => {
		getInitialData();
	}, [])

	const getInitialData = async () => {
		setLoading(true);
		const result = getAllExercises().then((res) => {
			setData(res)

		}).catch((err) => {
			setError(err)

		}).finally(() => {
			setLoading(false)

		})
	}

	return { data, error, loading, getAllExercises }
}