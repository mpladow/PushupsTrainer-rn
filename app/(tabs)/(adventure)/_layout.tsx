import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const AdventureStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="pushupsScreen"
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack>
  );
};
export default AdventureStackLayout;

const styles = StyleSheet.create({});
