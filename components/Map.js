import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../slices/navSlices";
import MapViewDirections from "react-native-maps-directions";

const keyforGooglePlaces = "AIzaSyCdpguSDFoO63-KFaEKoP86q-iWzSu85CU"; // es env shi unda meqna mara ar qna

const Map = () => {

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}
      &key=${keyforGooglePlaces}`;

      fetch(URL).then(res=>res.json())
      .then(data=>{
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      })



    };
    getTravelTime();
  }, [origin, destination, keyforGooglePlaces]);

  return (
    <MapView
      ref={mapRef}
      style={{
        flex: 1,
      }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={keyforGooglePlaces}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          title="Origin"
          description={origin.description}
          identifier="origin"
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
        />
      )}
      {destination?.location && (
        <Marker
          title="Destination"
          description={destination.description}
          identifier="destination"
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
