// Can be removed if don't want to use the layout

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Betalectic",
      }}
    />
  );
}