import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useContext } from 'react'
import { TextsContext } from "../Context/ContextWrapper"
// ItemList
import ItemList from './ItemList';

const Items = () => {
    const { data } = useContext(TextsContext);
    if (data.length == 0) {
        return <Text style={styles.text}>To add a element click to the plus button</Text>
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => <ItemList item={item.item} />}
                key={(Math.random() * 10000).toString()}
            />
        </View>
    )
}
export default Items
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    text: {
        marginTop: "90%",
        fontSize: 15,
        fontWeight: "600",
        letterSpacing: 2,
        paddingLeft: 20
    }
})