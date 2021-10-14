import React from "react";

import{View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function login(){
    return( 
    <View style={{flex: 1, justifyContent:"center", alignItems:"center" }}>
        <View style={{flex: 2 }}>
        <Image 
        style={{
            width: 200,
            height: 150,
            borderRadius: 20,
            marginBottom: 50,
            transform: [{rotate: "45deg"}],
            marginTop:60
        }}
        source={{
           uri: "https://cdn.dribbble.com/users/1784672/screenshots/14368631/media/1b98f37ea7bf5f60639b95ea09d70c61.png?compress=1&resize=1200x900"
        }}>

        </Image>
    
            <Text style={{color:'black', fontSize: 24, textAlign:"center"}}> Welcome to </Text>
            <TouchableOpacity>
            <Text style={{color:'black', fontStyle:'bold', fontSize: 30, textAlign:'center', fontWeight:'600'}}>
                 Power Bike Shop 
            </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor:"#e3e3e3",
                padding: 10, 
                borderRadius:10,
                paddingHorizontal: 60,
                flexDirection: 'row',
                marginTop: 20 }}>           
                                            
                <AntDesign name="google" size={24} color="rgb(256, 15, 20)" />

                <Text style={{
                    fontSize:20,
                    marginLeft: 38
                }}>
                    Login with Gmail
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor:"black",
                padding: 10, 
                borderRadius:10,
                flexDirection: 'row',
                paddingHorizontal: 60,
                marginTop: 20 }}>
                <AntDesign name="apple1" size={24} color="white" />
                <Text style={{
                    fontSize:20,
                    color: 'white',
                    marginLeft: 15
                }}>
                    Login with Apple
                </Text>
            </TouchableOpacity>

            <Text style={{
                fontWeight: '500', marginTop: 15, color: 'gray', textAlign: 'center'
            }}> Not a member? 
            <TouchableOpacity>
            <Text style={{
                color: 'orange', size: 20, fontWeight: 'bold'
            }}> SignUp</Text>
            </TouchableOpacity>
            </Text>
   </View>

   <View style={{flex:1, backgroundColor:'red'}}>
   </View>

    </View>
    )
}
