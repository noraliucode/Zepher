import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Input,
  Button,
  Icon,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { updateProgress } from "../services/storageService";

const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;

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
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <Text category="h1">Upload Your Progress</Text>
          <Input
            style={styles.input}
            placeholder="URL"
            value={url}
            onChangeText={setUrl}
            autoCapitalize="none"
            keyboardType="url"
            textContentType="URL"
          />
          <Button style={styles.button} onPress={handleSubmit}>
            Submit
          </Button>
          <Button
            style={styles.fab}
            accessoryLeft={PlusIcon}
            onPress={handleSubmit}
          />
        </Layout>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 16,
  },
  button: {
    marginVertical: 8,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});

export default ProgressUpload;
