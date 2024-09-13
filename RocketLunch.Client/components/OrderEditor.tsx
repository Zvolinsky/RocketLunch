import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Modal, Portal, Button, Divider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useOrder } from "@/store/useOrder";
import dishesData from "@/constants/dishesData";

const OrderEditor = () => {
  const { orders, totalPrice, removeOrder, clearOrders } = useOrder();

  const [unfolded, setUnfolded] = useState(false);
  const [modalvisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const modalStyle = {
    width: "60%",
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    alignSelf: "center",
    gap: 15,
  };
  return (
    <>
      <View style={styles.container}>
        {unfolded ? (
          <View style={{ gap: 10 }}>
            <Text
              style={{
                color: Colors.textGray,
                fontSize: 19,
                fontWeight: "700",
              }}
            >
              Twoje zamówienie:
            </Text>
            <Text
              style={{
                color: Colors.textGray,
                fontSize: 19,
                fontWeight: "700",
              }}
            >
              {new Intl.NumberFormat("pl-PL", {
                style: "currency",
                currency: "PLN",
              }).format(totalPrice)}
            </Text>
            <Divider bold />
            <View style={{ gap: 20 }}>
              {orders != null ? (
                orders.map((item) => (
                  <OrderItem
                    key={item.orderId}
                    orderId={item.orderId}
                    content={dishesData.find((i) => i.id == item.dishId)}
                  />
                ))
              ) : (
                <Text>null</Text>
              )}
            </View>
            <Button
              mode="outlined"
              style={{
                width: "70%",
                alignSelf: "center",
                borderColor: "black",
              }}
              textColor="black"
              onPress={showModal}
            >
              Usuń całe zamówienie
            </Button>
            <Button
              mode="outlined"
              style={{
                width: "50%",
                alignSelf: "center",
                borderColor: "red",
              }}
              onPress={() => setUnfolded(false)}
            >
              Zapisz zmiany
            </Button>
          </View>
        ) : (
          <View style={{ gap: 10 }}>
            <Text
              style={{
                color: Colors.textGray,
                fontSize: 19,
                fontWeight: "700",
              }}
            >
              Twoje zamówienie:
            </Text>
            <Text style={{ color: Colors.shadedText }}>
              {orders.map((item, index) => (
                <Text>
                  {dishesData.find((i) => i.id == item.dishId)?.name}-
                  {dishesData.find((i) => i.id == item.dishId)?.description}
                  {index < orders.length - 1 ? " + " : ""}
                </Text>
              ))}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: 19,
                  fontWeight: "700",
                }}
              >
                {new Intl.NumberFormat("pl-PL", {
                  style: "currency",
                  currency: "PLN",
                }).format(totalPrice)}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => setUnfolded(true)}>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontWeight: "500",
                      paddingHorizontal: 5,
                    }}
                  >
                    Edytuj
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showModal}>
                  <Text
                    style={{
                      color: Colors.textGray,
                      fontWeight: "500",
                      paddingHorizontal: 5,
                    }}
                  >
                    Usuń
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>

      <>
        <Portal>
          <Modal
            visible={modalvisible}
            onDismiss={hideModal}
            contentContainerStyle={modalStyle}
          >
            <View>
              <Text>Na pewno chcesz usunąć całe zamówienie?</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                onPress={() => {
                  hideModal(), clearOrders();
                }}
              >
                TAK
              </Button>
              <Button textColor="black" onPress={hideModal}>
                NIE
              </Button>
            </View>
          </Modal>
        </Portal>
      </>
    </>
  );
};

const OrderItem = (props) => {
  const { orders, removeOrder } = useOrder();
  const { id, name, price, description } = props.content;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        width: "86%",
      }}
    >
      <View style={{ gap: 5 }}>
        <Text
          style={{ color: Colors.textGray, fontSize: 19, fontWeight: "700" }}
        >
          {name}
        </Text>
        <Text style={{ color: Colors.shadedText }}>{description}</Text>

        <Text
          style={{ color: Colors.textGray, fontSize: 19, fontWeight: "700" }}
        >
          {new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN",
          }).format(price)}
        </Text>
      </View>

      <TouchableOpacity onPress={() => removeOrder(props.orderId)}>
        <AntDesign name="closesquareo" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const OrderModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const modalStyle = { backgroundColor: "white", padding: 20 };
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={modalStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </>
  );
};

export default OrderEditor;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 9,
  },
});
