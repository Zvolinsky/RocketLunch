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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [visible, setVisible] = useState(false);

  const [message, setMessage] = useState("");
  const SUCCESS = "Zarejestrowano pomyślnie!";
  const FAIL = "Coś poszło nie tak. :/";

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
    {
      title: "Hasło",
      value: password,
      method: setPassword,
    },
    {
      title: "Potwierdź hasło",
      value: confirmPassword,
      method: setConfirmPassword,
    },
    {
      title: "Nr telefonu",
      value: phoneNumber,
      method: setPhoneNumber,
    },
  ];

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  async function register(
    email: string,
    phoneNumber: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    await axios
      .post(`${ROOT + ACCOUNT}register`, {
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        firstName: firstName,
        lastName: lastName,
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
            width: "70%",
            zIndex: 1,
            padding: 5,
          }}
          mode="contained"
          onPress={() =>
            register(
              email.trim(),
              phoneNumber.trim(),
              password.trim(),
              firstName.trim(),
              lastName.trim()
            )
          }
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
            Zarejestruj się
          </Text>
        </Button>
      </View>
      <ScrollView>
        <View style={{ gap: 20, marginTop: 20 }}>
          {/* <TextInput
          label="Imię"
          value={firstName.trim()}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          label="Nazwisko"
          value={lastName.trim()}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          label="Adres e-mail"
          value={email.trim()}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Hasło"
          value={password.trim()}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          label="Potwierdź hasło"
          value={confirmPassword.trim()}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TextInput
          label="Nr telefonu"
          value={phoneNumber.trim()}
          onChangeText={(text) => setPhoneNumber(text)}
        /> */}
          {content.map((item, index) => (
            <View key={index} style={{ gap: 7 }}>
              <Text variant="titleSmall">{item.title}:</Text>
              <TextInput
                mode="outlined"
                outlineColor="#AAA"
                dense
                value={item.value}
                onChangeText={(value) => item.method(value)}
                contentStyle={{ paddingHorizontal: 8 }}
                style={{ height: 40 }}
              />
            </View>
          ))}
        </View>
        <View style={{ height: 200 }} />
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
  const { logIn, fetchUser } = useUser();

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
        console.log(response.data);
        logIn();
        fetchUser(response.data);
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
            width: "70%",
            zIndex: 1,
            backgroundColor: "blue",
            padding: 5,
          }}
          mode="contained"
          onPress={() => login(email.trim(), password.trim())}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
            Zaloguj się
          </Text>
        </Button>
      </View>
      <ScrollView>
        <View style={{ gap: 20, marginTop: 20 }}>
          <View style={{ gap: 7 }}>
            <Text variant="titleSmall">Adres e-mail:</Text>

            <TextInput
              mode="outlined"
              outlineColor="#AAA"
              dense
              contentStyle={{ paddingHorizontal: 8 }}
              style={{ height: 40 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ gap: 7 }}>
            <Text variant="titleSmall">Hasło:</Text>
            <TextInput
              mode="outlined"
              outlineColor="#AAA"
              dense
              contentStyle={{ paddingHorizontal: 8 }}
              style={{ height: 40 }}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default RegistrationLogin;
