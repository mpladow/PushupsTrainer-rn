import { ThemedText } from '@/components/ThemedText';
import { useExercisesApi } from '@/data/getAllExercises';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const AdventureHome = () => {
  // get all exercises for user-
  const { data, error, loading } = useExercisesApi();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View>
            <ThemedText>{item.level}</ThemedText>
          </View>
        )}
      />
      <ThemedText>Training</ThemedText>
      <Text>Adventure</Text>
    </View>
  );
};

export default AdventureHome;

const styles = StyleSheet.create({});
