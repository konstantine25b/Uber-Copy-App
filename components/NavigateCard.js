import { View, Text ,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlices'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'

const keyforGooglePlaces = "AIzaSyCdpguSDFoO63-KFaEKoP86q-iWzSu85CU" // es env shi unda meqna mara ar qna


const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <SafeAreaView style = {{
      flex:1,
      backgroundColor: 'white',

    }}>
       <TouchableOpacity
        onPress={()=>{navigation.navigate("HomeScreen")
       
      }}
        style = {{
          position:'absolute',
          top: 4,
          left: 20,
          padding:9,
          zIndex:1,

        }}>
          <Icon
          size={
            29
          }
          name="chevron-left"
          type="fontawesome"
          />
          
        </TouchableOpacity>
      <Text style ={{
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 16
      }}>Good morning , Konstantin</Text>
      <View style ={{
       borderTopWidth: 1,
       borderColor: 'lightgray',

      }}>
        <View>
         <GooglePlacesAutocomplete
         styles = {toInputBoxStyles}
           placeholder='Where to?'
           fetchDetails={true}
           enablePoweredByContainer={false}
           minLength={2}
           onPress={(data,details = null)=>{
             dispatch(setDestination({
              location:details.geometry.location,
              description : data.description
             }))

             navigation.navigate("RideOptionsCard")
           }}
           returnKeyType={"search"}
           query={{
            key : keyforGooglePlaces,
            language:'en'
           }}
           nearbyPlacesAPI='GooglePlacesSearch'
           debounce={400}


         />
        </View>
        <NavFavourites/>
      </View>
      <View style ={{
        flexDirection: 'row',
        backgroundColor:"white",
        justifyContent: 'space-evenly',
        marginTop:"auto",
        paddingTop: 10,
        borderColor: 'lightgray',
        borderTopWidth: 0.5,

      }}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("RideOptionsCard")}
      style = {{
        flexDirection: 'row',
        backgroundColor:"black",
        justifyContent:'space-between',
        width:90,
        padding: 12,
        borderRadius: 20,

      }}>
        <Icon
        name="car" type ="font-awesome" color='white' size={16}
        />
        <Text style = {{
          color: 'white',
          alignContent: 'center'
        }}>Rides</Text>

      </TouchableOpacity>
      <TouchableOpacity style = {{
        flexDirection: 'row',
        backgroundColor:"white",
        justifyContent:'space-between',
        width:90,
        padding: 12,
        borderRadius: 20,

      }}>
        <Icon
        name="fast-food-outline" type ="ionicon" color='black' size={16}
        />
        <Text style = {{
          
          alignContent: 'center'
        }}>Eats</Text>

      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:0,
    paddingTop:20,
  },
  textInput:{
    fontSize: 18,
    borderRadius:0,
    backgroundColor:"#DDDDDF"

  },
  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom:0,
  }


})