import React, { useState } from "react";
import { Text, TextInput, View, Pressable, Vibration, ToastAndroid } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o seu peso e altura');
    const [imc, setImc] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function cleanFields() {
        setHeight(null);
        setWeight(null);
        setImc(null);
        setMessageImc('Preencha o seu peso e altura');
    }

    function validateImc() {
        if (height != null && weight != null) {
            imcCalculator();
            setMessageImc("Seu imc é igual à:");
            setErrorMessage(null);
        } else {
            cleanFields();
            setErrorMessage("Campo obrigatório *");
            Vibration.vibrate(100);
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 5, padding: 20 }}>
                <Text style={styles.label}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput value={height} onChangeText={setHeight} placeholder="Ex. 1.70" keyboardType="numeric" style={styles.input} />
                <Text style={styles.label}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput value={weight} onChangeText={setWeight} placeholder="Ex. 50.8kg" keyboardType="numeric" style={styles.input} />
                <View style={{ height: '18%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => validateImc()} style={styles.calcButton}>
                        <Text style={styles.textButton}>Calcular</Text>
                    </Pressable>
                    <Pressable onPress={() => cleanFields()} style={styles.cleanButton}>
                        <Text style={styles.textButton}>Limpar</Text>
                    </Pressable>
                </View>
            </View>
            <ResultImc resultImc={imc} messageResultImc={messageImc}></ResultImc>
        </View>
    );
}