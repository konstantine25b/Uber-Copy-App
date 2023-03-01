import { View, Text, FlatList, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';

const data =[
    {
        id:"123",
        title: 'get a ride',
        image: "https://links.papareact.com/3pn",
        screen :'MapScreen',
        

    },
    {
        id:"456",
        title: 'order food',
        image: "https://links.papareact.com/28w",
        screen :'EatsScreen',

    },

]

const NavOptions = () => {

    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

  return (
   <FlatList
   data={data}
   keyExtractor={(item)=>item.id}
   horizontal
   renderItem={({item})=>(
    <TouchableOpacity
    onPress={()=>{navigation.navigate(item.screen)
    
    }
    
    }
    disabled={!origin}
    style ={{
        padding: 5,
        paddingLeft: 14,
        paddingBottom:  20,
        paddingTop: 12,
        backgroundColor: 'gray',
        width: 160,
        margin: 8,
        height: 240, // es shesacvlelia imitoto heoght ar aqvs defaultad
        
    }}
    >
        <View style ={{
            
        }}>
            <Image
            style ={{
                width: 120,
                height:120,
                resizeMode:'contain'
            }}
            source ={{
                uri: item.image
            }}/>
            <Text style ={{
                marginTop: 8,
                fontSize: 17,
                fontWeight :'400'
            }}>{item.title}</Text>
            <Icon 
            style ={{
                padding: 7,
                backgroundColor:'black',
                width: 40,
                marginTop: 12,
                borderRadius: 25,


            }}
            name= 'arrowright'
            color= 'white'
            type ='antdesign'
            />
        </View>
    </TouchableOpacity>

  )}
   />
  )
}

export default NavOptions