import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="detalle"
        options={{
          title: "Detalle Usuario",
          headerShown: true
        }}
      />

      <Stack.Screen
        name="editar"
        options={{
          title: "Editar Usuario",
          headerShown: true
        }}
      />

    </Stack>
  );
}