import React,{useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../../components/card';
import { Dimensions } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import TitleText from '../../components/TitleText';
import { Icon } from 'react-native-elements'
import BodyText from '../../components/BodyText';
import { auth } from '../../Database/config';



const DotLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log( 'Logged in with:', user.email);
           })
           .catch(error => alert(error.message))
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("DotHomeScreen")
            }
        })

        return unsubscribe
    }, [])


    return (

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>


        <ImageBackground
                source={require('../../assets/4k-background.png')}
                resizeMode="cover"
                style={styles.imageBackground}
            >


            
<View style={styles.logo}>
                    

                        <Image
                            source={require('../../assets/logo.png')}
                        //    style={styles.image}
                        // resizeMode="cover" 
                        />

                    </View>


            <View style={styles.gridView}>










            <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   //   style={styles.container}
      >
                <Card style={styles.card}>

                <TitleText style={styles.Text}>LOGIN</TitleText>

                   

                    
                    <TextInput
                        style={styles.input}  
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}

                    />

<TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                        secureTextEntry

                    />


                    

                    



                   


                </Card>
                </KeyboardAvoidingView>


                <View style={styles.buttonView}>
                        <TouchableOpacity onPress={handleLogin}>

                            <Card style={styles.submitbutton}>


                                <TitleText style={styles.Text}>Login</TitleText>


                            </Card>

                        </TouchableOpacity>
                    </View>

            </View>
            </ImageBackground>
            
        </View>
        </TouchableWithoutFeedback>




    )
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    socials: {
        paddingTop:10,
        width:'70%',
            flexDirection: 'row',
            justifyContent: 'space-between',
    
    
    
        
    },

    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },


    logo: {
        padding: 50,
   
   flex: 1,

        alignItems: 'center',
    
    },

    iconView: {
        position: "absolute",
        top: 50,
        left: 12,
        backgroundColor: '#8CC740',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        zIndex: 8
    },

    dropdown: {
        width: '80%'
    },

    flatlist: {
        paddingTop: 50,
        backgroundColor: 'transparent'
    },

    card: {
        flex: 1,
        backgroundColor: '#F5F2F0',

        width: Dimensions.get('window').width * 1,
        paddingTop: 47,
        alignItems: 'center',
        borderRadius: 100,
        height: Dimensions.get('window').height * 0.5,
        shadowOpacity: 0.2,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70
    },
    gridView: {


        zIndex: 30,
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width * 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: Dimensions.get('window').height * 0.4,

    },

    buttonText: {
        fontWeight: 'bold',

    },

    input: {
        width: '80%',
        borderColor: 'white',
        height: 48,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30
    },


    buttonText: {
        fontWeight: 'bold',

    },


    button: {
        //  flex: 1,


        width: Dimensions.get('window').width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 24,
        shadowOpacity: 0.2,
    },

    imageview: {
        width: '80%',
        borderRadius: 8,
        borderStyle: 'dashed',
        height: '25%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
    },

    Text: {
        fontWeight: 'bold',
        fontFamily: 'Lexend-bold'

    },


    submitbutton: {
        //  flex: 1,

        backgroundColor: '#8CC740',
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 48,
        shadowOpacity: 0.2,
    },

    socialsButton: {
        //  flex: 1,

        backgroundColor: '#8CC740',
        width: Dimensions.get('window').width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 40,
        shadowOpacity: 0.2,
    },


    buttonView: {


        zIndex: 30,
        position: 'absolute',
        bottom: 45,
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 48,

    },


});

export default DotLoginScreen;