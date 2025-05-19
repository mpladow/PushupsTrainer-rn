import { StyleSheet, Text, type TextProps } from 'react-native';

import { useTheme } from '@rneui/themed';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  inverted?: boolean;
  type?:
    | 'micro'
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  inverted,
  ...rest
}: ThemedTextProps) {
  //   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const { theme } = useTheme();
  return (
    <Text
      style={[
        { color: inverted ? theme.colors.textLight : theme.colors.textDark },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'micro' ? styles.microText : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  microText: {
    fontSize: 12,
    lineHeight: 24,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
