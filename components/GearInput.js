import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'

function GearInput(props){
    const [enteredGearText, setEnteredGearText] = useState('')

    function gearInputHandler(enteredText){
        setEnteredGearText(enteredText)
    }

    function addGearHandler(){
        props.onAddGear(enteredGearText)
        setEnteredGearText('')
    }
    
    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput style={styles.textInput} 
            placeholder='Add a piece of gear!' 
            onChangeText={gearInputHandler}
            value={enteredGearText}/>
            <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Add Gear" onPress={addGearHandler} color='#f31282'/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
            </View>
            </View>
        </View>
        </Modal>
    )
}

export default GearInput

const styles= StyleSheet.create({
    inputContainer:{
        flex: 1,
        
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        
        
        backgroundColor: '#311b6b'
    },
    textInput:{
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: "#120438",
        width:"100%",
        borderRadius: 6,
        padding: 16
        },
    image:{
        width: 100,
        height: 100,
        margin: 20
    },
    buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})