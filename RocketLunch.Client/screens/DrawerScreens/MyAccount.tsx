import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
import useUser from "@/store/useUser";

const MyAccountPage = () => {
  const { UserData } = useUser();
  const [firstName, setFirstName] = useState(UserData.firstName);
  const [lastName, setLastName] = useState(UserData.lastName);
  const [password, setPassword] = useState("Hasło");
  const [phoneNumber, setPhoneNumber] = useState("Telefon");
  const content = [
    {
      title: "Imię",
      value: firstName,
      method: setFirstName,
    },
    {
      title: "Nazwisko",
      value: lastName,
      method: setLastName,
    },
    {
      title: "Hasło",
      value: password,
      method: setPassword,
    },
    {
      title: "Telefon",
      value: phoneNumber,
      method: setPhoneNumber,
    },
  ];
  return (
    <View style={{ gap: 42, padding: 20 }}>
      <Text variant="headlineMedium">Moje konto:</Text>
      <View style={{ gap: 22 }}>
        {content.map((item, index) => (
          <View key={index} style={{ gap: 7 }}>
            <Text variant="titleLarge">{item.title}:</Text>
            <TextInput
              mode="outlined"
              outlineColor="#AAA"
              dense
              value={item.value?.trim()}
              onChangeText={(text) => item.method(text)}
            />
          </View>
        ))}
      </View>
      <Button
        mode="outlined"
        style={{ width: 144, alignSelf: "center" }}
        labelStyle={{ color: "blue" }}
        onPress={() => {}}
      >
        Zapisz zmiany
      </Button>
    </View>
  );
};

export default MyAccountPage;
