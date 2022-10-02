import { FC, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { showForm } from "../store/reducers";
import Card from "../components/Card";
import {
  Listempty,
  Listfooter,
  Listheader,
} from "../components/ListComponents";
import styles from "../styles";
import Form from "../components/Form";

const Main: FC = () => {
  const { fooditems, showform } = useSelector((state: any) => ({
    fooditems: state.fooditems,
    showform: state.showform,
  }));

  const [showf, setShowf] = useState(false);

  useEffect(() => {
    if (!showform) {
      setTimeout(() => {
        setShowf(false);
      }, 300);
    }else {
      setShowf(true)
    }
  }, [showform]);

  const dispatch = useDispatch();

  const sf = () => {
    dispatch(showForm(true));
  };

  return (
    <View style={styles.mainview}>
      <FlatList
        style={styles.list}
        data={fooditems}
        renderItem={renderItem}
        keyExtractor={(item) => fooditems.indexOf(item)}
        ListEmptyComponent={<Listempty />}
        ListFooterComponent={<Listfooter onPress={sf} disabled={false} />}
        ListHeaderComponent={fooditems.length && <Listheader />}
      />

      {showf && <Form />}
    </View>
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
  return <Card key={index} item={item} index={index} />;
};
