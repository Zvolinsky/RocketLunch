import { View, Text, ScrollView } from "react-native";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Button } from "react-native-paper";
import Order from "./BottomSheetComponents/Order";
import { useOrder } from "@/store/useOrder";
import dishesData from "@/constants/dishesData";

const Sheet = () => {
  const { orders, totalPrice } = useOrder();
  const [unfolded, setUnfolded] = useState(false);
  const [price, setPrice] = useState<number>(0);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "80%"], []);

  // callbacks
  const showModal = useCallback(() => {
    //bottomSheetModalRef.current?.present();
    bottomSheetModalRef.current?.present();
  }, []);
  const unfoldModal = useCallback(() => {
    //bottomSheetModalRef.current?.present();
    bottomSheetModalRef.current?.snapToIndex(1);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    index == 1 ? setUnfolded(true) : setUnfolded(false);
  }, []);

  useEffect(() => {
    orders.length > 0
      ? bottomSheetModalRef.current?.present()
      : bottomSheetModalRef.current?.dismiss();
  }, [orders]);

  useEffect(() => {
    setPrice(0),
      orders.map((item) =>
        setPrice((price) => price + dishesData[item.dishId - 1].price)
      );
  }, [orders]);

  return (
    <BottomSheetModalProvider>
      <View>
        <Button onPress={showModal} />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          // backdropComponent={}
        >
          <BottomSheetView>
            <View style={{ backgroundColor: "#222" }}>
              <Button
                onPress={unfoldModal}
                textColor="white"
                style={{ opacity: unfolded ? 0 : 1 }}
              >
                <Text style={{ fontWeight: "900" }}>Dotknij</Text>, aby zobaczyć
                zamówienie
              </Button>
              <View
                style={{
                  height: "20%",
                  padding: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  Kwota zamówienia
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "700", fontSize: 25 }}
                >
                  {new Intl.NumberFormat("pl-PL", {
                    style: "currency",
                    currency: "PLN",
                  }).format(totalPrice)}
                </Text>
              </View>
              <View style={{ height: "65%", padding: 20 }}>
                <ScrollView>
                  {orders != null &&
                    orders.map((item) => (
                      <Order
                        key={item.orderId}
                        orderId={item.orderId}
                        content={dishesData[item.dishId - 1]}
                      />
                    ))}
                </ScrollView>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Sheet;
