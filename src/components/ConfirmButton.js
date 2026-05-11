import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

export default function ConfirmButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`bg-brand rounded-2xl h-14 flex-row items-center justify-center w-full`,
        { 
          shadowColor: "#E8365D", 
          shadowOffset: { width: 0, height: 8 }, 
          shadowOpacity: 0.4, 
          shadowRadius: 24, 
          elevation: 10 
        }
      ]}
      activeOpacity={0.85}
    >
      <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
      <Text style={[tw`text-white text-[16px] font-semibold ml-2`, { letterSpacing: 0.3 }]}>Confirm & Book</Text>
    </TouchableOpacity>
  );
}
