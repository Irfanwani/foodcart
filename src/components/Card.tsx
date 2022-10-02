import { FC } from "react";

import { View, Text } from "react-native";
import styles from "../styles";

interface CardProps {
  item: {
    name: string;
    price: number;
  };
}

const Card: FC<CardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text>{item.name}</Text>
      <Text>Price: {item.price}</Text>
    </View>
  );
};

export default Card;
