import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash2 = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../screens/image.png')}
                style={styles.image}
            />
            <ActivityIndicator size="large" color="#3480eb" style={styles.loader} />
        </View>
    );
};

export default Splash2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3480eb',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    loader: {
        position: 'absolute',
    },
});
