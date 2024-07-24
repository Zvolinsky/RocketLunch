import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import restaurantsData from "@/constants/restaurantsData";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
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
        showsHorizontalScrollIndicator={false}
        data={restaurantsData}
        renderItem={({ item }) => <RestaurantCard content={item} />}
      />
    </View>
  );
};

export default RestaurantsList;
