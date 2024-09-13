import { View, ScrollView } from "react-native";
import { Text, TextInput } from "react-native-paper";
import React from "react";

const MyOrdersPage = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 15 }}>
        <View>
          <Text variant="headlineMedium">Historia moich zamówień</Text>
          <Text variant="titleMedium">Poznaj swoją historie posiłków</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Od:</Text>
            <TextInput>28.08.2023</TextInput>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Do:</Text>
            <TextInput>28.08.2023</TextInput>
          </View>
        </View>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </View>
    </ScrollView>
  );
};

const OrderCard = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#AAA",
        borderRadius: 9,
        padding: 20,
        gap: 10,
      }}
    >
      <Text style={{ fontWeight: 700 }}>Nr: 5656</Text>
      <Text>Data: 29.08.2023</Text>
      <Text style={{ fontWeight: 700 }}>Nazwa: Zestaw #2</Text>
      <Text>Opis: Zupa krem brokułowy + Placki ziemniaczane z gulaszem</Text>
      <Text>Cena: 29,00 zł</Text>
      <Text>Resto: Majeranek</Text>
    </View>
  );
};

export default MyOrdersPage;
