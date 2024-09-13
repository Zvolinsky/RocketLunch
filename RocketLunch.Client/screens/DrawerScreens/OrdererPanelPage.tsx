import { ScrollView, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import React from "react";

const OrdererPage = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 20 }}>
        <Text variant="headlineMedium">Panel zamawiającego:</Text>
        <Surface
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "blue",
            borderRadius: 9,
          }}
          elevation={4}
        >
          <Text variant="headlineSmall">
            Na wykonanie obowiązków masz określony czas!!!
          </Text>
          <Text>
            Przejrzyj skompletowane zamówienia i zamów. Czas do złożenia
            zamówienia:
          </Text>
          <Text variant="headlineSmall">14min 40s</Text>
        </Surface>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </View>
    </ScrollView>
  );
};

const RestaurantCard = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderStyle: "dashed",
        paddingVertical: 23,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text>Majeranek</Text>
        <Text>Tel. 123 123 123</Text>
      </View>
      <View>
        <Text>Zamówienia do Majeranek</Text>
        <Text>{"\u2022"} 2x Zestaw kurwa</Text>
        <Text>{"\u2022"} 2x Zestaw jebany</Text>
        <Text>{"\u2022"} 2x Zestaw chuj</Text>
        <Text>
          Łączna kwota zamówienia:{" "}
          <Text style={{ color: "blue" }}>123,34 zł</Text>
        </Text>
      </View>
    </View>
  );
};

export default OrdererPage;
