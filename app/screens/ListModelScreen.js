

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import BottomSheet from "react-native-modal";
import BackNavigationBar from "../components/BackNavigationBar";


const positions = [
  { id: "1", name: "Position 1" },
  { id: "2", name: "Position 2" },
  { id: "3", name: "Position 3" },
  { id: "4", name: "Position 4" },
  { id: "5", name: "Position 1" },
  { id: "6", name: "Position 2" },
  { id: "7", name: "Position 3" },
  { id: "8", name: "Position 4" },
  { id: "9", name: "Position 1" },
  { id: "10", name: "Position 2" },
  { id: "11", name: "Position 3" },
  { id: "12", name: "Position 4" },
];

const PositionModal = ({ visible, onClose, onSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text style={{ fontSize: 18, paddingVertical: 10 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <BottomSheet
      isVisible={visible}
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
      onSwipeComplete={onClose}
      swipeThreshold={100}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

    
      <View style={{ backgroundColor: "white", padding: 16 }}>
        <FlatList
          data={positions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </BottomSheet>
  );
};

export default ListModelScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
    closeModal();
  };

  return (
    <View style={{ flex: 1 }}>
      <BackNavigationBar
        iconLeft="arrow-back"
        iconRight="search"
        btnLeft={() => {
          navigation.goBack();
        }}
        title="Resume Collection"
        subtitle="Browse, edit and manage your collection of resumes"
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {selectedPosition ? (
          <Text>You have selected {selectedPosition.name}</Text>
        ) : (
          <TouchableOpacity onPress={openModal}>
            <Text>Select a Position</Text>
          </TouchableOpacity>
        )}

        <PositionModal
          visible={modalVisible}
          onClose={closeModal}
          onSelect={handlePositionSelect}
        />
      </View>
    </View>
  );
};

