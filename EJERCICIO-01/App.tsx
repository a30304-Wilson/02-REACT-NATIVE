import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native</Text>
            <Text style={styles.subtitle}>Mi primera pantalla</Text>
            <Text style={styles.date}>Curso 2026/27</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5f9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 8,
        fontSize: 16,
        color: '#64748b',
    },
    date: {
        marginTop: 15,
        fontSize: 20,
        color: '#3c7bd4',
        fontWeight: 'bold',
    },
});