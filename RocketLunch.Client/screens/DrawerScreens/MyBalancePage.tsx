import { View, ScrollView } from "react-native";
import { Surface, Text } from "react-native-paper";
import React from "react";

const MyBalancePage = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 15 }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#AAA",
            padding: 20,
            gap: 20,
          }}
        >
          <View>
            <Text variant="headlineMedium">Dzisiaj</Text>
            <Text variant="headlineLarge" style={{ color: "blue" }}>
              Wtorek
            </Text>
            <Text variant="headlineMedium">29 sierpnia</Text>
          </View>
          <Surface
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "blue",
              padding: 15,
            }}
            elevation={4}
          >
            <Text variant="displayMedium">-130,20 zł</Text>
            <Text variant="headlineSmall">Stan całkowitego zadłużenia</Text>
          </Surface>
          <View
            style={{
              alignItems: "center",
              borderTopWidth: 1,
              borderColor: "#AAA",
              paddingVertical: 10,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              Zadłużenie za zamówienia jedzenia? Spłać je, dbając o porządek
              finansów i ciągłość zamówień. Terminowa spłata to klucz do
              komfortu dla wszystkich.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyBalancePage;
