import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const AdventureStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};
export default AdventureStackLayout;

const styles = StyleSheet.create({});
