import { ScrollView, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import DateTimePicker from "react-native-modal-datetime-picker";
import ModalSelector from "react-native-modal-selector";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Feather from "@expo/vector-icons/Feather";

const AdminPage = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <View
        style={{ height: 50, backgroundColor: "white", paddingHorizontal: 20 }}
      >
        <Text variant="headlineMedium">Panel Admina</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen
          name="Orders"
          component={OrdersTab}
          options={{ tabBarLabel: "Zamówienia" }}
        />
        <Tab.Screen
          name="Users"
          component={UsersTab}
          options={{ tabBarLabel: "Użytkownicy" }}
        />
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsTab}
          options={{ tabBarLabel: "Restauracje" }}
        />
      </Tab.Navigator>
    </>
  );
};

const OrdersTab = () => {
  const [orderTime, setOrderTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [orderer, setOrderer] = useState(null);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);

  const orderers = [
    { key: 1, label: "Krzysztof Zwoliński", id: 1 },
    { key: 2, label: "Krzysztof Deręgowski", id: 2 },
    { key: 3, label: "Dawid Zieliński", id: 3 },
  ];

  const handleTimeConfirm = (time) => {
    setOrderTime(time);
    setTimePickerVisibility(false);
  };

  const handleFromDateConfirm = (time) => {
    setFromDate(time);
    setFromDatePickerVisibility(false);
  };
  const handleToDateConfirm = (time) => {
    setToDate(time);
    setToDatePickerVisibility(false);
  };

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <View>
        <Text variant="titleMedium">Wyznacz godzinę zamawiania:</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text variant="titleSmall">Godzina zamawiania:</Text>
          <TextInput
            mode="outlined"
            outlineColor="#AAA"
            dense
            onPress={() => setTimePickerVisibility(true)}
            style={{ height: 30 }}
          >
            {orderTime.getHours()}:{orderTime.getMinutes()}
          </TextInput>
          <DateTimePicker
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={() => setTimePickerVisibility(false)}
            date={orderTime}
          />
        </View>
      </View>
      <View>
        <Text variant="titleMedium">Wyznacz zamawiającego:</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text variant="titleSmall">Zamawiający: {orderer?.label}</Text>
          <ModalSelector
            data={orderers}
            visible={false}
            initValue="Wybierz"
            onChange={(option) => {
              setOrderer(option);
            }}
          />
        </View>
      </View>
      <View>
        <Text variant="titleMedium">Historia zamówień:</Text>
        <View>
          <Text variant="titleSmall">Lista zamówień:</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text variant="titleSmall">Od:</Text>
            <TextInput
              mode="outlined"
              outlineColor="#AAA"
              dense
              onPress={() => setFromDatePickerVisibility(true)}
              style={{ height: 30 }}
            >
              {fromDate.toLocaleDateString()}
            </TextInput>
            <DateTimePicker
              isVisible={isFromDatePickerVisible}
              mode="date"
              onConfirm={handleFromDateConfirm}
              onCancel={() => setFromDatePickerVisibility(false)}
              date={fromDate}
            />
            <Text variant="titleSmall">Do:</Text>
            <TextInput
              mode="outlined"
              outlineColor="#AAA"
              dense
              onPress={() => setToDatePickerVisibility(true)}
              style={{ height: 30 }}
            >
              {toDate.toLocaleDateString()}
            </TextInput>
            <DateTimePicker
              isVisible={isToDatePickerVisible}
              mode="date"
              onConfirm={handleToDateConfirm}
              onCancel={() => setToDatePickerVisibility(false)}
              date={toDate}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const UsersTab = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [role, setRole] = useState(null);

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
      title: "Adres e-mail",
      value: email,
      method: setEmail,
    },
  ];

  const roles = [
    { key: 1, label: "Admin", id: 1 },
    { key: 2, label: "Pracownik", id: 2 },
  ];

  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <View style={{ gap: 40 }}>
          {/* <View style={{ gap: 20 }}>
            <Text variant="titleMedium">Dodawanie użytkownika:</Text>
            <View style={{ gap: 10 }}>
              {content.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text variant="titleSmall">{item.title}:</Text>
                  <TextInput
                    mode="outlined"
                    outlineColor="#AAA"
                    dense
                    style={{ height: 30, minWidth: 200 }}
                    value={item.value}
                    onChangeText={(value) => item.method(value)}
                  />
                </View>
              ))}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="titleSmall">Rola/Status:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Text variant="titleSmall">{role?.label}</Text>
                  <ModalSelector
                    data={roles}
                    visible={false}
                    initValue="Wybierz"
                    onChange={(option) => {
                      setRole(option);
                    }}
                  />
                </View>
              </View>
            </View>
          </View> */}
          <View style={{ gap: 20 }}>
            <Text variant="titleMedium">Lista użytkowników:</Text>
            <View style={{ gap: 10 }}>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const RestaurantsTab = () => {
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <View>
          <Text variant="titleLarge">Dodawanie restauracji:</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Nazwa:</Text>
            <TextInput>Podaj nazwę</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Adres:</Text>
            <TextInput>Podaj adres</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Telefon:</Text>
            <TextInput>Podaj telefon</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Link do strony:</Text>
            <TextInput>Podaj link</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Opis:</Text>
            <TextInput numberOfLines={9}>Podaj opis restauracji</TextInput>
          </View>
          <Button mode="outlined" style={{ width: 190, alignSelf: "center" }}>
            Dodaj restaurację
          </Button>
        </View>
        <View>
          <Text variant="titleLarge">Lista restauracji:</Text>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </View>
      </ScrollView>
    </View>
  );
};
const UserCard = () => {
  const [unfolded, setUnfolded] = useState(false);
  return (
    <Card style={{ padding: 20 }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Imie Nazwisko</Text>
            <Text>Osoba jest zamawiającym</Text>
          </View>
          <View>
            <Button
              labelStyle={{ color: "black" }}
              onPress={() => setUnfolded((state) => !state)}
            >
              {unfolded ? (
                <Feather name="chevron-up" size={30} />
              ) : (
                <Feather name="chevron-down" size={30} />
              )}
            </Button>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Wysokość zadłużenia</Text>
            <Text style={{ color: "red" }}>-123,43zł</Text>
          </View>
          <View>
            <Text>Pozycja:</Text>
            <Text>Pracownik</Text>
          </View>
        </View>
      </View>
      {unfolded && (
        <View>
          <View>
            <Text>Edytuj użytkownika:</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Imię:</Text>
              <TextInput>Podaj imię</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Nazwisko:</Text>
              <TextInput>Podaj nazwisko</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>E-mail:</Text>
              <TextInput>Podaj e-mail</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Rola/Status:</Text>
              <TextInput>Pracownik</TextInput>
            </View>
            <Button mode="outlined">Zapisz zmiany</Button>
          </View>
          {/* <View>
            <Text>Zablokuj użytkownika:</Text>
            <View>
              <Text>Od:</Text>
              <TextInput>Data</TextInput>
            </View>
            <View>
              <Text>Do:</Text>
              <TextInput>Data</TextInput>
            </View>
            <Button mode="outlined">Zapisz zmiany</Button>
          </View> */}
        </View>
      )}
    </Card>
  );
};
const RestaurantCard = () => {
  const [unfolded, setUnfolded] = useState(false);
  return (
    <Card style={{ padding: 20 }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Nazwa restauracji</Text>
          </View>
          <View>
            <Button
              labelStyle={{ color: "black" }}
              onPress={() => setUnfolded((state) => !state)}
            >
              {unfolded ? (
                <Feather name="chevron-up" size={30} />
              ) : (
                <Feather name="chevron-down" size={30} />
              )}
            </Button>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>
              <Text style={{ fontWeight: "700" }}>Telefon: </Text>123 123 123
            </Text>
            <Text>
              <Text style={{ fontWeight: "700" }}>Adres: </Text>Zawiszy Czarnego
              16, 35-082 Rzeszów
            </Text>
            <Text>
              <Text style={{ fontWeight: "700" }}>Link: </Text>
              majeranek.rzeszow.pl
            </Text>
            <Text>
              <Text style={{ fontWeight: "700" }}>Opis: </Text>Oferujemy dania
              na różne okoliczności: catering na imprezy okolicznościowe
              rodzinne i firmowe, obiady do domu i firmy...
            </Text>
          </View>
        </View>
      </View>
      {unfolded && (
        <View>
          <Button mode="outlined" style={{ width: 190, alignSelf: "flex-end" }}>
            Usuń restaurację
          </Button>
          <View>
            <Text>Edytuj restaurację:</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Nazwa:</Text>
              <TextInput>Podaj nazwę</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Adres:</Text>
              <TextInput>Podaj adres</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Telefon:</Text>
              <TextInput>Podaj telefon</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Link do strony:</Text>
              <TextInput>Podaj link</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Opis:</Text>
              <TextInput numberOfLines={9}>Podaj opis restauracji</TextInput>
            </View>
            <Button mode="outlined">Zapisz zmiany</Button>
          </View>
          <Text>Aktualne menu na dzień dd.mm.yyyy</Text>
          <View style={{ gap: 20 }}>
            <DishItem />
            <DishItem />
            <DishItem />
          </View>
          <Text>Dodaj danie do menu:</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Nazwa:</Text>
            <TextInput>Podaj nazwę</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Cena:</Text>
            <TextInput>Podaj cenę</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Kategorie:</Text>
            <TextInput>Drugie danie</TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Opis:</Text>
            <TextInput numberOfLines={9}>Podaj opis restauracji</TextInput>
          </View>
          <Button
            mode="outlined"
            style={{ width: 190, alignSelf: "flex-start" }}
          >
            Dodaj danie
          </Button>
        </View>
      )}
    </Card>
  );
};

const DishItem = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Drugie danie</Text>
          <Text>29,00zł</Text>
        </View>
        <Text>Zupa krem brokułowy + Placki ziemniaczne z gulaszem</Text>
      </View>
      <View>
        <Button>X</Button>
      </View>
    </View>
  );
};

export default AdminPage;
