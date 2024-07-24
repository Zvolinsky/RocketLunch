import { View } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import React from "react";
import Clock from "@/components/Clock";
import OrderRecommendations from "@/components/OrderRecommendations";
import RestaurantsList from "@/components/RestaurantsList";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View style={{ padding: 30 }}>
        <Text variant="displaySmall">Cześć, Imie</Text>
        <Text variant="bodyLarge">
          Życzymy Ci{" "}
          <Text style={{ color: colors.primary }}>smacznego jedzonka! :)</Text>
        </Text>
        <Clock />
        <RestaurantsList />
      </View>
    </ScrollView>
  );
};

export default Home;
