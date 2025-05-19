import { ExerciseRepGoal } from '@/models/schema/ExerciseRepGoal';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ThemedText } from '../../ThemedText';
import DayComponent from './DayComponent';

type ExerciseDayListItemProps = {
  leftLabelSubheading: string;
  centreHeading: string;
  exerciseGoals: ExerciseRepGoal[];
  highlightItem: boolean;
};
const ExerciseDayListItem = ({
  leftLabelSubheading,
  centreHeading,
  exerciseGoals,
  highlightItem,
}: ExerciseDayListItemProps) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <DayComponent label={leftLabelSubheading} />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginLeft: -20,
          zIndex: -1,
          paddingLeft: 32,
          backgroundColor: theme.colors.grey2,
        }}
      >
        <View>
          <ThemedText type="micro">Total {centreHeading}</ThemedText>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FlatList
            horizontal
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View>
                <ThemedText> - </ThemedText>
              </View>
            )}
            data={exerciseGoals}
            renderItem={({ item, index }) => (
              <View style={{}}>
                <ThemedText>{item.goalCount}</ThemedText>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ExerciseDayListItem;

const styles = StyleSheet.create({});
