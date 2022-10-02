import Main from "./src/screens/Main";
import { FC } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedStore } from "./src/store/store";
import Loading from "./src/components/Loading";

import FinalFoodList from "./src/screens/FinalFoodList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={<Loading />}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="Details" component={FinalFoodList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
