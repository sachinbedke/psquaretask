import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash1 = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
        </View>
    );
};

export default Splash1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3480eb',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
