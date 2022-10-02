import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainview: {
    flex: 1
  },
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
    padding: 7,
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
    alignSelf: 'center',
    margin: 10,
    color: 'teal'
  },
  sheet: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderColor: 'orange',
    borderWidth: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'white'
  },
  formhead: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  formmainview: {
    flex: 1, 
    position: 'absolute',
    backgroundColor: 'rgba(50, 50, 50, 0.4)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 30,
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'grey'
  },
  warning: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
});

export default styles;