import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import { store } from '@/state/character/state';
import { Colors } from '@/theme/Colors';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const theme = createTheme({
    lightColors: {
      primary: '#33658A',
      secondary: '#331E36',
      background: '#ffffff',
      black: '#000000',
      white: '#ffffff',
      grey0: '#D3D3D3',
      grey1: '##878787',
      grey2: '##363636',
      greyOutline: '#878787',
      searchBg: '#D3D3D3',
      success: '#758E4F',
      warning: '#F6AE2D',
      error: '#F26419',
      textLight: '#ffffff',
      textDark: '#000000',
    } as Colors,
    darkColors: {
      primary: '#33658A',
      secondary: '#331E36',
      background: '#363636',
      black: '#000000',
      white: '#161111',
      grey0: '#adadad',
      grey1: '#616161',
      grey2: '#1d1d1d',
      greyOutline: '#878787',
      searchBg: '#D3D3D3',
      success: '#758E4F',
      warning: '#F6AE2D',
      error: '#F26419',
      textLight: '#000000',
      textDark: '#ffffff',
    },
    mode: 'dark',
  });

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
