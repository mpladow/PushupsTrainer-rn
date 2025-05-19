import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const exerciseApi = createApi({
	reducerPath: 'exerciseApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://noEndpoint/api/v2/' }),
	endpoints: (build) => ({
		getAllExercises: build.query<any, string>({
			query: () => `exercises/get`,
			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response: { data: ExerciseDay[] }, meta, arg) => response.data,
		})
	})
})