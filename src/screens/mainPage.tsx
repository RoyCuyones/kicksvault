import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Platform, StatusBar } from "react-native";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Browse: undefined;
  SneakerDetails: { sneaker: Sneaker };
};

const Stack = createStackNavigator<RootStackParamList>();

interface Sneaker {
  id: string;
  name: string;
  price: string;
  year: string;
  brand: string;
  image: any;
  description: string;
}

const sneakers: Sneaker[] = [
  {
    id: "1",
    name: "Nike Air Jordan 1",
    price: "₱9,500",
    year: "1985",
    brand: "Nike",
    image: require("../assets/aj1.png"),
    description: "The Air Jordan 1 is one of the most iconic sneakers in history, first released in 1985. It revolutionized basketball footwear and remains a staple in sneaker culture.",
  },
  {
    id: "2",
    name: "Adidas Yeezy Boost 350",
    price: "₱12,000",
    year: "2015",
    brand: "Adidas",
    image: require("../assets/yeezy350.png"),
    description: "The Yeezy Boost 350, designed by Kanye West, brought a new level of hype to sneaker fashion with its unique design and Boost cushioning.",
  },
  {
    id: "3",
    name: "Puma Suede Classic",
    price: "₱4,500",
    year: "1968",
    brand: "Puma",
    image: require("../assets/pumasuede.png"),
    description:
      "The Puma Suede Classic is a timeless sneaker that has been a favorite in streetwear and sports culture since the late 1960s.",
  },
  {
    id: "4",
    name: "New Balance 574",
    price: "₱5,800",
    year: "1988",
    brand: "New Balance",
    image: require("../assets/nb574.png"),
    description:
      "The New Balance 574 is a classic running shoe known for its comfort, durability, and timeless design. It has been a favorite among sneaker enthusiasts for decades.",
  },
  {
    id: "5",
    name: "Vans Old Skool",
    price: "₱3,800",
    year: "1977",
    brand: "Vans",
    image: require("../assets/vansoldskool.png"),
    description:
      "The Vans Old Skool is a legendary skate shoe featuring the iconic side stripe. It has become a symbol of skate culture and streetwear fashion.",
  },
  {
    id: "6",
    name: "Reebok Classic Leather",
    price: "₱4,200",
    year: "1983",
    brand: "Reebok",
    image: require("../assets/reebokclassic.png"),
    description:
      "The Reebok Classic Leather is a timeless sneaker known for its clean design and comfort. It has been a staple in casual and athletic footwear for decades.",
  },
];

function BrowseScreen({ navigation }: StackScreenProps<RootStackParamList, "Browse">) {
  return (
    <View style={styles.browseContainer}>
      <FlatList
        data={sneakers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.sneakerName}>{item.name}</Text>
            <Text style={styles.blackText}>Price: {item.price}</Text>
            <Text style={styles.blackText}>Brand: {item.brand}</Text>
            <TouchableOpacity
              style={styles.roundButton}
              onPress={() => navigation.navigate("SneakerDetails", { sneaker: item })}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function SneakerDetailsScreen({ route }: StackScreenProps<RootStackParamList, "SneakerDetails">) {
  const { sneaker } = route.params;
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{sneaker.name}</Text>
      <Image source={sneaker.image} style={styles.image} />
      <View style={styles.descriptionBox}>
        <Text style={styles.blackText}>Price: {sneaker.price}</Text>
        <Text style={styles.blackText}>Year: {sneaker.year}</Text>
        <Text style={styles.blackText}>Brand: {sneaker.brand}</Text>
        <Text style={styles.blackText}>{sneaker.description}</Text>
      </View>
    </View>
  );
}

export default function Dashboard() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Browse" component={BrowseScreen} />
      <Stack.Screen name="SneakerDetails" component={SneakerDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  browseContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1F2937",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50, // Adjusts for Android & iOS
  },
  detailsContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1F2937",
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50, // Fix for details screen too
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#E5E7EB",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  sneakerName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#000000",
  },
  blackText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
    color: "#000000",
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  descriptionBox: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  roundButton: {
    backgroundColor: "#480BB4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: "#E5E7EB",
    fontWeight: "bold",
  },
});
