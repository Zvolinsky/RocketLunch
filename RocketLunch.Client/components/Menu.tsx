import { View } from "react-native";
import { Text } from "react-native-paper";
import { useState } from "react";
// import ButtonsGroup from "./MenuComponents/ButtonsGroup";
// import Sorted from "./MenuComponents/Sorted";
// import DishTypeSection from "./MenuComponents/DishTypeSection";
import { dishTypes } from "../constants/dishesData";
import ButtonsGroup from "./MenuComponents/ButtonsGroup";
import DishTypeSection from "./MenuComponents/DishTypeSection";
import Sorted from "./MenuComponents/Sorted";

const Menu = ({ restaurantName, navigateToDish }) => {
  const dishTypesArray = [];
  const dishTypesLength = Object.keys(dishTypes).length;
  for (let i = 0; i < dishTypesLength; i++) {
    dishTypesArray.push(dishTypes[i + 1]);
  }
  const [filter, setFilter] = useState(0);
  function changeFilter(id: number) {
    setFilter(id);
  }
  return (
    <View>
      <Text variant="titleLarge">Menu</Text>
      <ButtonsGroup changeFilter={changeFilter} />
      <View style={{ minHeight: 390 }}>
        {filter == 0 && (
          <DishTypeSection
            dishType={dishTypesArray}
            restaurantName={restaurantName}
            navigateToDish={navigateToDish}
          />
        )}
        {filter == 1 && (
          <Sorted
            restaurantName={restaurantName}
            navigateToDish={navigateToDish}
          />
        )}

        {dishTypesArray.map((dishType, index) => (
          <View key={index}>
            {filter == index + 2 && (
              <DishTypeSection
                key={index}
                dishType={[dishType]}
                restaurantName={restaurantName}
                navigateToDish={navigateToDish}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Menu;
