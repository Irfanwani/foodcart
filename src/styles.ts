import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    paddingBottom: 20,
  },
  title: {
    fontWeight: "bold",
    maxWidth: 50,
  },
  card: {
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "grey",
    borderWidth: 0.5,
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "rgba(50, 50, 50, 0.1)",
    width: Dimensions.get("window").width - 20,
    maxHeight: 60
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyview: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  emptytext: {
    color: "grey",
    fontSize: 20,
  },
  additem: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "green",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    opacity: 0.5,
    alignSelf: "center",
  },

  additem_disabled: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "grey",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    opacity: 0.5,
    alignSelf: "center",
  },

  divider: {
    borderColor: "grey",
    borderWidth: 0.3,
    margin: 10,
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    padding: 7,
    borderRadius: 5,
  },
  form: {
    margin: 10,
  },
  list: {
    marginTop: 50,
  },
  header: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 30,
    color: "teal",
  },
  sheet: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderColor: "orange",
    borderWidth: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    backgroundColor: "white",
  },
  formhead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formmainview: {
    flex: 1,
    position: "absolute",
    backgroundColor: "rgba(50, 50, 50, 0.4)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginTop: 30,
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    color: "grey",
  },
  warning: {
    color: "red",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  cancel: {
    borderWidth: 0.5,
    borderColor: "grey",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(50, 50, 50, 0.3)",
  },
  delete: {
    borderWidth: 0.5,
    borderColor: "red",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255, 0, 0, 0.4)",
  },
  dialog: {
    flex: 1,
    position: "absolute",
    backgroundColor: "rgba(50, 50, 50, 0.4)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dialogbox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.4,
  },
  price: {
    maxWidth: 100,
  },
});

export default styles;
