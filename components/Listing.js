import React from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Card from './card'
import TitleText from './TitleText';
import SubText from './SubText';



const Listing = props => {
    return (

        <View style={styles.productView}>


            <View style={styles.product}>

                <Image
                    source={require('../assets/icon.png')}
                    style={styles.image}
                // resizeMode="cover" 
                />

                <View style={styles.productDetails}>
                    <View >
                        <SubText style={styles.details}> {props.name}</SubText>
                        <TitleText style={styles.detail}> {props.type}</TitleText>
                        <TitleText style={styles.detail}>Completed jobs: {props.completed}</TitleText>



                        <View style={styles.buttonView}>

                            <View style={styles.buttonContainer}>
                                <Card style={styles.button}>



                                    <TitleText style={styles.buttonText}>View Portfolio</TitleText>


                                </Card>
                            </View>


                            <Card style={styles.requestButton}>



                                <TitleText style={styles.buttonText}>Request</TitleText>


                            </Card>
                        </View>
                    </View>




                </View>




            </View>




        </View>

    );

};


const styles = StyleSheet.create({

    bold: {
        fontWeight: '400',
        color: 'black',
        fontSize: 25

    },


    button: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: Dimensions.get('window').width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 24,
        shadowOpacity: 0.2,
        backgroundColor: '#17304A'
    },

    requestButton: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: Dimensions.get('window').width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 24,
        shadowOpacity: 0.2,
       // backgroundColor: '#17304A'
    },

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',



    },

    buttonContainer: {
        paddingHorizontal: 5
    },

    price: {

        justifyContent: 'center'

    },

    details: {
        fontFamily: 'Lexend-light',
        fontSize: 20

    },

    detail: {
        fontWeight: '400',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Lexend-lighter'

    },

    productView: {
        // textAlign: 'left',
        // width: Dimensions.get('window').width * 0.5,
        // padding: 0.1,
        //alignItems: 'flex-end'
    },

    product: {
        paddingBottom: 20,
        flexDirection: 'row',
        //height: Dimensions.get('window').width * 0.5,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'space-around',

        borderBottomColor: 'black',
        //overflow: 'hidden',
        // marginVertical: 3,
        // marginHorizontal: 6
    },

    image: {
        height: Dimensions.get('window').width * 0.15,
        width: Dimensions.get('window').width * 0.15,
        borderRadius: 120
    },

    productDetails: {
        // position: 'absolute',
        //width: Dimensions.get('window').width * 0.46,
        //height: Dimensions.get('window').width * 0.15,
        //padding: 5,

        //bottom: 0,
        //alignContent: 'center',
        // backgroundColor: 'white',
        //backgroundColor: 'rgba(255, 255, 255, 0.6)',
        //flexDirection: 'row',
        // justifyContent: 'space-between'
    },

    prodicons: {
        paddingHorizontal: Dimensions.get('window').width * 0.25,
        paddingVertical: Dimensions.get('window').width * 0.05,
        justifyContent: 'space-between'
    },

    scroll: {
        width: Dimensions.get('window').width * 0.95,

    }

});

export default Listing;