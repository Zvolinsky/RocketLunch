import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Text } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = [
  {
    question: "Czy to prawda, że aplikację piszą darmowi praktykanci?",
    answer: "Tak.",
  },
  {
    question:
      "Czy to prawda, że darmowym praktykantom NIE OFERUJECIE żadnych karnetów MultiSport?",
    answer: "Tak.",
  },
  {
    question:
      "To prawda, że jeden z tych darmowych praktykantów od niezbalansowanego trybu życia dostał dyskopatię kręgosłupa?",
    answer: "Tak.",
  },
  {
    question: "Czy to ten sam praktykant pisał tą aplikację?",
    answer: "Tak.",
  },
];

const QuestionCard = ({ content }) => {
  const [unfolded, setUnfolded] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.questionCard]}
      onPress={() => setUnfolded((s) => !s)}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "90%", paddingRight: 20 }}>
          <Text>{content.question}</Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!unfolded ? (
            <Ionicons name="add" size={30} />
          ) : (
            <Ionicons name="remove" size={30} />
          )}
        </View>
      </View>
      <View>{unfolded ? <Text>{content.answer}</Text> : null}</View>
    </TouchableOpacity>
  );
};

const HelpPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ gap: 30 }}>
          <Text>Najczęściej zadawane pytania:</Text>
          <View style={{ gap: 20 }}>
            {data.map((item, index) => (
              <QuestionCard key={index} content={item} />
            ))}
          </View>
        </View>
        <View>
          <Text>Wciąż masz pytania?</Text>
          <Text>
            Jeśli nie znalazłeś odpowiedzi na swoje pytanie w sekcji
            "Najczęściej zadawanych pytań", możesz skontaktować się z nami pod
            adresem email@emial.com. Postaramy się odpowiedzieć najszybciej, jak
            to możliwe.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HelpPage;

const styles = StyleSheet.create({
  container: {
    padding: 29,
    gap: 30,
  },
  questionCard: {
    borderWidth: 1,
    borderRadius: 9,
    padding: 20,
    gap: 20,
  },
});
