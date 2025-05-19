import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const ProgressCounter = ({ count }: { count: number }) => {
  return (
    <View>
      <ThemedText style={{ fontSize: 80 }} type="defaultSemiBold">
        {count}
      </ThemedText>
    </View>
  );
};

export default ProgressCounter;

const styles = StyleSheet.create({});
