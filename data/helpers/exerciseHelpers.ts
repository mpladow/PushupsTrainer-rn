import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { ExerciseRepGoal } from '@/models/schema/ExerciseRepGoal';
import _ from 'lodash';
import { pushupsExercise } from '../getAllExercises';

export type ExercisePlan = {
	title: string;
	data: ExerciseDay[];
}

const getExercisesByDifficultyLevel = async (level: number, day: number, initialStart: number = 14) => {
	// lowest number of exercises = 10
	// this number can increase and decrease to make exercises more or less difficult
	const MAX_DIVIDER = 4;
	const MIN_DIVIDER = 6;

	const MAX_NUMBERS = 5;

	let newGoals: number[] = [];

	/// pick random 5 numbers within the range. then shuffle them.
	// if total is between 10-20, then the max number will be 4 and the min wil be 2.
	let max = initialStart / MAX_DIVIDER
	const maxFloor = Math.floor(max);
	const min = initialStart / MIN_DIVIDER
	const minFloor = Math.floor(min);

	// if the total is between 20-30, then the max will be 6 (increment by 2) and the min will be 3.

	for (let index = 0; index < 5; index++) {
		const number = Math.floor(getRandomNumberBetweenRange(minFloor, maxFloor));
		newGoals.push(number)
	}
	return shuffleArray(newGoals);

	// most exercises per day: 200
	// as user levels up, we add 3 pushups
}

const createExerciseGoalArray = async (level: number, initialStart: number, incrementer: number, totalExercisesForLevel: number) => {
	const exercisePlan: ExerciseDay[] = []

	for (let index = 1; index <= totalExercisesForLevel; index++) {
		const data: ExerciseDay = {
			exerciseId: Math.random() + Math.random().toString(),
			level: level,
			day: index,
			exercises: []
		}
		const increment = initialStart + index + incrementer
		const exercises = await getExercisesByDifficultyLevel(1, index, increment)
		const exerciseRepGoals = exercises.map(x => {
			const exerciseGoal: ExerciseRepGoal = {
				exercise: pushupsExercise,
				goalCount: x
			}
			return exerciseGoal;
		})
		data.exercises = exerciseRepGoals;
		exercisePlan.push(data);
	}
	return exercisePlan;
}


export const createExercisePlan = async () => {
	const INITIAL_START = 14;
	const INCREMENTER_FOR_EXERCISES_ON_DAY = 2 // increasing this will increase the pushups
	const INCREMENT_FOR_EXERCISES_IN_LEVEL = 1;
	const NO_OF_EXERCISES_IN_LEVEL = 5;
	const LEVELS = 10;
	const unsortedExercisePlan: ExerciseDay[] = [];
	for (let i = 0; i < LEVELS; i++) {
		const exercisePlan = await createExerciseGoalArray(i, INITIAL_START * (i + 1), INCREMENTER_FOR_EXERCISES_ON_DAY, NO_OF_EXERCISES_IN_LEVEL + INCREMENT_FOR_EXERCISES_IN_LEVEL)
		unsortedExercisePlan.push(...exercisePlan);
	}
	const sorted = _.groupBy(unsortedExercisePlan, 'level');
	const sortedSections = Object.keys(sorted).map(level => ({
		title: level,
		data: sorted[level] as ExerciseDay[]
	}))

	return sortedSections as ExercisePlan[];
}



const shuffleArray = (array: number[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const getRandomNumberBetweenRange = (min: number, max: number) => {
	return Math.random() * (max - min) + min
}
export const getAllExercises = async () => {
	return new Promise<ExercisePlan[]>(async (resolve, reject) => {
		const exercisePlan = await createExercisePlan()
		console.log("🚀 ~ createExercisePlan:", exercisePlan)
		setTimeout(() => {
			resolve(exercisePlan)
		}, 0)
	});
}