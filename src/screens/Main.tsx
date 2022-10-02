import { FC } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addItem, removeItem, updateItem } from "../store/reducers";
import Card from "../components/Card";
import {
  Listempty,
  Listfooter,
  Listheader,
} from "../components/ListComponents";
import styles from "../styles";

const Main: FC = () => {
  const { fooditems } = useSelector((state: any) => ({
    fooditems: state.fooditems,
  }));

  const dispatch = useDispatch();

  return (
    <FlatList
      style={styles.list}
      data={fooditems}
      renderItem={renderItem}
      keyExtractor={(item) => fooditems.indexOf(item)}
      ListEmptyComponent={<Listempty />}
      ListFooterComponent={<Listfooter onPress={() => {}} disabled={false} />}
      ListHeaderComponent={<Listheader />}
    />
  );
};

export default Main;

interface renderProps {
  item: {
    name: string;
    price: number;
  };
  index: number;
}

const renderItem = ({ item, index }: renderProps) => {
  return <Card item={item} />;
};
