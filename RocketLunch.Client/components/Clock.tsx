import { View } from "react-native";
import { Text } from "react-native-paper";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pl";

import Colors from "../constants/Colors";
import { useTime } from "../store/useTime";

interface ClockProps {
  displayText?: boolean;
}

const Clock = ({ displayText }: ClockProps) => {
  const orderTime = dayjs().set("hour", 14).set("minute", 0).set("second", 0);
  const [remainingTime, setRemainingTime] = useState(
    orderTime.diff(dayjs(), "second")
  );
  const { after, setAfter } = useTime();

  useEffect(() => {
    setInterval(() => {
      const newRemainingTime = orderTime.diff(dayjs(), "second");
      setRemainingTime(newRemainingTime);

      if (dayjs().isBefore(orderTime)) {
        setAfter(false);
      } else setAfter(true);
    }, 1000);
  }, []);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  return (
    <View style={{ alignItems: "center" }}>
      {after == null ? null : after == true ? (
        <Text style={{ color: "black" }}>Twój czas na zamówienie minął</Text>
      ) : (
        <Text>Masz jeszcze trochę czasu, aby złożyć zamówienie</Text>
      )}

      {after ? null : (
        <Text>
          {hours.toString()}h {minutes.toString().padStart(2, "0")}min{" "}
          {seconds.toString().padStart(2, "0")}s
        </Text>
      )}
    </View>
  );
};

export default Clock;
