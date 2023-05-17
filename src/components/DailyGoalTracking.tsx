import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

interface DailyGoalTrackingProps {
  goal: string;
  totalTime: number;
  onTimeUpdate: (newTime: number) => void;
}

const DailyGoalTracking: React.FC<DailyGoalTrackingProps> = ({
  goal,
  totalTime,
  onTimeUpdate,
}) => {
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    let interval: any;

    if (timerRunning) {
      setStartTime(Date.now());
      interval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        onTimeUpdate(totalTime + elapsedTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  return (
    <View>
      <Text>{`Goal: ${goal}`}</Text>
      <Text>{`Total Time: ${totalTime} seconds`}</Text>
      <Button
        title={timerRunning ? "Stop" : "Start"}
        onPress={() => setTimerRunning(!timerRunning)}
      />
    </View>
  );
};

export default DailyGoalTracking;
