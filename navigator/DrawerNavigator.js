import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack } from './StackNavigator'
import { Icon } from 'react-native-elements'
import { colors } from '../global/styles'


const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator  useLegacyImplementation={true}>
            <Drawer.Screen
                name = "HomeStack"
                component = {HomeStack}
                options = {{
                    title:"ACCOUNT",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "account"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {100}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
            />

<Drawer.Screen
                name = "Wallet"
                component = {HomeStack}
                options = {{
                    title:"Wallet",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "home"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
                onPress ={()=>{navigation.navigate("RequestScreen",{state:0})}}
            />

<Drawer.Screen
                name = "Support"
                component = {HomeStack}
                options = {{
                    title:"Support",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "home"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
                onPress ={()=>{navigation.navigate("RequestScreen",{state:0})}}
            />
             
             <Drawer.Screen
                name = "About Us"
                component = {HomeStack}
                options = {{
                    title:"About Us",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "home"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
                onPress ={()=>{navigation.navigate("RequestScreen",{state:0})}}
            />
             
             
        </Drawer.Navigator>
    )
}