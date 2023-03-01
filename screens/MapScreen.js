import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  return (
    <View>
       <TouchableOpacity
      onPress={()=>navigation.navigate("HomeScreen")}
      style ={{
        prsition: 'absolute',
        top: 85,
        left: 12,
        zIndex: 1,
        marginTop:-35,
        padding: 4,
       
        borderRadius: 90,
        backgroundColor: "white",
       width: 38
      }}>
        <Icon
        name = 'menu'
        />
      </TouchableOpacity>
      
      
      <View style = {{
        height: '50%'
      }}>
       
      
        <Map/>

      </View>

      <View style = {{
        height: '50%'
      }}>
        <Stack.Navigator>
          <Stack.Screen
          name = 'NavigateCard'
          component={NavigateCard}
          options ={{
            headerShown: false
          }}

          />
          <Stack.Screen
          name = 'RideOptionsCard'
          component={RideOptionsCard}
          options ={{
            headerShown: false
          }}

          />
        </Stack.Navigator>


      </View>


    </View>
  )
}

export default MapScreen