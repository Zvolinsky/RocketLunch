import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import restaurantsData from "@/constants/restaurantsData";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
  return (
    <View style={{ gap: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Text variant="titleLarge">Lista cateringów</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={restaurantsData}
        renderItem={({ item }) => <RestaurantCard content={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default RestaurantsList;
