import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import GetPharmacy from './GetPharmacy';

const Header = ({ title }) => (
    <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
            <Entypo name="menu" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="mic-circle-outline" size={50} color="black" />
        </TouchableOpacity>
    </View>
);

const CardSection = ({ title, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
);

export const UploadSection = () => (
    <View style={styles.uploadSection}>
        <Text style={styles.uploadPrescription}>UPLOAD PRESCRIPTION</Text>
        <Text style={styles.uploadDescription}>
            Upload a Prescription and Tell Us What you Need. We do the Rest.!
        </Text>
        <Text style={styles.discountText}>Flat 25% OFF ON MEDICINES</Text>
        <TouchableOpacity style={styles.orderNowButton}>
            <Text style={styles.orderNowText}>ORDER NOW</Text>
        </TouchableOpacity>
    </View>
);

const Homes = () => (
    <ScrollView style={styles.container}>
        <Header title="Home" />

        <View style={styles.cardRow}>
            <CardSection title="Questions" onPress={() => { /* Handle navigation */ }} />
            <CardSection title="Reminders" onPress={() => { /* Handle navigation */ }} />
        </View>
        <View style={styles.cardRow}>
            <CardSection title="Messages" onPress={() => { /* Handle navigation */ }} />
            <CardSection title="Calendar" onPress={() => { /* Handle navigation */ }} />
        </View>

        <UploadSection />

        <View style={styles.groupSection}></View>
        <View style={styles.groupSection}></View>
    </ScrollView>
);

const PostRoute = () => (
    <ScrollView style={styles.container}>
        <Header title="Home" />

        <View style={styles.cardRow}>
            <CardSection title="Questions" onPress={() => { /* Handle navigation */ }} />
            <CardSection title="Reminders" onPress={() => { /* Handle navigation */ }} />
        </View>
        <View style={styles.cardRow}>
            <CardSection title="Messages" onPress={() => { /* Handle navigation */ }} />
            <CardSection title="Calendar" onPress={() => { /* Handle navigation */ }} />
        </View>

        <UploadSection />

        <View style={styles.groupSection}></View>
        <View style={styles.groupSection}></View>
    </ScrollView>
);

const NotificationRoute = () => (
    <ScrollView style={styles.container}>
        <GetPharmacy />
    </ScrollView>
);

const JobsRoute = () => (
    <ScrollView style={styles.container}>
        <Header title="Home" />

        <View style={styles.cardRow}>
            <CardSection title="Questions" onPress={() => { /* Handle navigation */ }} />
            <CardSection title="Reminders" onPress={() => { /* Handle navigation */ }} />
        </View>
        <View style={styles.cardRow}>
            <CardSection title="Messages" onPress={() => { /* Handle navigation */ }} />
            <CardSection title="Calendar" onPress={() => { /* Handle navigation */ }} />
        </View>

        <UploadSection />

        <View style={styles.groupSection}></View>
        <View style={styles.groupSection}></View>
    </ScrollView>
);

const Home = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'homes', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'post', title: 'Post', focusedIcon: 'plus-circle', unfocusedIcon: 'plus-circle-outline' },
        { key: 'jobs', title: 'Jobs', focusedIcon: 'briefcase', unfocusedIcon: 'briefcase-outline' },
        { key: 'notification', title: 'Notification', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        homes: Homes,
        post: PostRoute,
        notification: NotificationRoute,
        jobs: JobsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            shifting={true}
        />
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        paddingTop: 30,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5,
    },
    iconButton: {
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    card: {
        flexBasis: '48%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#3A3A3A',
    },
    uploadSection: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 15,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        width: '90%',
        alignSelf: 'flex-start',
        minHeight: 250,
    },
    uploadPrescription: {
        fontSize: 22,
        fontWeight: '700',
        color: '#3A3A3A',
    },
    uploadDescription: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3A3A3A',
        textAlign: 'left',
        marginVertical: 10,
    },
    discountText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4A4A4A',
    },
    orderNowButton: {
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1C82DF',
        borderRadius: 10,
        alignItems: 'center',
    },
    orderNowText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
    },
    groupSection: {
        width: '100%',
        height: 178,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginVertical: 10,
    },
    input: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
        fontSize: 16,
    },
    centerText: {
        textAlign: 'center',
    },
});

export default Home;
