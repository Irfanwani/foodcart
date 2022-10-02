import { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "../styles";

import Ionicons from "@expo/vector-icons/Ionicons";

export const Listempty: FC = () => {
  return (
    <View style={styles.emptyview}>
      <Text style={styles.emptytext}>Cart is Empty!</Text>
    </View>
  );
};

interface lfprops {
  onPress: any;
  disabled: boolean;
}
export const Listfooter: FC<lfprops> = ({ onPress, disabled }) => {
  return (
    <View>
      <View style={styles.divider} />
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={disabled ? styles.additem_disabled : styles.additem}
      >
        <Ionicons name='add' size={25} />
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Listheader: FC = () => {
  return <Text style={styles.header}>Food Items</Text>;
};
