import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const days = Array.from({ length: 21 }, (_, i) => i + 1); // Array of 21 days

const GoalProgress: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number | null>(null); // Selected day, null if none is selected

  return (
    <View style={styles.container}>
      {days.map((day) => (
        <TouchableOpacity
          key={day}
          onPress={() => setCurrentDay(day)}
          style={[styles.day, day === currentDay && styles.selectedDay]}
        >
          <Text style={styles.dayText}>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 16,
  },
  day: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    backgroundColor: "#ddd",
  },
  selectedDay: {
    backgroundColor: "#4caf50",
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GoalProgress;
