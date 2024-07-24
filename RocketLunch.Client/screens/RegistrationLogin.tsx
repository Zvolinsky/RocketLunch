import { ScrollView, View } from "react-native";
import { Button, Modal, Portal, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import axios from "axios";
import useUser from "@/store/useUser";
import { ACCOUNT, ROOT } from "@/server/api";

const Tab = createMaterialTopTabNavigator();

const RegistrationLogin = () => {
  return (
    <>
      <View
        style={{
          height: "30%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text variant="displaySmall">RocketLunch</Text>
      </View>
      <Tab.Navigator style={{ width: "90%", alignSelf: "center" }}>
        <Tab.Screen
          name="Reg"
          options={{ tabBarLabel: "Rejestracja" }}
          component={Registration}
        />
        <Tab.Screen
          name="Log"
          options={{ tabBarLabel: "Logowanie" }}
          component={Login}
        />
      </Tab.Navigator>
    </>
  );
};
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [visible, setVisible] = useState(false);

  const [message, setMessage] = useState("");
  const SUCCESS = "Zarejestrowano pomyślnie!";
  const FAIL = "Coś poszło nie tak. :/";

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  async function register(
    email: string,
    phoneNumber: string,
    password: string
  ) {
    await axios
      .post(`${ROOT + ACCOUNT}register`, {
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        setMessage(SUCCESS);
        showModal();
      })
      .catch(function (error) {
        console.log(error);
        setMessage(FAIL);
        showModal();
      });
  }

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <ModalWindow message={message} visible={visible} hideModal={hideModal} />
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          zIndex: 1,
          width: "100%",
          bottom: 100,
        }}
      >
        <Button
          style={{
            width: "50%",
            zIndex: 1,
          }}
          textColor="white"
          mode="contained"
          onPress={() => register(email, phoneNumber, password)}
        >
          Zarejestruj się
        </Button>
      </View>
      <ScrollView>
        <TextInput
          label="Adres e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Hasło"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          label="Potwierdź hasło"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TextInput
          label="Nr telefonu"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </ScrollView>
    </View>
  );
};

const ModalWindow = ({ message, visible, hideModal }: any) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={{
          backgroundColor: "white",
          width: "70%",
          height: "50%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text>{message}</Text>
        <Button mode="outlined" onPress={hideModal}>
          OK
        </Button>
      </Modal>
    </Portal>
  );
};

const Login = () => {
  const { logIn } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const message = "Coś poszło nie tak. :/";

  async function login(email: string, password: string) {
    await axios
      .post(`${ROOT + ACCOUNT}login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        logIn();
      })
      .catch(function (error) {
        console.log(error);
        showModal();
      });
  }

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <ModalWindow message={message} visible={visible} hideModal={hideModal} />
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          zIndex: 1,
          width: "100%",
          bottom: 100,
        }}
      >
        <Button
          style={{
            width: "50%",
            zIndex: 1,
            backgroundColor: "blue",
          }}
          textColor="white"
          mode="contained"
          onPress={() => login(email, password)}
        >
          Zaloguj się
        </Button>
      </View>
      <ScrollView>
        <TextInput
          label="Adres e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Hasło"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </ScrollView>
    </View>
  );
};
export default RegistrationLogin;
