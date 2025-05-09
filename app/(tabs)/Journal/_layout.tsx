import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const JournalStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default JournalStackLayout;

const styles = StyleSheet.create({});
