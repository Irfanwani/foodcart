import { FC } from "react";

import { View, Text } from "react-native";
import styles from "../styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import { showDialog, showForm, updateItem } from "../store/reducers";

import { useDispatch } from "react-redux";

interface CardProps {
  item: {
    name: string;
    price: number;
  };
  index: number;
}

const Card: FC<CardProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  const removefood = () => {
    dispatch(showDialog({ bool: true, index }));
  };

  const editfood = () => {
    dispatch(showForm({ bool: true, index }));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text><Text style={styles.title}>Price:</Text> Rs.{item.price}</Text>
      <View style={styles.actions}>
        <Ionicons name="md-pencil" size={20} color="green" onPress={editfood} />
        <Ionicons name="trash" size={20} color="red" onPress={removefood} />
      </View>
    </View>
  );
};

export default Card;
