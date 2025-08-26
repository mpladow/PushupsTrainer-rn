import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet } from 'react-native';

const ProgressCounter = ({ count }: { count: number }) => {
  return (
    <ThemedText
      style={{ fontSize: 80, lineHeight: 120 }}
      type="defaultSemiBold"
    >
      {count}
    </ThemedText>
  );
};

export default ProgressCounter;

const styles = StyleSheet.create({});
