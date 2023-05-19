import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { updateProgress } from "../services/storageService";

interface ProgressUploadProps {
  route: { params: { userId: string; goalId: string } };
}

const ProgressUpload: React.FC<ProgressUploadProps> = ({ route }) => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async () => {
    const newProgress = { timestamp: Date.now(), link: url };
    await updateProgress(route.params.userId, route.params.goalId, newProgress);
    setUrl("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Your Progress</Text>
      <TextInput
        style={styles.input}
        placeholder="URL"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
        keyboardType="url"
        textContentType="URL"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProgressUpload;
