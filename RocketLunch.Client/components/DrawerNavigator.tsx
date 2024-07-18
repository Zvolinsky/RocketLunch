import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

//screens
import Home from "@/screens/DrawerScreens/Home";
import CatererPage from "@/screens/DrawerScreens/CatererPage";
import DishOfTheDayPage from "@/screens/DrawerScreens/DishOfTheDayPage";
import OrdererPage from "@/screens/DrawerScreens/OrdererPanelPage";
import MyOrdersPage from "@/screens/DrawerScreens/MyOrdersPage";
import MyAccountPage from "@/screens/DrawerScreens/MyAccount";
import MyBalancePage from "@/screens/DrawerScreens/MyBalancePage";
import SettingsPage from "@/screens/DrawerScreens/SettingsPage";
import HelpPage from "@/screens/DrawerScreens/HelpPage";

import { Divider, List, Text } from "react-native-paper";
import ListSection from "react-native-paper/lib/typescript/components/List/ListSection";
import ListAccordion from "react-native-paper/lib/typescript/components/List/ListAccordion";
import ListIcon from "react-native-paper/lib/typescript/components/List/ListIcon";

//content
import dishesData from "../constants/dishesData";
import restaurantsData from "../constants/restaurantsData";
import { TouchableOpacity, Image, View } from "react-native";

const settingsNavItems = [
  // {
  //   name: "Admin Page",
  //   label: "Panel admina",
  //   href: AdminPage,
  // },
  {
    name: "Orderer Page",
    label: "Panel zamawiającego",
    href: OrdererPage,
  },
  {
    name: "MyAccount Page",
    label: "Moje konto",
    href: MyAccountPage,
  },
  { name: "MyOrders Page", label: "Moje zamówienia", href: MyOrdersPage },
  { name: "MyBalance Page", label: "Mój bilans", href: MyBalancePage },
  { name: "Help Page", label: "Pomoc", href: HelpPage },
];

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitle: () => <Text style={{ color: "black" }}>RocketLunch</Text>,
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="Catering"
        component={CatererPage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/img/Drawer/back-arrow.png")}
                style={{
                  marginLeft: 10,
                  width: 25,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          ),
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Dania dnia"
        component={DishOfTheDayPage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/img/Drawer/back-arrow.png")}
                style={{
                  marginLeft: 10,
                  width: 25,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          ),
          drawerItemStyle: { display: "none" },
        })}
      />
      {settingsNavItems.map((item, index) => (
        <Drawer.Screen
          key={index}
          name={item.label}
          component={item.href}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("../assets/img/Drawer/back-arrow.png")}
                  style={{
                    marginLeft: 10,
                    width: 25,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </Drawer.Navigator>
  );
};

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Jedzenie"
        labelStyle={{ fontSize: 20, fontWeight: 800 }}
        pressColor="white"
        onPress={() => null}
      />
      <CateringList {...props} />
      <DrawerItem
        label="Dania dnia"
        onPress={() => {
          props.navigation.navigate("Dania dnia");
        }}
      />
      <Divider />
      <DrawerItem
        label="Ustawienia"
        labelStyle={{ fontSize: 20, fontWeight: 800 }}
        pressColor="white"
        onPress={() => null}
      />
      <DrawerItemList {...props} />
      <Divider />
    </DrawerContentScrollView>
  );
};

function CateringList(props: any) {
  return (
    <List.Section>
      <List.Accordion
        title="Dostępne cateringi"
        titleStyle={{ color: "black" }}
        style={{ backgroundColor: "white" }}
      >
        <View style={{ marginLeft: 24 }}>
          {restaurantsData.map((item, index) => (
            <DrawerItem
              key={index}
              label={item.name}
              onPress={() => {
                props.navigation.navigate("Catering", item);
              }}
            />
          ))}
        </View>
      </List.Accordion>
    </List.Section>
  );
}

export default DrawerNavigator;
