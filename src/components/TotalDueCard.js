import React from "react";
import { View, Text } from "react-native";
import tw from "../utils/tw";

export default function TotalDueCard() {
  return (
    <View style={[tw`mx-4 mt-8 rounded-3xl overflow-hidden bg-[#1A1A2E]`, { shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 12 }]}>
      <View style={tw`px-6 py-6 flex-row justify-between items-center`}>
        <View>
          <Text style={{ fontSize: 10, letterSpacing: 1.5, color: "rgba(255,255,255,0.5)", fontWeight: "800", marginBottom: 6 }}>TOTAL DUE</Text>
          <Text style={[tw`text-white text-[32px] font-black`, { letterSpacing: 0.5 }]}>₹2,77,000</Text>
          <Text style={[tw`text-[12px] font-bold mt-1`, { color: "rgba(255,255,255,0.4)" }]}>Full amount pending</Text>
        </View>
        <View style={[tw`rounded-2xl px-5 py-4 items-center`, { backgroundColor: "#C8374D" }]}>
          <Text style={{ fontSize: 9, letterSpacing: 1.2, color: "rgba(255,255,255,0.9)", fontWeight: "800", marginBottom: 2 }}>BALANCE</Text>
          <Text style={tw`text-white text-[18px] font-black`}>₹2,77,000</Text>
        </View>
      </View>
    </View>
  );
}
