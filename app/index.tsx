import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.headerTitleWrap} pointerEvents="none">
          <Text style={styles.headerSmall}>OOTD_EVERYDAY</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      ></ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Octicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Octicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="movie-open-play-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bag-handle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 58,
    backgroundColor: "#FFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E6E6",
    position: "relative",
    justifyContent: "center",
  },
  headerIconBtn: {
    position: "absolute",
    left: 16,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headerSmall: {
    fontSize: 11,
    color: "#777",
    letterSpacing: 0.6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginTop: 2,
  },

  scrollContent: {
    paddingBottom: 0,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: "#FFF",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E6E6E6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingTop: 10,
  },
  navItem: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
