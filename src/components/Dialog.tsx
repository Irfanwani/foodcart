import { FC, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, showDialog } from "../store/reducers";
import styles from "../styles";

interface dp {
  id: number;
}

const Dialog: FC<dp> = ({ id }) => {
  const dispatch = useDispatch();

  const { showdialog } = useSelector((state: any) => ({
    showdialog: state.showdialog,
  }));

  const closeDialog = () => {
    dispatch(showDialog(false));
  };
  const deleteItem = () => {
    dispatch(removeItem(id));
    closeDialog();
  };
  return (
    <View style={styles.dialog}>
      <Animatable.View
        animation={showdialog ? "zoomIn" : "zoomOut"}
        style={styles.dialogbox}
        duration={250}
      >
        <Text style={styles.warning}>Are you Sure?</Text>
        <Text>This action cannot be reverted.</Text>

        <View style={styles.card}>
          <TouchableOpacity onPress={closeDialog} style={styles.cancel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteItem} style={styles.delete}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Dialog;
