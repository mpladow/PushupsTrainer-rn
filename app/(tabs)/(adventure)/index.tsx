import ExerciseDayListItem from '@/components/Adventure/ExerciseDayListItem/ExerciseDayListItem';
import { ThemedText } from '@/components/ThemedText';
import { useExercisesApi } from '@/data/getAllExercises';
import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { ExerciseRepGoal } from '@/models/schema/ExerciseRepGoal';
import { setExercise } from '@/state/character/exerciseSlice';
import { AppDispatch } from '@/state/character/state';
import { useTheme, useThemeMode } from '@rneui/themed';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Dimensions,
	FlatList,
	Pressable,
	StyleSheet,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const AdventureHome = () => {
  // get all exercises for user-
  const { data, error, loading } = useExercisesApi();

  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const totalCount = (arr: ExerciseRepGoal[]) => {
    let total = 0;
    arr.map((g) => {
      if (g.goalCount) {
        total += g.goalCount;
      }
    });
    return total;
  };
  //   const handleModeToggle = () => {
  //     mode == 'light' ? setMode('dark') : setMode('light');
  //   };

  const handleExerciseDayPress = (exerciseDay: ExerciseDay) => {
    dispatch(setExercise(exerciseDay));
    router.navigate('/(tabs)/(adventure)/pushupsScreen');
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        padding: 8,
      }}
    >
      {loading ? (
        <ThemedText>Loading...</ThemedText>
      ) : (
        <View style={{ height: Dimensions.get('screen').height - 150 }}>
          <FlatList
            data={data}
            contentContainerStyle={{
              backgroundColor: theme.colors.grey1,
              padding: 12,
              borderRadius: 12,
            }}
            ListHeaderComponent={
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                }}
              >
                <ThemedText>Level</ThemedText>
                <ThemedText type="title">{1}</ThemedText>
              </View>
            }
            ItemSeparatorComponent={() => <View style={{ height: 12 }}></View>}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => handleExerciseDayPress(item)}>
                <ExerciseDayListItem
                  leftLabelSubheading={item.day.toString()}
                  centreHeading={totalCount(item.exercises).toString()}
                  exerciseGoals={item.exercises}
                  highlightItem={false}
                />
              </Pressable>
            )}
          />
          <BlurView />
        </View>
      )}
    </SafeAreaView>
  );
};

export default AdventureHome;

const styles = StyleSheet.create({});
