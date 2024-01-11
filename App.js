import { useState } from 'react';

import { StyleSheet, View, FlatList, Button } from 'react-native';
import GearItem from './components/GearItem';
import GearInput from './components/GearInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const [courseGear, setCourseGear] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  function addGearHandler(enteredGearText){
    setCourseGear( currentCourseGear => [
      ...currentCourseGear,
      {text: enteredGearText, id: Math.random().toString()},
    ])
    endAddGearHandler()
  }
  function deleteGearHandler(id){
    setCourseGear(currentCourseGear => {
      return currentCourseGear.filter((gear) => gear.id !== id)
    })
  }
  function startAddGearHandler(){
    setModalIsVisible(true)
  }
  function endAddGearHandler(){
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
        <Button 
          title="Add New Gear" 
          color="#f31282" 
          onPress={startAddGearHandler}/>
        <GearInput visible={modalIsVisible} onAddGear={addGearHandler} onCancel={endAddGearHandler}/>
        <View style={styles.gearContainer}>
        <FlatList 
          data={courseGear}
          renderItem={(itemData) => {
            return (
              <GearItem 
                text={itemData.item.text} 
                id={itemData.item.id} 
                onDeleteItem={deleteGearHandler}
              />
            )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        />
          
        
        </View>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },
  
  gearContainer:{
    flex: 5
  },
  
});
