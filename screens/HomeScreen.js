import { View, Text ,SafeAreaView, Image} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import {GOOGLE_PLACE_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlices';
import NavFavourites from '../components/NavFavourites';



const keyforGooglePlaces = "AIzaSyCdpguSDFoO63-KFaEKoP86q-iWzSu85CU" // es env shi unda meqna mara ar qna

const HomeScreen = () => {

  const dispatch = useDispatch()
  


  
  
  return (
    <SafeAreaView style = {{
        width: '100%',
        height: "100%",
       
    }}>
      <View style ={{
        padding: 5,

      }}>
        <Image
        style ={{
            width:100,
            height:100,
            resizeMode: 'contain',
        }}
        source ={{
            uri:"https://links.papareact.com/gzs"
        }}
        />
        <GooglePlacesAutocomplete
        placeholder='Where From?'
        styles = {{
          container: {flex: 0,
             
          },
          textInput:{
            fontSize: 18
          },

        }}
        
        onPress={(data, details )=>{
         
          dispatch(setOrigin({
            location: details.geometry.location,
            description : data.description
          }))
         dispatch(setDestination(null))

       
         
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength= {2}
          query ={{
            // key : GOOGLE_PLACE_APIKEY,
            key : keyforGooglePlaces,
            language: 'en',
          }}
          
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
      </View>
      <NavOptions/>
      <NavFavourites/>
    </SafeAreaView>
  )
}

export default HomeScreen