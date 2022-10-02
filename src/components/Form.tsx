import { FC, useState } from "react";
import { TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import styles from "../styles";
import { Listfooter } from "./ListComponents";
import * as Animatable from "react-native-animatable";

import { useDispatch, useSelector } from "react-redux";
import { addItem, showForm } from "../store/reducers";

import Ionicons from "@expo/vector-icons/Ionicons";

const Form: FC = () => {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const { showform } = useSelector((state: any) => ({
    showform: state.showform,
  }));

  const dispatch = useDispatch();

  const addfood = () => {
    dispatch(addItem({ name, price: parseInt(price) }));
    closeform();
  };

  const closeform = () => {
    setName("");
    setPrice("");
    dispatch(showForm(false));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.formmainview}>
      <Animatable.View
        style={styles.sheet}
        animation={showform ? "slideInUp" : "fadeOutDown"}
        useNativeDriver={true}
        duration={300}
      >
        <View style={styles.form}>
          <View style={styles.formhead}>
            <Text style={styles.header}>Add Food</Text>
            <Ionicons name="close" size={32} color="grey" onPress={closeform} />
          </View>
          <View>
            <Text style={styles.label}>Food Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View>
            <Text style={styles.label}>Food Price</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={price.toString()}
              onChangeText={setPrice}
            />
          </View>

          <Listfooter onPress={addfood} disabled={!name || !price} />
        </View>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

export default Form;
