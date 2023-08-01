import React from 'react';
import { StyleSheet, Image, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import Card from '../components/card';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText'


const Services = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.vendorsView}>

                <Card style={styles.imageCard}>

                    <View style={styles.imageView}>
                        <Image
                             source={{ uri: props.image }}
                            style={styles.image}
                        // resizeMode="cover" 
                        />

                    </View>

                    <View style={styles.textView}>
                        <BodyText style={styles.text}>{props.name}</BodyText>

                    </View>

                </Card>

            </View>
        </TouchableOpacity>
    );

};




const styles = StyleSheet.create({

    imageCard: {
        //shadowColor: 'black',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        //paddingLeft: 0,
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.45,
        //borderColor: 'black',
        //overflow: 'hidden',
        justifyContent: 'space-between',
       // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
        //   backgroundColor: 'blue'

    },

    image: {
        height: Dimensions.get('window').width * 0.08,
        width: Dimensions.get('window').width * 0.08,
      
    },

    imageView: {
        //flex: 1,
        backgroundColor: '#17304A',
        alignItems: 'center',
        justifyContent: 'center',
     //  paddingLeft: '40%',
        height: Dimensions.get('window').width * 0.21,
        width: Dimensions.get('window').width * 0.21,
        borderRadius: 120,
    
        
    },



    text: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Lexend-bold'
        

    },

    weight2: {
        fontWeight: '500',

    },

    textView: {
        justifyContent: 'center',
        alignItems: 'center',
      //  position: 'absolute',
        paddingTop: '10%'
    },

    vendorsView: {
        paddingVertical: Dimensions.get('window').width * 0.01,
        paddingHorizontal: Dimensions.get('window').width * 0.01,
        //backgroundColor: 'blue'
    }

});

export default Services;