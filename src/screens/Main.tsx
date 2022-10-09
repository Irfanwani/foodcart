import { FC, useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { showForm, shuffleItems } from "../store/reducers";
import Card from "../components/Card";
import {
  Listempty,
  Listfooter,
  Listheader,
} from "../components/ListComponents";
import styles from "../styles";
import Form from "../components/Form";
import Dialog from "../components/Dialog";

import { AutoDragSortableView } from "react-native-drag-sort";

const { width } = Dimensions.get("window");

const parentWidth = width;
const childrenWidth = width;
const childrenHeight = 48;

interface MainProps {
  navigation: any;
}

const Main: FC<MainProps> = ({ navigation }) => {
  const { fooditems, showform, showdialog, index } = useSelector(
    (state: any) => ({
      fooditems: state.fooditems,
      showform: state.showform,
      showdialog: state.showdialog,
      index: state.index,
    })
  );

  const [showf, setShowf] = useState(false);

  const [showd, setShowd] = useState(false);

  const gotosecond = () => {
    navigation.navigate("Details");
  };

  useEffect(() => {
    if (!showform) {
      setTimeout(() => {
        setShowf(false);
      }, 300);
    } else {
      setShowf(true);
    }
  }, [showform]);

  useEffect(() => {
    if (!showdialog) {
      setTimeout(() => {
        setShowd(false);
      }, 250);
    } else {
      setShowd(true);
    }
  }, [showdialog]);

  const dispatch = useDispatch();

  const sf = () => {
    dispatch(showForm({ bool: true, index: -1 }));
  };

  return (
    <View style={styles.mainview}>
      {!fooditems.length && <Listempty />}

      <AutoDragSortableView
        dataSource={fooditems}
        parentWidth={parentWidth}
        childrenWidth={childrenWidth}
        marginChildrenBottom={10}
        marginChildrenTop={10}
        childrenHeight={childrenHeight}
        renderHeaderView={fooditems.length ? <Listheader /> : <></>}
        renderBottomView={<Listfooter onPress={sf} disabled={false} />}
        onDataChange={(data: Array<Object>) => {
          dispatch(shuffleItems(data));
        }}
        keyExtractor={(item: { name: string; price: number }, index: number) =>
          index.toString()
        }
        renderItem={renderItem}
      />

      <TouchableOpacity onPress={gotosecond} style={styles.additem}>
        <Text>Show All Items</Text>
      </TouchableOpacity>
      {showf && <Form />}

      {showd && <Dialog id={index} />}
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

const renderItem = (item: { name: string; price: number }, index: number) => {
  return <Card key={index} item={item} index={index} />;
};
