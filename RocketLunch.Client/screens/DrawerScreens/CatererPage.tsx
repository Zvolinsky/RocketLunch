import { View, ScrollView, Image } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import Menu from "@/components/Menu";
import Sheet from "@/components/Sheet";

const CatererPage = ({ route, navigation }) => {
  const { params: data } = route;
  function navigateToDish(name) {
    navigation.navigate(name);
  }
  return (
    <>
      <Sheet />
      <ScrollView style={{ zIndex: -1 }}>
        <View>
          <Image
            source={data.image}
            style={{
              width: "100%",
              height: 197,
              resizeMode: "contain",
            }}
          />
          <View style={{ padding: 20 }}>
            <Text variant="titleLarge">{data.name}</Text>
            <Text variant="titleSmall">{data.description}</Text>
          </View>
          <View style={{ padding: 20 }}>
            <Menu restaurantName={data.name} navigateToDish={navigateToDish} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CatererPage;
