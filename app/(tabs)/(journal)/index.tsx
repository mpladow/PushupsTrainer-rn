import ExerciseDayListItem from '@/components/Journal/ExerciseDayListItem/ExerciseDayListItem';
import { ThemedText } from '@/components/ThemedText';
import { useExercisesApi } from '@/data/getAllExercises';
import { ExerciseDay } from '@/models/schema/ExerciseDay';
import { ExerciseRepGoal } from '@/models/schema/ExerciseRepGoal';
import { setExercise } from '@/state/character/exerciseSlice';
import { AppDispatch } from '@/state/character/state';
import { useTheme } from '@rneui/themed';
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

const JournalHome = () => {
  // get all exercises for user-
  const { data, error, loading } = useExercisesApi();

  const { theme } = useTheme();
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
      <View style={{ height: Dimensions.get('screen').height - 150 }}>
        {loading ? (
          <ThemedText>Loading...</ThemedText>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <FlatList
                  data={item.data}
                  ItemSeparatorComponent={() => (
                    <View style={{ height: 12 }}></View>
                  )}
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
                      <ThemedText type="title">{item.title}</ThemedText>
                    </View>
                  }
                  renderItem={({ item }) => (
                    <Pressable
                      key={item.day}
                      onPress={() => handleExerciseDayPress(item)}
                    >
                      <ExerciseDayListItem
                        leftLabelSubheading={item.day.toString()}
                        centreHeading={totalCount(item.exercises).toString()}
                        exerciseGoals={item.exercises}
                        highlightItem={false}
                      />
                    </Pressable>
                  )}
                />
              </View>
            )}
          />
        )}
        <BlurView />
      </View>
    </SafeAreaView>
  );
};

export default JournalHome;

const styles = StyleSheet.create({});
