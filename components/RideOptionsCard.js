import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeINformation } from "../slices/navSlices";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-123",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE =1.5

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const travelTimeInfo = useSelector(selectTravelTimeINformation)

  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NavigateCard");
          }}
          style={{
            position: "absolute",
            top: 4,
            left: 20,
            padding: 9,
            zIndex: 1,
          }}
        >
          <Icon size={29} name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            padding: 15,
          }}
        >
          Select a Ride - {travelTimeInfo?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={id == selected?.id ? styles.selected : styles.notSelected}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: image,
              }}
            />
            <View
              style={{
                marginLeft: -25,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                {title}
              </Text>
              <Text>{travelTimeInfo?.duration?.text} </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              
              {new Intl.NumberFormat('en-gb',{
                style:'currency',
                currency: 'gel'

              }).format(
                (travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * multiplier)/100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style ={{
        borderTopWidth: 1,
        borderColor:'gray'
      }}>
        <TouchableOpacity
          disabled={!selected}
          style={selected ? styles.selectedButton : styles.notSelectedButton}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  selected: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "lightgray",
  },
  notSelected: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  selectedButton: {
    backgroundColor: "black",
    padding: 9,
    margin: 12,
  },
  notSelectedButton: {
    backgroundColor: "gray",
    padding: 9,
    margin: 12,
  },
});
