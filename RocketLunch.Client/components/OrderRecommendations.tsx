import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import dishesData from "@/constants/dishesData";
import OrderCard from "./OrderCard";

const OrderRecommendations = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Text variant="titleMedium">Zamów to, co znajomi</Text>
        <Text variant="titleSmall">Więcej...</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dishesData}
        renderItem={({ item }) => <OrderCard />}
      />
    </View>
  );
};

export default OrderRecommendations;
