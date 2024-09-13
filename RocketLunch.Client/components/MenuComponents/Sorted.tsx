import { StyleSheet, View } from "react-native";
import Colors from "../../../../constants/Colors";
import dishesData from "../../constants/dishesData";
import DishListItem from "../DishListItem";

const Sorted = ({ restaurantName, navigateToDish }) => {
  const sortedMeals = dishesData.sort((a, b) => {
    return a.price - b.price;
  });
  return (
    <View style={{ gap: 20 }}>
      {sortedMeals.map((item, index) =>
        item.restaurant == restaurantName ? (
          <DishListItem
            key={index}
            content={item}
            navigateToDish={navigateToDish}
          />
        ) : null
      )}
      <View style={{ height: 200 }}></View>
    </View>
  );
};

export default Sorted;
