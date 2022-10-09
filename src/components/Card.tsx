import { FC } from "react";

import { View, Text } from "react-native";
import styles from "../styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import Materialicons from "@expo/vector-icons/MaterialIcons";
import { showDialog, showForm } from "../store/reducers";

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

  const showDetails = () => {
    alert(JSON.stringify(item));
  };

  return (
    <View style={styles.card}>
      <Materialicons name="drag-indicator" size={20} color="grey" />
      <Materialicons name="info-outline" size={20} color='blue' onPress={showDetails}  />
      <Text style={styles.title}>
        {item.name.length > 6 ? item.name.slice(0, 3) + "..." : item.name}
      </Text>
      <Text style={styles.price}>
        <Text style={styles.title}>Price:</Text> Rs.
        {item.price.toString().length > 5
          ? item.price.toString().slice(0, 3) + "..."
          : item.price.toString()}
      </Text>
      <View style={styles.actions}>
        <Ionicons name="md-pencil" size={20} color="green" onPress={editfood} />
        <Ionicons name="trash" size={20} color="red" onPress={removefood} />
      </View>
    </View>
  );
};

export default Card;
