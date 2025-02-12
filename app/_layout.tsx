import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" translucent={true} />
      <Stack
        screenOptions={{
          headerTitle: "Betalectic", // Set the header title to "Betalectic"
          headerShown: false, // Hide the header
        }}
      />
    </>
  );
}
