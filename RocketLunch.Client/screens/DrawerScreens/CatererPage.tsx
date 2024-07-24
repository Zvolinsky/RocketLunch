import { View, ScrollView, Image } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import Menu from "@/components/Menu";

const CatererPage = ({ route, navigation }) => {
  const { params: data } = route;
  console.log(data);
  return (
    <>
      <ScrollView>
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
            <Menu />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CatererPage;
