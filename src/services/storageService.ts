// storage.ts
import axios from "axios";
import Config from "react-native-config";

const API_KEY = Config.BIN_API_KEY; // replace with your actual API key
const BIN_ID = Config.BIN_ID; // replace with your actual bin ID

const api = axios.create({
  baseURL: `https://api.jsonbin.io/v3/b/${BIN_ID}`,
  headers: {
    "X-Master-Key": API_KEY,
    "Content-Type": "application/json",
  },
});

export async function createGoal(userId: string, goal: any) {
  try {
    // Get current data
    const response = await api.get("/");
    const data = response.data.record;
    // Check if user already exists
    let user = data.users.find((user: any) => user.id === userId);
    if (user) {
      // If user exists, add goal to user's goals
      user.goals.push(goal);
    } else {
      // If user doesn't exist, create a new user with the goal
      user = {
        id: userId,
        goals: [goal],
      };
      data.users.push(user);
    }
    // Update the data in the bin
    await api.put("/", data);
  } catch (error: any) {
    console.error(error);
  }
}

export async function getGoals(userId) {
  try {
    const response = await api.get("/");
    const data = response.data.record;
    const user = data.users.find((user: any) => user.id === userId);

    return user ? user.goals : [];
  } catch (error) {
    console.error("Failed to fetch goals:", error);
    return [];
  }
}

export default {
  createGoal,
  getGoals,
};
