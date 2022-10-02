import { FC, useState } from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../styles";
import { Listfooter } from "./ListComponents";
import * as Animatable from "react-native-animatable";

import { useDispatch } from "react-redux";
import { addItem } from "../store/reducers";


const Form: FC = () => {
  const [animation, setAnimation] = useState("slideInUp");

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const addfood = () => {
    dispatch(addItem({ name, price: parseInt(price) }));
  };

  const changeAnimation = () => {
    if (animation == "slideInUp") {
      setAnimation("slideOutDown");
    } else {
      setAnimation("slideInUp");
    }
  };

  return (
    <Animatable.View style={styles.sheet} animation={animation} useNativeDriver={true}>
      <View style={styles.form}>
        <View>
        <Text>Add Food</Text>
        </View>
        <View>
          <Text>Food Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View>
          <Text>Food Price</Text>
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
  );
};

export default Form;
