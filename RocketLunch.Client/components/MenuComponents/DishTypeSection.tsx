import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Colors from "../../constants/Colors";
import DishListItem from "../DishListItem";
import dishesData from "../../constants/dishesData";

const DishTypeSection = ({ dishType, restaurantName, navigateToDish }: any) => {
  return (
    <View style={{ gap: 50 }}>
      {dishType.map((type: String, index: Number) => (
        <View style={{ gap: 20 }}>
          <>
            {dishesData.some(
              (item) => item.type == type && item.restaurant == restaurantName
            ) && <Text variant="titleLarge">{type}: </Text>}
          </>
          <>
            {dishesData.map((item, index) =>
              item.type == type && item.restaurant == restaurantName ? (
                <DishListItem
                  key={index}
                  content={item}
                  navigateToDish={navigateToDish}
                />
              ) : null
            )}
          </>
        </View>
      ))}
      <View style={{ height: 200 }}></View>
    </View>
  );
};

export default DishTypeSection;
