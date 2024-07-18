import DrawerNavigator from "@/components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";
import "react-native-gesture-handler";

export default function Index() {
  return (
    <NavigationContainer independent>
      <PaperProvider>
        <DrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
