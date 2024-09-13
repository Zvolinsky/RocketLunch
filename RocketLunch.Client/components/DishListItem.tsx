import { ScrollView, View, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import React from "react";
import Sheet from "@/components/Sheet";
import restaurantsData from "@/constants/restaurantsData";
import dishesData from "@/constants/dishesData";
import { useOrder } from "@/store/useOrder";
import Entypo from "@expo/vector-icons/Entypo";

const DishListItem = ({ content, navigateToDish }) => {
  const { addOrder } = useOrder();
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "blue",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text variant="headlineSmall" style={{ color: "blue" }}>
          {content.name}
        </Text>
        <Text variant="titleLarge">
          {new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN",
          }).format(content.price)}
        </Text>
        <Text variant="titleSmall">{content.description}</Text>
      </View>
      <View>
        <Button onPress={() => addOrder(content.id)}>
          <Entypo name="plus" size={23} />
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default DishListItem;
