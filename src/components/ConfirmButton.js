import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

export default function ConfirmButton({ onPress }) {
  return (
    <View style={tw`mx-4 mt-8 mb-10`}>
      <TouchableOpacity
        onPress={onPress}
        style={[tw`bg-[#C8374D] rounded-2xl py-4.5 flex-row items-center justify-center`, { shadowColor: "#C8374D", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.4, shadowRadius: 20, elevation: 10 }]}
        activeOpacity={0.85}
      >
        <Ionicons name="checkmark-circle-outline" size={22} color="#fff" />
        <Text style={[tw`text-white text-[16px] font-bold ml-2.5`, { letterSpacing: 0.5 }]}>Confirm & Book</Text>
      </TouchableOpacity>
    </View>
  );
}
