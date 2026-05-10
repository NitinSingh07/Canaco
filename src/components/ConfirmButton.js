import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

export default function ConfirmButton({ onPress }) {
  return (
    <View style={tw`mx-2`}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          tw`bg-[#DE4A5C] rounded-2xl py-4 flex-row items-center justify-center`,
          { 
            shadowColor: "#DE4A5C", 
            shadowOffset: { width: 0, height: 6 }, 
            shadowOpacity: 0.4, 
            shadowRadius: 15, 
            elevation: 10 
          }
        ]}
        activeOpacity={0.85}
      >
        <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
        <Text style={[tw`text-white text-[16px] font-bold ml-2`, { letterSpacing: 0.5 }]}>Confirm & Book</Text>
      </TouchableOpacity>
    </View>
  );
}
