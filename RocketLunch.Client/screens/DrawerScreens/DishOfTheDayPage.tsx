import { ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import React from "react";
import Sheet from "@/components/Sheet";
import restaurantsData from "@/constants/restaurantsData";
import dishesData from "@/constants/dishesData";
import { useOrder } from "@/store/useOrder";
import Entypo from "@expo/vector-icons/Entypo";
import DishListItem from "@/components/DishListItem";

const DishOfTheDayPage = (props) => {
  // function navigateToDish(name: string) {
  //   navigation.navigate(name);
  // }

  console.log(props.route.params);
  return (
    <>
      <Sheet />
      <ScrollView style={{ zIndex: -1 }}>
        <View style={{ padding: 20, gap: 42 }}>
          <Text variant="headlineMedium">Dania dnia:</Text>
          {restaurantsData.map((rest, index) => (
            <View style={{ gap: 22 }}>
              <Text variant="headlineSmall">{rest.name}</Text>
              {dishesData.map(
                (dish, index) =>
                  rest.name == dish.restaurant && (
                    <DishListItem content={dish} />
                  )
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default DishOfTheDayPage;
