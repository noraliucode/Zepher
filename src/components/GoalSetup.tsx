import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

interface GoalSetupProps {
  onGoalSet: (goal: string, time: number) => void;
}

const GoalSetup: React.FC<GoalSetupProps> = ({ onGoalSet }) => {
  const [goal, setGoal] = useState<string>("");
  const [time, setTime] = useState<number>(0);

  const handleGoalSet = () => {
    if (goal && time > 0) {
      onGoalSet(goal, time);
      setGoal("");
      setTime(0);
    } else {
      // alert("Please input a valid goal and time.");
    }
  };

  return (
    <View>
      <Text>Set Your Goal</Text>
      <TextInput placeholder="Your goal" value={goal} onChangeText={setGoal} />
      <TextInput
        placeholder="Time (in minutes)"
        value={String(time)}
        onChangeText={(text) => setTime(Number(text))}
        keyboardType="numeric"
      />
      <Button title="Set Goal" onPress={handleGoalSet} />
    </View>
  );
};

export default GoalSetup;
