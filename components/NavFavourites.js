import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Icon} from "react-native-elements"

const data = [
    {
        id:1,
        icon:'home',
        location:"Home",
        destination:"Tskneti Highway, Tbilisi, Georgia "
    },
    {
        id: 2,
        icon: "briefcase",
        location:"Work",
        destination:"Vaja Pshavela street, Tbilisi, Georgia"
    }
]

const NavFavourites = () => {
    
  return (
    <FlatList
      data= {data}
      keyExtractor={(item)=>item.id}
      ItemSeparatorComponent={()=>(
        <View style ={{
            backgroundColor: 'lightgray',
            height: 0.6,
            
        }}/>
      )}
      renderItem={({item:{location , destination , icon}})=>(
        <TouchableOpacity style = {{
            flexDirection: 'row',
            
           
            padding:20,
        }}>
          <Icon
          style = {{
            marginRight: 16,
            backgroundColor: "darkgray",
            padding: 12,
            borderRadius: 20
          }}
          name={icon}
          type ="ionicon"
          color="white"
          size={18}
          />
          <View>
            <Text style = {{
                fontSize: 18,
                fontWeight:  700,
            }}>{location}</Text>
            <Text
            style = {{
                fontSize: 14,
                fontWeight:  400,
                color: 'gray'
            }}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})