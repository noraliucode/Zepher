import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

interface ProgressUploadProps {
  onSubmit: (url: string) => void;
}

const ProgressUpload: React.FC<ProgressUploadProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = () => {
    if (url) {
      onSubmit(url);
      setUrl("");
    } else {
      alert("Please input a valid URL.");
    }
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
