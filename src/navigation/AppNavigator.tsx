// AppNavigator.tsx
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../screens/Dashboard";
import GoalProgress from "../screens/GoalProgress";
import GoalSetup from "../screens/GoalSetup";
import ProgressUpload from "../screens/ProgressUpload";
import UserLogin from "../screens/UserLogin";
import UserRegistration from "../screens/UserRegistration";
import MainApp from "../screens/MainApp";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="UserRegistration" component={UserRegistration} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="GoalSetup" component={GoalSetup} />
      <Stack.Screen name="GoalProgress" component={GoalProgress} />
      <Stack.Screen name="ProgressUpload" component={ProgressUpload} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
