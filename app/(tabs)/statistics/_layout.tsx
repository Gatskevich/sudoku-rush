import { Stack, Tabs } from 'expo-router';
import React from 'react';

export default function StatisticsLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
