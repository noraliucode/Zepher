// storage.ts
import axios from "axios";
import Config from "react-native-config";
import { GoalId } from "../utils/types";

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

export const getGoal = async (userId: string, goalId: GoalId) => {
  const response = await api.get("/");
  const data = response.data.record;

  const user = data.users.find((user: any) => user.id === userId);
  if (user) {
    const goal = user.goals.find((goal: any) => goal.id === goalId);
    if (goal) {
      return goal;
    } else {
      throw new Error("Goal not found");
    }
  } else {
    throw new Error("User not found");
  }
};

export const updateProgress = async (
  userId: string,
  goalId: string,
  newProgress: { timestamp: number; link: string }
) => {
  try {
    // First, get the existing data
    const response = await api.get("/");
    const data = response.data.record;

    // Find the user and the goal
    const user = data.users.find((u: { id: string }) => u.id === userId);
    if (!user) throw new Error(`User with ID ${userId} not found`);

    const goal = user.goals.find((g: { id: string }) => g.id === goalId);
    if (!goal) throw new Error(`Goal with ID ${goalId} not found`);

    // Add the new progress to the goal
    goal.progress.push(newProgress);

    // Update the data on the server
    await api.put("/", data);

    return goal;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  createGoal,
  getGoals,
  getGoal,
  updateProgress,
};
