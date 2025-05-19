import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const DayComponent = ({ label }: { label: string }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        borderRadius: 50,
        borderWidth: 4,
        width: 48,
        height: 48,
        borderColor: theme.colors.textDark,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.grey1,
      }}
    >
      <ThemedText>{label}</ThemedText>
    </View>
  );
};

export default DayComponent;

const styles = StyleSheet.create({});
