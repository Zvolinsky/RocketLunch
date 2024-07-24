import { View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";

const Clock = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text variant="bodySmall">
        Masz jeszcze trochę czasu, aby złożyć zamówienie
      </Text>
      <Text variant="titleLarge">1h 30min 45s</Text>
    </View>
  );
};

export default Clock;
