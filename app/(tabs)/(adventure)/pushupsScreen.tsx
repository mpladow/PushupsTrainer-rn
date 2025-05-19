import ProgressCounter from '@/components/Adventure/pushupsScreen/ProgressCounter';
import { ThemedText } from '@/components/ThemedText';
import { RootState } from '@/state/character/state';
import { Icon, useTheme } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const pushupsScreen = () => {
  const router = useRouter();
  const { theme } = useTheme();

  // redux
  const exercise = useSelector((state: RootState) => {
    return state.exerciseReducer.exercise;
  });
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [countdownTimer, setCountdownTimer] = useState(3);
  const [isResting, setIsResting] = useState(false);

  const [countDisplay, setCountDisplay] = useState(0);

  useEffect(() => {
    if (exercise?.exercises && exercise?.exercises.length > 0) {
      setCountDisplay(exercise.exercises[0].goalCount);
    }
  }, []);

  useEffect(() => {}, []);
  const handleBackPress = () => {
    router.replace('/(tabs)/(adventure)');
  };

  // set timer to count down before exercise starts
  useEffect(() => {
    const updateElapsedTime = () => {
      setCountdownTimer((old) => old - 1);
    };
    let interval: number;
    if (countdownTimer > 0) {
      interval = setInterval(updateElapsedTime, 1000);
    }
    return () => clearInterval(interval);
  }, [countdownTimer]);

  const handleProgressCount = () => {
    setCountDisplay((old) => old - 1);
  };
  // when count reaches 0, IF there is another exercise, move to the next one
  useEffect(() => {
    if (countDisplay == 0) {
      // check for next exercise
      if (
        exercise?.exercises &&
        currentExerciseIndex >= exercise?.exercises?.length - 1
      ) {
        // navigate to completion screen
      } else {
        // set the next exercise
        setCurrentExerciseIndex((old) => old + 1);
        setIsResting(true);
        setCountdownTimer(10);
      }
    }
  }, [countDisplay]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ flexDirection: 'row', flex: 1, padding: 12 }}>
          <Icon
            name="chevron-left"
            type="font-awesome-5"
            onPress={handleBackPress}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 16,
          }}
        >
          <FlatList
            horizontal
            data={exercise?.exercises.map((x) => x.goalCount)}
            ItemSeparatorComponent={() => <View style={{ width: 12 }}></View>}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={[
                    {
                      backgroundColor: theme.colors.grey0,
                      width: 28,
                      height: 28,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    index == currentExerciseIndex && {
                      backgroundColor: theme.colors.primary,
                    },
                  ]}
                  key={index}
                >
                  <ThemedText>{item}</ThemedText>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.primary,
        }}
      >
        {countdownTimer == 0 ? (
          <Pressable onPress={handleProgressCount}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ marginBottom: 16 }}>
                <ThemedText>Lets go!</ThemedText>
              </View>
              <ProgressCounter count={countDisplay} />
            </View>
          </Pressable>
        ) : (
          <View>
            {isResting && (
              <View style={{ alignItems: 'center' }}>
                <View style={{ marginBottom: 16 }}>
                  <ThemedText>Resting</ThemedText>
                </View>
              </View>
            )}
            <ProgressCounter count={countdownTimer} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default pushupsScreen;

const styles = StyleSheet.create({});
