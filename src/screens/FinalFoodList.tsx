import { FC } from "react";

import { View, Text } from "react-native";

import { useSelector } from "react-redux";
import styles from "../styles";

const FinalFoodList: FC = () => {
  const { fooditems } = useSelector((state: any) => ({
    fooditems: state.fooditems,
  }));
  return (
    <View style={styles.list}>
      <Text>{JSON.stringify(fooditems)}</Text>
    </View>
  );
};

export default FinalFoodList;
