import React from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Card from './card'
import TitleText from './TitleText';
import SubText from './SubText';



const QuoteTable = props => {
    return (

        <View style={styles.productView}>


            <View style={styles.product}>

                

               

                <View style={styles.productDetails}>
                    
                    
                        <TitleText style={styles.details}> {props.description}</TitleText>
                        <TitleText style={styles.detail}> {props.amount}</TitleText>
                        



                   
                    




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
       // paddingBottom: 20,
      //  flexDirection: 'row',
        //height: Dimensions.get('window').width * 0.5,
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'space-around',
        borderStyle: 'dashed',

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

        flexDirection: 'row',
         justifyContent: 'space-between',
         borderBottomColor: 'black',
         borderBottomWidth: 1,
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

export default QuoteTable;