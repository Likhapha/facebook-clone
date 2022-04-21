import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Fontisto, AntDesign, FontAwesome, } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <View style={styles.line1}><AntDesign name="left" size={40} color="black" /><FontAwesome name="sliders" size={40} color="black" padding-left={5} /></View>
            <View style={styles.line2}> <FontAwesome name="search" size={35} color="white" /><Text style={styles.first}>Mohlabi Johannes</Text></View>
            <View style={styles.main}>
                <View style={styles.rection}>

                    <View style={styles.header}>
                        <Image
                            style={styles.photo}
                            source={require('./assets/fish.jpg')}
                        />
                        <View style={styles.postDetails}>
                            <Text style={styles.owner}>Mohlabi Johannes</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.date}>Yesterday</Text>
                                <Fontisto name='world-o' size={15} color='#9E9E9E' />
                            </View>
                        </View>

                    </View>
                    <Text style={styles.text}>you can lead a horse to water but you can't make it drink.
                        you can lead a horse to water, but you can't make it drink.
                        you can take a horse to water, but you can't make him drink.
                    </Text>

                    <View>
                        <Image
                            style={styles.postImage}
                            source={require('./assets/dam.jpg')} />
                    </View>
                </View>
                <Text>{count} Like</Text>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerButton}
                        onPress={onPress}>
                        <AntDesign name='like1' size={24} color='#9E9E9E' />
                        <Text style={styles.footerText}>Like</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    first: {
        fontSize: 18
    },

    text: {
        fontSize: 12,
        fontWeight: "bold",
        flexDirection: 'column',
        paddingVertical: 10,
        padding: 10,

    },

    line1: {
        height: 110,
        width: '75%',
        backgroundColor: '#1877F2',
        marginTop: -100,
        marginVertical: 5,
        borderRadius: 5,
        justifyContent: 'space-between',
        borderWidth: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,



    },

    line2: {
        width: '60%',
        height: 50,
        backgroundColor: '#283593',
        alignSelf: 'center',
        marginTop: -80,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },

    main: {
        backgroundColor: '#fff',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        width: '70%',
        marginTop: 30,
        height: '30%'
    },
    postBody: {
        padding: 10,
    },
    photo: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 30,
    },
    header: {
        flexDirection: 'row',
        padding: 10,
    },
    owner: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,

    },
    date: {
        color: '#9E9E9E',
        marginRight: 5,
        fontSize: 13,


    },

    text1: {
        padding: 10,
        alignSelf: 'flex-start',
        marginVertical: 5,

    },
    postImage: {
        width: '100%',
        height: 300,

    },
    footer: {
        height: 30,
        flexDirection: 'row',
        width: '98%',
        backgroundColor: '#ECEFF1',
        alignItem: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    footerText: {
        marginLeft: 5,
        color: '#9E9E9E',
        fontWeight: 'bold',
    },
});
