import { View } from "react-native";
import { Portal, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import React from "react";
import Clock from "@/components/Clock";
import OrderRecommendations from "@/components/OrderRecommendations";
import RestaurantsList from "@/components/RestaurantsList";
import { ScrollView } from "react-native-gesture-handler";
import useUser from "@/store/useUser";
import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Sheet from "@/components/Sheet";
import { useTime } from "@/store/useTime";
import OrderEditor from "@/components/OrderEditor";
import { useOrder } from "@/store/useOrder";

const Home = () => {
  const { colors } = useTheme();
  const { UserData } = useUser();
  const { after } = useTime();
  const { orders } = useOrder();
  return (
    <>
      <ScrollView>
        <View style={{ padding: 30, gap: 20 }}>
          <Text variant="displaySmall">Cześć, {UserData.firstName}!</Text>
          {/* {after ? (
            <Text variant="bodyLarge">
              Życzymy Ci{" "}
              <Text style={{ color: colors.primary }}>
                smacznego jedzonka! :)
              </Text>
            </Text>
          ) : (
            <Text variant="bodyLarge">
              Masz jeszcze trochę czasu, aby złożyć zamówienie
            </Text>
          )} */}
          <Clock />
          {orders.length > 0 && <OrderEditor />}

          <RestaurantsList />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
