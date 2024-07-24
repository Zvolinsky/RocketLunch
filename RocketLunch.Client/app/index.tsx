import DrawerNavigator from "@/components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { DefaultTheme, PaperProvider, TextInput } from "react-native-paper";
import "react-native-gesture-handler";
import RegistrationLogin from "@/screens/RegistrationLogin";
import useUser from "@/store/useUser";

const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#ee3355",
  },
};

export default function Index() {
  const { logged } = useUser();
  return (
    <NavigationContainer independent>
      <PaperProvider theme={theme}>
        {logged ? <DrawerNavigator /> : <RegistrationLogin />}
      </PaperProvider>
    </NavigationContainer>
  );
}
