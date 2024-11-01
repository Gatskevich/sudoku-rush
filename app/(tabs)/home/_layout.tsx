import { Stack, Tabs } from 'expo-router';
import React from 'react';

export default function HomeLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="play" options={{ title: 'Play', headerShown: false }}/>
    </Stack>
  );
}
