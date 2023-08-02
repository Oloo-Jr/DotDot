import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, TextInput, ImageBackground, Image,Modal,Button } from 'react-native';
import Card from '../../components/card';
import { Dimensions } from 'react-native';
import TitleText from '../../components/TitleText';
import * as Location from 'expo-location';
import SubText from '../../components/SubText';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { db,auth } from '../../Database/config';
import { dbc } from '../../Database/ClientSide';
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from 'geolib';
import { Icon } from 'react-native-elements';
import { fonts } from '../../components/fonts';
import MapPage from './MapScreen';
import Geolocation from 'react-native-geolocation-service';
//import * as Location from 'expo-location';




const DotGigScreen = ({ navigation }) => {
    
    const [allgigs, setAllgigs] = useState([]);
    const [location, setLocation] = useState([]);
    const [address, setAddress] = useState("")
    const [refreshing, setRefreshing] = useState(false);
    const [buyerLatitude, setBuyerLatitude] = useState(0);
    const [buyerLongitude, setBuyerLongitude] = useState(0);
    const [isAccepted, setIsAccepted] = useState("");
    const [closedOrder, setCloseOrder] = useState(false);
    const [amount, setAmount] = useState(0);
    const [pendingGigs, setPendingGigs] = useState([]);
    const [deliverygigs, setDeliveryGigs] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mpesaCode, setMpesaCode] = useState('');
    const [agentcategory, setAgentCategory] = useState("");
    const [agentfirstname, setAgentFirstName] = useState("");
    const [agentlastname, setAgentLastName] = useState("");
    const [agentvehicleregno, setAgentVehicleRegNo] = useState("");
    const [agentvehiclemodel, setAgentVehicleModel] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [timeinminutes, setTimeInMinutes] = useState(0);
    const [couriercharges, setCourierCharges] = useState(0);
    const [totalmoney, setTotalMoney] = useState(0);
    const [distance, setDistance] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isArrived, setIsArrived] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [targetLocation, setTargetLocation] = useState(null);

   
      
    
    {/*  useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location);
        })();
      }, []); */}


      const handleGetDirection = () => {
        navigation.navigate('DotMap', {
          destination: {
            latitude: buyerLatitude, // Replace with your desired destination latitude
            longitude: buyerLongitude, // Replace with your desired destination longitude
          },
        });
      };
 
    const handleArrived = () => {
        // Handle the logic for when the "Arrived" button is pressed
        setIsArrived(true);
      };

    const lipaNaMpesa = () =>{
        const url = "https://tinypesa.com/api/v1/express/initialize";


        const account_no = "DotDot";

        const requestBody = `amount=${totalmoney}&msisdn=${phoneNumber}&account_no=${account_no}`;

        fetch(url, {
            body: requestBody,
            headers: {
                Apikey: "QHEI2V9DYSV",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
        });

    }

    const getUserDetails = async () => {
        const doc = await db.collection('DotDotUSers').doc(auth.currentUser.uid).get();
        console.log(doc.data());
        const category = doc.data().category;
        const firstname = doc.data().firstname;
        const lastname = doc.data().lastname;
        const vehicleRegNo = doc.data().vrn;
        const vehicleModel = doc.data().vehicleModel; 
        
        //store the agent data in a variable
        setAgentCategory(category);
        setAgentFirstName(firstname);
        setAgentLastName(lastname);
        setAgentVehicleRegNo(vehicleRegNo);
        setAgentVehicleModel(vehicleModel);

    }

    const handleButtonPress = () => {
        setIsModalVisible(true);
      };
    
      const handleModalClose = () => {
        setIsModalVisible(false);
      };

      const handleTextInputChange = (value) => {
        setMpesaCode(value);
      };

        // Calculate the distance between two sets of coordinates
        const getDistance = (lat1, lon1, lat2, lon2) => {
            const R = 6371; // Earth's radius in kilometers
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // Distance in kilometers

            return distance;
        };

        // Convert degrees to radians
        const deg2rad = (deg) => {
            return deg * (Math.PI / 180);
        };
      {/*
    const distance = getDistance(agentLatitude, agentLongitude, buyerLatitude, buyerLongitude);

    console.log(distance + "Km")

    const roundDistanceToWholeNumber = (distance) => {
        return Math.round(distance);
      };

      
   const roundedDistance = roundDistanceToWholeNumber(distance);
   console.log(roundedDistance);

    //claculate the courier charge price depending on distance
    const courierCharges = distance * 40

    const roundToWholeNumber = (courierCharges) => {
        return Math.round(courierCharges);
      };

      
   const roundedCourierCharges = roundToWholeNumber(courierCharges);
   console.log(roundedCourierCharges);

      //Get the total amount of purchase including courier charges
      const totalAmount = amount + roundedCourierCharges


      //calculate the time to get there in hours

      const averageSpeed = 100; // km/hour

      const calculateTimeToTravel = (agentLatitude, agentLongitude, buyerLatitude, buyerLongitude, averageSpeed) => {
        const distance = getDistance(agentLatitude, agentLongitude, buyerLatitude, buyerLongitude); // getDistance function from previous example
        const timeInMinutes = (distance / averageSpeed )*60;
        return timeInMinutes;
      };
      
      const timeToTravel = calculateTimeToTravel(agentLatitude, agentLongitude, buyerLatitude, buyerLongitude, averageSpeed);
        console.log(timeToTravel + " hours");


        const roundTimeToWholeNumber = (timeToTravel) => {
            return Math.round(timeToTravel);
          };
    
          
       const roundedDeliveryTime = roundTimeToWholeNumber(timeToTravel);
       console.log(roundedDeliveryTime);



    useEffect(() => {
        const itemRef = dbc.collection('DotDotOrders').doc();
        const unsubscribe = itemRef.onSnapshot((doc) => {
          if (doc.exists) {
            const selectedOrderData = doc.data();
            if (selectedOrderData.status === 'Pending Payment') {
              setCloseOrder(true)
            }
          }
        });
        return () => unsubscribe();
      }, []); 


    //Accepting an order
    const handleUpdate = async (id) => {
        
      await dbc.collection('DotDotOrders').doc(id).update({
          status: "Pending Delivery",
         // agentid: auth.currentUser.uid
         agentLatitude: agentLatitude,
         agentLongitude: agentLongitude,
         totalAmount,
         roundedDeliveryTime,
         roundedCourierCharges,
         roundedDistance
        });

        setIsAccepted(id);
        getNewOrders();
        getPendingOrders();
      };*/}

      //Close an order
      const closeOrder = async(id)=> {
        await dbc.collection('DotDotOrders').doc(id).update({
            status: "Delivered",
            MpesaCode: mpesaCode
          });

          setIsModalVisible(false);
      }
    

   //Import  the new gigs from firebase
   const getNewOrders =async () => {
    setRefreshing(true);

    const allgigs = [];
    const querySnapshot = await dbc.collection("DotDotOrders").where("status", "==", "New Order"  ).get();
    querySnapshot.forEach((doc) => {
        allgigs.push({ id: doc.id, ...doc.data() });
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const lat= doc.data().latitude;
        const long = doc.data().longitude;
        const amount = doc.data().currentPrice
        setBuyerLatitude(lat);
        setBuyerLongitude(long); 
        setAmount(amount);
    });
    setAllgigs([...allgigs]);
    setRefreshing(false);
    
} 

//Import Pending Orders from firebase
const getPendingOrders =async () => {
    setRefreshing(true);

    const pendinggigs = [];
    const querySnapshot = await dbc.collection("DotDotOrders").where("status", "==", "Pending Delivery"  ).get();
    querySnapshot.forEach((doc) => {
        pendinggigs.push({ id: doc.id, ...doc.data() });
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const lat= doc.data().latitude;
        const long = doc.data().longitude;
        const amount = doc.data().currentPrice;
        setBuyerLatitude(lat);
        setBuyerLongitude(long); 
        setAmount(amount);
    });
    setPendingGigs([...pendinggigs]);
    setRefreshing(false);
    setIsAccepted(true)
    getDeliveryOrders();

    
} 

//fetch order that has been confirm by the client and now payment is the only part remaining
const getDeliveryOrders =async () => {
    setRefreshing(true);

    const deliverygigs = [];
    const querySnapshot = await dbc.collection("DotDotOrders").where("status", "==", "Pending Payment"  ).get();
    querySnapshot.forEach((doc) => {
        deliverygigs.push({ id: doc.id, ...doc.data() });
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const lat= doc.data().latitude;
        const long = doc.data().longitude;
        const amount = doc.data().currentPrice
        setBuyerLatitude(lat);
        setBuyerLongitude(long); 
        setAmount(amount);
    });
    setDeliveryGigs([...deliverygigs]);
    setRefreshing(false);
    setIsAccepted(true)

    
} 


    const _map = useRef(1);

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
        geocode();
        getUserDetails();
        getNewOrders();
        getPendingOrders();
        console.log(latitude, longitude)
    }, [])

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
          console.log(location)
        })();
      }, []);

    //Get the Town using Latitude and Longitude
     const geocode = async () => {
        const geocodedAddress = await Location.reverseGeocodeAsync({
            longitude: longitude,
            latitude: latitude
        });
        setAddress(geocodedAddress[0].city);
        console.log('reverseGeocode:');
        console.log(geocodedAddress[0].city);

    }

    ////////DELIVERY ORDER ITEMS//////////
    const renderDeliveryOrders = ({item}) => (
        <View style={styles.gigs}>

        <Card style={styles.prodCard}>
      
           

            <View style={styles.orderDetails}>
              
              
            <FlatList
            data={item.products}
            keyExtractor={(product, index) => index.toString()}
            renderItem={({ item }) => (

                <Card style={styles.additionsView}>
                    
                
                <View style={styles.descriptionView}>   
                            <View style={styles.cartprodImage}>
                            <Image
                              source={{ uri: item.image }}
                                style={styles.bannerimage}
                            // resizeMode="cover" 
                            />
                        </View>
<View style={styles.description}>

                            <View style={styles.textView}>

                            <Text allowFontScaling={false} style={fonts.blackBoldBig}> {item.name}</Text>
                            <Text allowFontScaling={false} style={fonts.blackBoldBig}>KES {item.price}</Text>

                            </View>

                           
                            
                            <View style={styles.textView}>


     

                                <View style={styles.textView2}>
                               
                                    <Text allowFontScaling={false} style={fonts.blackBoldSmall}>{item.description}</Text>
                                </View>

                                <View style={styles.textView2}>

                                    {/* <Text  style={styles.text42}>Quantity</Text>*/}
                                </View>

                                
                                

                            </View>
                           


                          
                            <View style={styles.textView}>


                                <View style={styles.textView2}>
                                   
                                    <Text allowFontScaling={false} style={fonts.blackBoldSmall}>Quantity</Text>

                                </View>

                                

                               

                                <View style={styles.textView2}>
                                   
                                <Text allowFontScaling={false} style={fonts.blackBoldBig}>{item.quantity} </Text>

                               </View>

                                
                            </View>
                            </View>
                            </View>





                            
                    

                </Card>
                  )}
                  />

                <View style={styles.textView}>
                    <View style={styles.textView2}>
                        <MaterialIcons name="motorcycle" size={24} color="grey" />
                        <Text  style={fonts.blackBoldSmall}>Delivery  {distance.toFixed(2)}  Km</Text>
                    </View>

                    <View style={styles.textView2}>
                        <MaterialIcons name="timer" size={24} color="red" />
                        <Text  style={fonts.blackBoldSmall}> {timeinminutes.toFixed(0)} minutes</Text>
                    </View>
                </View>


                <View style={styles.textView}>
                <TouchableOpacity onPress={handleGetDirection}>
                    <View style={styles.textView2}>
                        <MaterialIcons name="location-pin" size={24} color="black" />
                        <Text style={fonts.greyLightBig}> (View map)</Text>
                    </View>

                    </TouchableOpacity>
                   
                   
                </View>

                
                

               


                <View style={styles.textView}>


                    <View style={styles.customerDet}>
                        

                        <View style={styles.nameDetail}>
                            <Text  style={fonts.blackBoldSmall}>{item.userDisplayName}</Text>

                            <TouchableOpacity>
                            <Card style={styles.callButton}>
                                <Text style={fonts.whiteBoldSmall}>{item.userPhoneNumber}</Text>
                            </Card>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.customerDet}>
                        <Text style={fonts.greyLightBig}>Payment method</Text>
                        <Card style={styles.callButton}>
                            <Text style={fonts.whiteBoldSmall}>Pay on delivery</Text>
                        </Card>
                    </View>
                </View>



                <View style={styles.textView}>

                    <Text  style={fonts.greeBoldSmall}>Total</Text>
                    <Text style={fonts.greenBoldBig}>KES {item.totalMoney.toFixed(2)}</Text>
                </View>



                <View style={styles.buttonView}>
        
                {isArrived ? ( 
        
                
        <Card style={styles.declineButton}>
        <TouchableOpacity onPress={handleButtonPress}>
            <Text allowFontScaling={false} style={styles.text2b}>
                Request Payment
            </Text>
            </TouchableOpacity>
        </Card>
          ) : (
        <Card style={styles.acceptButton}>
           
            <TouchableOpacity onPress={handleArrived()}>
                <Text allowFontScaling={false} style={styles.text2c}>
                    Arrived
                </Text>
            </TouchableOpacity>
        </Card> 
          )}

                    <Modal visible={isModalVisible} onRequestClose={handleModalClose}>
                    <View style={{ backgroundColor: 'white', padding: 16 }}>
                        <Text>Enter Your Phone Number:</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
                            keyboardType="phone-pad"
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={phoneNumber}
                        />
                        <Button title="Send" onPress={() => {
                            setIsModalVisible(false);
                            lipaNaMpesa();
                        }} />
                        </View>

                    </Modal>
                    
                    
                    
                    

                </View>




            </View>





        </Card>






    </View>
    )

    const renderPendingOrders = ({ item }) => (
        <View style={styles.gigs}>

        <Card style={styles.prodCard}>
      
           

            <View style={styles.orderDetails}>
              
              

            <FlatList
            data={item.products}
            keyExtractor={(product, index) => index.toString()}
            renderItem={({ item }) => (

                <Card style={styles.additionsView}>
                    
                
                <View style={styles.descriptionView}>   
                            <View style={styles.cartprodImage}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.bannerimage}
                            // resizeMode="cover" 
                            />
                        </View>
<View style={styles.description}>

                            <View style={styles.textView}>

                            <Text allowFontScaling={false} style={fonts.blackBoldBig}> {item.name}</Text>
                            <Text allowFontScaling={false} style={fonts.blackBoldBig}>KES {item.price}</Text>

                            </View>

                           
                            
                            <View style={styles.textView}>


     

                                <View style={styles.textView2}>
                               
                                    <Text allowFontScaling={false} style={fonts.blackBoldSmall}>{item.description}</Text>
                                </View>

                                <View style={styles.textView2}>

                                    {/* <Text  style={styles.text42}>Quantity</Text>*/}
                                </View>

                                
                                

                            </View>
                           


                          
                            <View style={styles.textView}>


                                <View style={styles.textView2}>
                                   
                                    <Text allowFontScaling={false} style={fonts.blackBoldSmall}>Quantity</Text>

                                </View>

                                

                               

                                <View style={styles.textView2}>
                                   
                                <Text allowFontScaling={false} style={fonts.blackBoldBig}>{item.quantity} </Text>

                               </View>

                                
                            </View>
                            </View>
                            </View>





                            
                    

                </Card>
                  )}
                  />

                <View style={styles.textView}>
                    <View style={styles.textView2}>
                        <MaterialIcons name="motorcycle" size={24} color="grey" />
                        <Text  style={fonts.blackBoldSmall}>Delivery {distance.toFixed(0)} Km</Text>
                    </View>

                    <View style={styles.textView2}>
                        <MaterialIcons name="timer" size={24} color="red" />
                        <Text  style={fonts.blackBoldSmall}>{timeinminutes.toFixed(0)} minutes</Text>
                    </View>
                </View>


                <View style={styles.textView}>
                    <TouchableOpacity onPress={handleGetDirection}>
                    <View style={styles.textView2}>
                        <MaterialIcons name="location-pin" size={24} color="black" />
                        <Text style={fonts.greyLightBig}> (View map)</Text>
                    </View>

                    </TouchableOpacity>
                   
                </View>

                
                

               


                <View style={styles.textView}>


                    <View style={styles.customerDet}>
                        

                        <View style={styles.nameDetail}>
                            <Text  style={fonts.blackBoldSmall}>{item.userDisplayName}</Text>

                            <TouchableOpacity>
                            <Card style={styles.callButton}>
                                <Text style={fonts.whiteBoldSmall}>{item.userPhoneNumber}</Text>
                            </Card>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.customerDet}>
                        <Text style={fonts.greyLightBig}>Payment method</Text>
                        <Card style={styles.callButton}>
                            <Text style={fonts.whiteBoldSmall}>Pay on delivery</Text>
                        </Card>
                    </View>
                </View>



                <View style={styles.textView}>

                    <Text  style={fonts.greeBoldSmall}>Total</Text>
                    <Text style={fonts.greenBoldBig}>KES {item.totalMoney.toFixed(2)} </Text>
                </View>



                <View style={styles.buttonView}>
        
                <Card style={styles.pendingButton}>
                        <Text allowFontScaling={false} style={styles.text2b}>
                            Wait for confirmation ...
                        </Text>
                    </Card>
                    
                    
                    
                    

                </View>




            </View>





        </Card>






    </View>
    )

    const renderOrders = ({ item }) => {
        const distance = getDistance(
            latitude,
            longitude,
            item.latitude,
            item.longitude
        );
        //claculate the courier charge price depending on distance
        const courierCharges = distance * 20
        const averageSpeed = 80; // km/hour
    
        const timeInMinutes = (distance / averageSpeed )*60;
    
        const totalMoney = courierCharges + item.overallCost
    
         //Accepting an order
         const handleUpdate = async (id) => {
            setCurrentLocation({latitude, longitude})
            await dbc.collection('DotDotOrders').doc(id).update({
              status: "Pending Delivery",
              agentId: auth.currentUser.uid,
              agentLatitude: latitude,
              agentLongitude: longitude,
              totalMoney,
              timeInMinutes,
              courierCharges,
              distance,
              agentcategory,
              agentfirstname,
              agentlastname,
              agentvehiclemodel,
              agentvehicleregno
              });
              setDistance(distance);
              setTimeInMinutes(timeInMinutes);
              setCourierCharges(courierCharges);
              setTotalMoney(totalMoney);
              setIsAccepted(id);
              getNewOrders();
              getPendingOrders();
            };
    

            return (
        <View style={styles.gigs}>

        <Card style={styles.prodCard}>
      
           

            <View style={styles.orderDetails}>
            
            <FlatList
            data={item.products}
            keyExtractor={(product, index) => index.toString()}
            renderItem={({ item }) => (

                <Card style={styles.additionsView}>
                    
                
                <View style={styles.descriptionView}>   
                            <View style={styles.cartprodImage}>
                            <Image
                               source={{ uri: item.image }}
                                style={styles.bannerimage}
                            // resizeMode="cover" 
                            />
                        </View>
<View style={styles.description}>

                            <View style={styles.textView}>

                            <Text allowFontScaling={false} style={fonts.blackBoldBig}> {item.name}</Text>
                            <Text allowFontScaling={false} style={fonts.blackBoldBig}>KES {item.price}</Text>

                            </View>

                           
                            
                            <View style={styles.textView}>


     

                                <View style={styles.textView2}>
                               
                                    <Text allowFontScaling={false} style={fonts.blackBoldSmall}>{item.description}</Text>
                                </View>

                                <View style={styles.textView2}>

                                    {/* <Text  style={styles.text42}>Quantity</Text>*/}
                                </View>

                                
                                

                            </View>
                           


                          
                            <View style={styles.textView}>


                                <View style={styles.textView2}>
                                   
                                    <Text allowFontScaling={false} style={fonts.blackBoldSmall}>Quantity</Text>

                                </View>

                                

                               

                                <View style={styles.textView2}>
                                   
                                <Text allowFontScaling={false} style={fonts.blackBoldBig}>{item.quantity} </Text>

                               </View>

                                
                            </View>
                            </View>
                            </View>





                            
                    

                </Card>
                  )}
                  />
                <View style={styles.textView}>
                    <View style={styles.textView2}>
                        <MaterialIcons name="motorcycle" size={24} color="grey" />
                        <Text  style={fonts.blackBoldSmall}>Delivery {distance.toFixed(2)}Km</Text>
                    </View>

                    <View style={styles.textView2}>
                        <MaterialIcons name="timer" size={24} color="red" />
                        <Text  style={fonts.blackBoldSmall}>{timeInMinutes.toFixed(0)}  minutes</Text>
                    </View>
                </View>


                <View style={styles.textView}>
                {!targetLocation ? (
                    <TouchableOpacity  onPress={handleGetDirection}>
                    <View style={styles.textView2}>
                        <MaterialIcons name="location-pin" size={24} color="black" />
                        <Text style={fonts.greyLightBig}> (View map)</Text>
                    </View>

                    </TouchableOpacity>
                     ) : (
                    <MapPage currentLocation={currentLocation} targetLocation={targetLocation} />
                    )}
                   
                </View>

                
                

               


                <View style={styles.textView}>


                    <View style={styles.customerDet}>
                        

                        <View style={styles.nameDetail}>
                            <Text  style={fonts.blackBoldSmall}>{item.userDisplayName}</Text>

                            <TouchableOpacity>
                            <Card style={styles.callButton}>
                                <Text style={fonts.whiteBoldSmall}>{item.userPhoneNumber}</Text>
                            </Card>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.customerDet}>
                        <Text style={fonts.greyLightBig}>Payment method</Text>
                        <Card style={styles.callButton}>
                            <Text style={fonts.whiteBoldSmall}>Pay on delivery</Text>
                        </Card>
                    </View>
                </View>



                <View style={styles.textView}>

                    <Text  style={fonts.greeBoldSmall}>Total</Text>
                    <Text style={fonts.greenBoldBig}>KES {totalMoney.toFixed(2)} </Text>
                </View>



                <View style={styles.buttonView}>
        
                {isAccepted && isAccepted === item.id ? 
        
                
        <Card style={styles.declineButton}>
        <TouchableOpacity onPress={() => closeOrder(item.id)}>
            <Text allowFontScaling={false} style={styles.text2b}>
                {closeOrder ? "Close Order" : "Wait for confirmation"}
            </Text>
            </TouchableOpacity>
        </Card>
        : 
        <>
        <Card style={styles.declineButton}>
            <Text allowFontScaling={false} style={styles.text2b}>
                Decline
            </Text>
        </Card>

        <Card style={styles.acceptButton}>
           
            <TouchableOpacity onPress={() => handleUpdate(item.id)}>
                <Text allowFontScaling={false} style={styles.text2c}>
                    Accept Request
                </Text>
            </TouchableOpacity>
        </Card> 
        </> }

                    
                    
                    

                </View>




            </View>





        </Card>






    </View>

        )};



    return (

        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.imageBackground}
            >


                <View style={styles.statsView}>

                    <Card style={styles.statsCard}>
                        <TitleText style={fonts.blackBoldBig}>Ksh 0</TitleText>
                        <TitleText style={fonts.blackBoldMedium}>Overall earnings</TitleText>
                    </Card>

                    <Card style={styles.statsCard}>
                        <TitleText style={fonts.blackBoldBig}>0</TitleText>
                        <TitleText style={fonts.blackBoldMedium}>Today's Bookings</TitleText>
                    </Card>


                </View>

                <TitleText style={fonts.whiteBoldBig}>New Gigs ({allgigs.length})</TitleText>

                <FlatList
                   onRefresh={getNewOrders}
                    data={allgigs}
                    refreshing={refreshing}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderOrders}
                    numColumns={1}
                />
                  <TitleText style={fonts.whiteBoldBig}>Pending ({pendingGigs.length}) </TitleText>
                  <FlatList
                   onRefresh={getPendingOrders}
                    data={pendingGigs}
                    refreshing={refreshing}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderPendingOrders}
                    numColumns={1}
                />
                <TitleText style={fonts.whiteBoldBig}>Delivery ({deliverygigs.length}) </TitleText>
                <FlatList
                   onRefresh={getDeliveryOrders}
                    data={deliverygigs}
                    refreshing={refreshing}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderDeliveryOrders}
                    numColumns={1}
                />
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

    bannerimage: {
        height: '100%',
        width: '100%'

    },

    orderDetails: {
        padding: 10,
        justifyContent: 'space-between',
        
    },

    title1: {
        fontFamily: 'Lexend-light',
        fontSize: 25,
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold'



    },

    title2: {
        fontFamily: 'Lexend-light',
        fontSize: 20,
        //paddingLeft: 20,
        color: 'black',
        fontWeight: 'bold'



    },

    title3: {
        fontFamily: 'Lexend-light',
        fontSize: 17,
        //paddingLeft: 20,
        color: 'black',
      //  fontWeight: 'bold'



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
        padding: 10,
       height: 'auto',
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
        height: '100%'
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
       height: 'auto',
        borderRadius: 15
    },

    prodImage: {
        borderBottomColor: 'black',
        height: '40%',
        backgroundColor: 'blue'
    },

    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
     //   paddingHorizontal: 10,
      //  paddingTop:1,

    },

    textView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 0.2
    },

    textView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 20,
        alignItems: 'center'
    },



    additionsView: {
        backgroundColor: '#F5F2F0',
        shadowOpacity: 0.15,
        height: 'auto',
        //justifyContent: 'space-around'
    },

    mapView: {
        height: 180,
        borderRadius: 15,
        
    },



    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 32,
        shadowOpacity: 0.2,
        backgroundColor: '#8CC740',
    },

    callButton: {
        //  flex: 1,

        //paddingHorizontal: 20,
        width: 100,
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
        flexDirection: 'row',

    },

    profileImage: {
        backgroundColor: 'black',
        height: 56,
        width: 56,
        borderRadius: 100,
        overflow: 'hidden'
    },

    nameDetail: {
        width: '100%',
        paddingLeft: 10
    },



///ORDERED ITEMS STYLES///////////
    descriptionView: {
        paddingTop: 10,
        paddingBottom:10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        
            },

            cartprodImage: {
                borderBottomColor: 'black',
                height: 60,
                backgroundColor: 'blue',
                width: 60
            },

            description: {
                //  borderTopWidth: 1,
                //  borderBottomWidth: 1,
                //  borderBottomColor: '#8CC740',
                 // borderTopColor: '#8CC740',
                  paddingBottom: 5,
                  paddingTop: 5,
                  width: '77%'
               //   flexDirection: 'row'
              },

              text12: {
                fontFamily: 'Lexend-light',
                fontSize: 15,
                color: 'black',
                fontWeight: 'bold'
            },

            text42: {
                fontFamily: 'Lexend-light',
                fontSize: 11,
                color: 'black',
                fontWeight: 'bold'
            },
        
            text421: {
                fontFamily: 'Lexend-light',
                fontSize: 11,
                color: 'grey',
                fontWeight: 'bold'
            },

















});

export default DotGigScreen;