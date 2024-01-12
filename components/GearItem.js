import { StyleSheet, View, Text, Pressable } from "react-native"

function GearItem(props){
    return (
        <View style={styles.gearItem}>
            <Pressable 
            
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.gearText}>
            {props.text}
            </Text>
        </Pressable>
        </View>
    )
}

export default GearItem

const styles = StyleSheet.create({
    gearItem:{
        margin: 8,
        
        borderRadius:6,
        backgroundColor:"blue",
        color:"white"
    },
    pressedItem:{
        opacity: 0.5
    },
        gearText:{
        color:"white",
        padding:8,
    }
})