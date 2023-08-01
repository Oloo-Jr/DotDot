import React, {useState,useRef,useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/card';
import { Dimensions } from 'react-native';
import TitleText from '../../components/TitleText';
import MapView from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const DotHomeScreen =({ navigation }) => {


    const [latlng, setLatLng] = useState({})
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
   
    const _map = useRef(1);
   
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting...';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
   
    return (


        <View style={styles.container}>


<View style={styles.buttonView}>
            <TouchableOpacity   onPress={() => { navigation.navigate("DotGigScreen", { state: 0 }) }}>

                <Card style={styles.button}>

                    
                        <TitleText style={styles.buttonText}>Check Requests</TitleText>
                    

                </Card>

            </TouchableOpacity>
            </View>
       
       <MapView ref={_map}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                followsUserLocation={true}>

       </MapView>
        </View>





    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
       // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        flex: 1,
        
        
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 48,
       shadowOpacity: 0.2,
    },
    buttonView: {


        zIndex: 30,
        position: 'absolute',
        bottom: 92,
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 48,
        
    },

    buttonText: {
      //  fontWeight: 'bold',
        fontFamily: 'Lexend-light'
        
    },
    map: {
        height: "100%",
        width: "100%",
      },



});

export default DotHomeScreen;