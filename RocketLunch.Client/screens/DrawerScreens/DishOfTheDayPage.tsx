import { View, Text } from "react-native";
import React from "react";

const DishOfTheDayPage = (props) => {
  console.log(props.route.params);
  return (
    <View>
      <Text>DishOfTheDayPage</Text>
    </View>
  );
};

export default DishOfTheDayPage;
