import React from "react";
import { View, Text, Platform } from "react-native";
import tw from "../utils/tw";

export default function TotalDueCard() {
  return (
    <View style={[tw`mx-4 rounded-3xl overflow-hidden bg-[#1A1A2E]`, { shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 }]}>
      <View style={tw`px-5 py-4 flex-row justify-between items-center`}>
        <View>
          <Text style={{ fontSize: 9, letterSpacing: 1.5, color: "rgba(255,255,255,0.5)", fontWeight: "800", marginBottom: 4 }}>TOTAL DUE</Text>
          <Text style={[tw`text-white text-[24px] font-bold`, { fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'serif' }]}>₹2,77,000</Text>
          <Text style={[tw`text-[10px] font-medium mt-1`, { color: "rgba(255,255,255,0.4)" }]}>Full amount pending</Text>
        </View>
        <View style={[tw`rounded-xl px-4 py-2.5 items-center justify-center`, { backgroundColor: "#DE4A5C" }]}>
          <Text style={{ fontSize: 8, letterSpacing: 1.2, color: "rgba(255,255,255,0.8)", fontWeight: "800", marginBottom: 2 }}>BALANCE</Text>
          <Text style={[tw`text-white text-[15px] font-bold`, { fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'serif' }]}>₹2,77,000</Text>
        </View>
      </View>
    </View>
  );
}
