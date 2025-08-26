import { ExerciseRepGoal } from "./ExerciseRepGoal";
export interface ExerciseDay {
	exerciseId: string;
	level: number;
	day: number;
	exercises: ExerciseRepGoal[];
};

export interface ExercisePlan {
	exercisePlanId: string;
	exerciseDays: ExerciseDay[];
}