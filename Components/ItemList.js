import { StyleSheet, Text, View } from 'react-native'
const ItemList = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item}</Text>
        </View>
    )
}
export default ItemList
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    text: {
        textTransform: "capitalize",
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 2,
        borderBottomColor: "#111",
        borderBottomWidth: 2,
    }
})