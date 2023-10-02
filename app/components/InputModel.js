import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RMText from "./RMText";
import colors from "../config/colors";


export default function MyModal(props) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.visible) {
      inputRef.current.focus();
    }
  }, [props.visible]);

  const handleSave = () => {
    props.onSave(text);
    console.log(text);
    setText("");
    props.onClose();
  };

  const handleCancel = () => {
    setText("");
    props.onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <RMText style={styles.title}>Enter Responsibilities</RMText>

          <TextInput
           
            // multiline
            // numberOfLines={2}
            // maxLength={100}
            ref={inputRef}
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Add Responsibilities"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
              <RMText style={styles.buttonText}>Cancel</RMText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <RMText style={styles.buttonText}>Save</RMText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    maxHeight: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.appColor,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
