import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: windowWidth } = Dimensions.get("window");

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
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
      >
        <View style={styles.userRow}>
          <View style={styles.userInfo}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>ootd_everyday</Text>
              <Text style={styles.subText}>via frenchie_fry39</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingBtn}>
            <Text style={styles.settingText}>⋯</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/post.jpg")}
          style={styles.postImage}
          resizeMode="cover"
        />
        <View style={styles.iconRow}>
          <View style={styles.leftIconsGroup}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="chatbubble-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="paper-plane-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="bookmark-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentSection}>
          <View style={styles.likesRow}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatarlikes}
            />
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatarlikes}
            />
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatarlikes}
            />
            <Text style={styles.likestext}>
              Liked by
              <Text style={{ fontWeight: "bold" }}> paisley.print.48 </Text>
              and
              <Text style={{ fontWeight: "bold" }}> 7 others </Text>
            </Text>
          </View>
          <View style={styles.userPost}>
            <Text style={styles.contentText}>
              <Text style={styles.username}>frenchie_fry39 </Text>
              Fresh shot on a sunny day! ☀️
            </Text>
          </View>
          <Text style={styles.viewComment}>View all 12 comments</Text>
          <View>
            <Text style={styles.contentText}>
              <Text style={styles.username}>lil_wyatt838 </Text>
              Awesome tones
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.username}>pia.in.a.pod </Text>
              Gorg. Love it!❤️
            </Text>
          </View>
          <Text style={styles.postTime}>1 day ago</Text>
        </View>
      </ScrollView>

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
    left: 0,
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
    paddingBottom: 38,
    width: windowWidth,
    maxWidth: windowWidth,
  },

  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  username: {
    fontWeight: "600",
    fontSize: 15,
  },

  subText: {
    fontSize: 12,
    color: "#8e8e8e",
  },

  settingBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  settingText: {
    fontSize: 15,
  },

  postImage: {
    width: windowWidth,
    height: undefined,
    aspectRatio: 4 / 5,
  },

  iconRow: {
    flexDirection: "row",
    padding: 6,
    justifyContent: "space-between",
  },

  leftIconsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  iconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  contentSection: {
    paddingHorizontal: 10,
    gap: 6,
  },

  likesRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarlikes: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -3,
  },

  likestext: {
    fontSize: 13,
    color: "#111",
    marginLeft: 6,
  },

  userPost: {
    flexDirection: "row",
  },

  contentText: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },

  viewComment: {
    fontSize: 13,
    color: "#8e8e8e",
    marginTop: 4,
  },

  postTime: {
    fontSize: 11,
    color: "#8e8e8e",
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
