import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const CharacterStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Adventure" options={{ headerShown: false }} />
    </Stack>
  );
};

export default CharacterStackLayout;

const styles = StyleSheet.create({});
