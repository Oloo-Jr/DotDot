import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, TextInput, ImageBackground, Image } from 'react-native';
import Card from '../components/card';
import { Dimensions } from 'react-native';
import TitleText from '../components/TitleText';
import * as Location from 'expo-location';
import SubText from '../components/SubText';
import { Icon } from 'react-native-elements';



const DeliveryScreen = ({ navigation }) => {




    /*  const renderGridItem = itemData => {
          return (
              ////COMPONENT IMPORTED TO RENDER FLATLIST ITEMS//////
              <Gigs
                  name={itemData.item.name}
  
                  image={itemData.item.image}
                  location={itemData.item.location}
                  service={itemData.item.service}
                  remarks={itemData.item.remarks}
                  onSelect={() => { navigation.replace("QuoteScreen", { state: 0 }) }}
  
  
              />
          )
      }*/

    //Get the location of the user
    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("Please grant location permissions")
                return;
            }

            let curretLocation = await Location.getCurrentPositionAsync({});
            setLocation(curretLocation);
            console.log("Location:");
            console.log(curretLocation);
        };
        getPermissions();
        geocode();


    }, [])

    //Get the Town using Latitude and Longitude
    const geocode = async () => {
        const geocodedAddress = await Location.reverseGeocodeAsync({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude
        });
        setAddress(geocodedAddress[0].city);
        console.log('reverseGeocode:');
        console.log(geocodedAddress[0].city);

    }








    return (


        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.imageBackground}
            >


            

         




                <View style={styles.gigs}>

                    <Card style={styles.prodCard}>

                        <View style={styles.map}>

                        </View>

                        <View style={styles.orderDetails}>

                            <View style={styles.buttonView}>

<Text style={styles.text2}>Confirm arrival at destination</Text>
                                <Card style={styles.confirmButton}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("AcceptedRequest", { state: 0 }) }}>
                                    <Text style={styles.text2c}>
                                           Confirm arrival at destination
                                        </Text>
                                    </TouchableOpacity>
                                </Card>

                                <Text style={styles.text2}>Request Payment</Text>

                                <Card style={styles.acceptButton}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("AcceptedRequest", { state: 0 }) }}>
                                    <Text style={styles.text2c}>
                                           Request Payment
                                        </Text>
                                    </TouchableOpacity>
                                </Card>


                            </View>

                          



                        </View>





                    </Card>






                </View>
            </ImageBackground>


        </View>





    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#001B2E',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        //paddingTop: 50
    },

    orderDetails: {
        padding: 10,
        justifyContent: 'space-between',
        height: '80%'
    },

    title1: {
        fontFamily: 'Lexend-light',
        fontSize: 25,
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold'



    },


////////////TEXT STYLES///////////////////
text1: {
    fontFamily: 'Lexend-light',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
},

text2: {
    fontFamily: 'Lexend-bold',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
},

text2b: {
    fontFamily: 'Lexend-bold',
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold'
},

text2c: {
    fontFamily: 'Lexend-bold',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
},

text2d: {
    fontFamily: 'Lexend-bold',
    fontSize: 15,
    color: '#8CC740',
    fontWeight: 'bold'
},

text2e: {
    fontFamily: 'Lexend-bold',
    fontSize: 19,
    color: '#8CC740',
    fontWeight: 'bold'
},

text3: {
    fontFamily: 'Lexend-light',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
},

text4: {
    fontFamily: 'Lexend-bold',
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold'
},

text5: {
    fontFamily: 'Lexend-light',
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold'
},

text6: {
    fontFamily: 'Lexend-light',
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold'
},

////////////TEXT STYLES///////////////////

    gigs: {
        padding: 10
    },

    statsCard: {
        width: 164,
        height: 80,
        shadowColor: 'white',
        padding: 10
    },

    statsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 50
    },
    imageBackground: {
        //  flex: 1,
        //  justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 50
    },
    bold: {
        fontWeight: '400',
        color: 'black',
        fontSize: 25

    },


    prodCard: {
        overflow: 'hidden',
        // padding: 10,
        shadowColor: 'white',
        height: Dimensions.get('window').height * 0.55,
        borderRadius: 15
    },

    map: {
        borderBottomColor: 'black',
        height: '65%',
        backgroundColor: 'blue'
    },

    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },


    additionsView: {
        backgroundColor: '#F5F2F0',
        shadowOpacity: 0.15
    },

    mapView: {
        height: '25%',
        borderRadius: 15
    },



    buttonView: {
        alignItems: 'center',
       // flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40%'
        //  paddingTop: 10



    },



    declineButton: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 32,
        shadowOpacity: 0.2,

        borderColor: 'red',
        borderWidth: 1
    },

    acceptButton: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 32,
        shadowOpacity: 0.2,
        backgroundColor: '#8CC740',
    },

    confirmButton: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 32,
        shadowOpacity: 0.2,
        backgroundColor: 'grey',
    },


    callButton: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 23,
        shadowOpacity: 0.2,
        backgroundColor: '#17304A',
    },

    customerDet: {
        width: Dimensions.get('window').width * 0.38,
    },

    customerDet1: {
        width: Dimensions.get('window').width * 0.30,
        flexDirection: 'row'
    },

    profileImage: {
        backgroundColor: 'black',
        height: 56,
        width: 56,
        borderRadius: 100
    },

    nameDetail: {
        width: '100%'
    },
























});

export default DeliveryScreen;