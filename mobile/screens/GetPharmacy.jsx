import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Sample data array for pharmacies
const pharmacyData = [
    { id: '1', image: require('../screens/phormacyimage.png'), address: '123 Main St, Mohali' },
    { id: '2', image: require('../screens/phormacyimage.png'), address: '456 South St, Mohali' },
    { id: '3', image: require('../screens/phormacyimage.png'), address: '789 West St, Mohali' },
    { id: '4', image: require('../screens/phormacyimage.png'), address: '101 North St, Mohali' },
    { id: '5', image: require('../screens/phormacyimage.png'), address: '202 East St, Mohali' },
];

const GetPharmacy = () => {
    // Animated value for button press feedback
    const animatedValue = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Background and header */}
            <View style={styles.rectangle31}>
                <TouchableOpacity style={styles.backArrow}>
                    <Ionicons name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.location}>Mohali</Text>
            </View>

            {/* Title */}
            <Text style={styles.pharmacyNearby}>Pharmacy Nearby</Text>

            {/* Horizontal scroll list */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
                {pharmacyData.map(item => (
                    <View key={item.id} style={styles.horizontalCard}>
                        <Image source={item.image} style={styles.horizontalImage} />
                        <Text style={styles.horizontalText}>{item.address}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Upload Section */}
            <View style={styles.uploadPrescriptionCard}>
                <Text style={styles.uploadPrescriptionTitle}>Upload Prescription</Text>
                <Text style={styles.uploadPrescriptionText}>
                    We will show the pharmacy that fits as per your prescription.
                </Text>
            </View>

            {/* Upload Prescription Section */}
            <View style={styles.rectangle38}>
                <View style={styles.iconContainer}>
                    <Ionicons name="document-outline" size={74} style={styles.fileIcon} />
                    <Text style={styles.iconText}>Upload Link</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="cloud-upload-outline" size={74} style={styles.uploadIcon} />
                    <Text style={styles.iconText}>Upload File</Text>
                </View>
            </View>

            {/* Continue Button with animated press effect */}
            <Animated.View style={[styles.continueButton, { transform: [{ scale: animatedValue }] }]}>
                <TouchableOpacity
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={styles.buttonInner}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </Animated.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 10,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: width * 0.05, // 5% padding from the sides
    },
    rectangle31: {
        width: '100%',
        height: height * 0.1, // 10% of screen height
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backArrow: {
        position: 'absolute',
        left: width * 0.05, // 5% from left side
        top: height * 0.03, // 3% from top
    },
    location: {
        fontSize: width * 0.05, // Dynamic font size based on screen width
        fontWeight: '500',
        color: '#000000',
    },
    pharmacyNearby: {
        fontSize: width * 0.07, // Adjust the title font size
        fontWeight: '600',
        color: '#000000',
        marginTop: height * 0.05, // 5% margin from the top
    },
    horizontalList: {
        marginVertical: height * 0.02, // 2% margin top and bottom
    },
    horizontalCard: {
        marginRight: width * 0.04, // Gap between horizontal cards
        width: width * 0.4, // 40% of screen width
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    horizontalImage: {
        width: '100%',
        height: width * 0.3, // 30% of screen width
        borderRadius: 10,
    },
    horizontalText: {
        marginTop: 8,
        fontSize: width * 0.035, // 3.5% of screen width
        textAlign: 'center',
        color: '#000',
    },
    flatListContainer: {
        paddingVertical: height * 0.02, // 2% padding at the top and bottom of FlatList
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: height * 0.02, // 2% margin between cards
        padding: width * 0.03, // Padding inside each card
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    cardImage: {
        width: width * 0.2, // 20% of screen width
        height: width * 0.2, // Make it a square
        borderRadius: 10,
        marginRight: width * 0.05, // 5% margin to the right of the image
    },
    cardAddress: {
        fontSize: width * 0.045, // 4.5% of screen width for font size
        color: '#000',
    },
    continueButton: {
        width: '100%',
        height: height * 0.07, // 7% of screen height
        backgroundColor: '#41B592',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.05, // 5% margin from top
    },
    buttonInner: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    continueText: {
        fontSize: width * 0.08, // Dynamic font size based on screen width
        color: '#FFFFFF',
    },
    bottomNavigation: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: height * 0.07, // 7% of screen height
        bottom: 0,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        alignItems: 'center',
    },
    navIcon: {
        paddingHorizontal: 20,
    },
    uploadPrescriptionCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    prescriptionIcon: {
        color: '#41B592',
        marginBottom: 10,
    },
    uploadPrescriptionTitle: {
        fontSize: width * 0.05,
        fontWeight: '700',
        color: '#000',
        marginBottom: 10,
    },
    uploadPrescriptionText: {
        fontSize: width * 0.04,
        color: '#555',
        textAlign: 'center',
    },
    rectangle38: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 30,
    },
    iconContainer: {
        alignItems: 'center',
    },
    fileIcon: {
        color: '#41B592',
    },
    uploadIcon: {
        color: '#41B592',
    },
    iconText: {
        fontSize: width * 0.045,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default GetPharmacy;
