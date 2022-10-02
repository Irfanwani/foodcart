import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyview: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptytext: {
    color: 'grey',
    fontSize: 20
  },
  additem: {
    width: '80%',
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    opacity: 0.5,
    alignSelf: 'center'
  },

  additem_disabled: {
    width: '80%',
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    opacity: 0.5,
    alignSelf: 'center'
  },

  divider: {
    borderColor: 'grey',
    borderWidth: 0.3,
    margin: 10
  },
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 5
    
  },
  form: {
    margin: 10,
  },
  list: {
    marginTop: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'center',
    margin: 10
  },
  sheet: {
    shadowRadius: 5,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderColor: 'orange',
    borderWidth: 1
  }
});

export default styles;