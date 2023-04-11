import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 2
    },
    label: {
        fontSize: 17,
        marginTop: 10,
        color: 'black'
    },
    container: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 40,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    calcButton: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '45%',
    },
    textButton: {
        color: 'white',
        fontSize: 18,
    },
    errorMessage: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 10,
        marginBottom: 5,
    },
    cleanButton: {
        marginTop: 20,
        backgroundColor: '#212CFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '45%',
    }
});

export default styles;