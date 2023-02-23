import { View, Text } from "react-native";
import React from "react";

import { ButtonAdd, ButtonText } from "./styles";

const AddButton = () => {
  return (
    <View>
      <ButtonAdd title="AddButton">
        <ButtonText>+ Add a Cryptocurrency</ButtonText>
      </ButtonAdd>
    </View>
  );
};

export default AddButton;
