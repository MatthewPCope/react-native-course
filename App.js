import { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGearText, setEnteredGearText] = useState('')
  const [courseGear, setCourseGear] = useState([])
  
  function gearInputHandler(enteredText){
    setEnteredGearText(enteredText)
  }
  function addGearHandler(){
    setCourseGear( currentCourseGear => [
      ...currentCourseGear,
      enteredGearText,
    ])
  }

  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} 
            placeholder='Add a piece of gear!' 
            onChangeText={gearInputHandler}/>
          <Button title="Add Gear" onPress={addGearHandler}/>
        </View>
        <View style={styles.gearContainer}>
          {courseGear.map((gear) => <Text style={styles.gearItem}key={gear}>{gear}</Text>)}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#cccccc",
    width:"70%",
    marginRight:8,
    padding: 8
  },
  gearContainer:{
    flex: 5
  },
  gearItem:{
    margin: 8,
    padding:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
    color:"white"
  }
});
