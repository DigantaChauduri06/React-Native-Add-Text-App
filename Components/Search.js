import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import { useContext } from 'react'
import { TextsContext } from '../Context/ContextWrapper';


const Search = ({ text, addElements, setText }) => {

    const { data, setData } = useContext(TextsContext);

    const HandleSearch = (e) => {
        setText(e)
        if (data.length === 0) return
        const updatedData = data.filter((str) => {

            return str.toLowerCase().startsWith(e.toLowerCase())
        })
        console.log(updatedData);
        setData(updatedData);
    }
    return (
        <View style={styles.containter}>
            <View style={styles.textinputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(e) => HandleSearch(e)}
                    value={text}
                />
                <TouchableOpacity onPress={addElements}>
                    <Image source={require("../assets/Image/Plus.png")} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Search
const styles = StyleSheet.create({
    containter: {
        flex: 1,
        marginTop: 60,

    },
    input: {
        width: "80%",
        borderWidth: 2,
        borderColor: "#111",
        height: 42,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 18,
    },
    textinputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    icon: {
        width: 30,
        height: 30,
    }
})