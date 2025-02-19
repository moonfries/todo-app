import { Stack } from "expo-router"
import React from "react"

export default () => {

    return (
        <Stack initialRouteName='index'>
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }}  />
          <Stack.Screen name="register" options={{ headerShown: false }} />
        </Stack>
  );
}