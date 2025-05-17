import { Exercise } from '../schema/Exercise';

export interface CharacterDto {
	level: number;
	day: number;
	// exercise specific values
	exerciseProgress: ExerciseProgress[];
	totals: ExerciseTotals[];
}


export interface ExerciseProgress {
	Exercise: Exercise;
	completedAt: Date;
	failedAttempts: number
}

export interface ExerciseTotals {
	Exercise: Exercise;
	totals: number;
}