import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

export default function BookingCard() {
  return (
    <View style={[tw`mx-4 rounded-3xl overflow-hidden bg-[#C8374D]`, { shadowColor: "#C8374D", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.4, shadowRadius: 20, elevation: 12 }]}>
      {/* Top section */}
      <View style={tw`px-6 pt-6 pb-5`}>
        <View style={tw`flex-row justify-between items-start mb-2`}>
          <Text style={{ fontSize: 10, letterSpacing: 1.5, color: "rgba(255,255,255,0.7)", fontWeight: "800" }}>
            BOOKING CONFIRMATION
          </Text>
          <View style={[tw`rounded-lg px-3 py-1`, { backgroundColor: "rgba(255,255,255,0.2)" }]}>
            <Text style={{ fontSize: 10, color: "#fff", fontWeight: "800", letterSpacing: 0.5 }}>
              NX-260412Z9U8
            </Text>
          </View>
        </View>

        <Text style={[tw`text-white text-[28px] font-black mb-4`, { letterSpacing: 0.5 }]}>
          DGB Convention
        </Text>

        <View style={tw`flex-row flex-wrap gap-2.5 mb-2`}>
          <View style={[tw`flex-row items-center rounded-full px-4 py-2`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="calendar-outline" size={14} color="#fff" />
            <Text style={[tw`text-[12px] ml-2 font-bold text-white`]}>12 April 2026</Text>
          </View>
          <View style={[tw`flex-row items-center rounded-full px-4 py-2`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="time-outline" size={14} color="#fff" />
            <Text style={[tw`text-[12px] ml-2 font-bold text-white`]}>3:00 AM – 8:00 PM</Text>
          </View>
        </View>
        <View style={tw`flex-row mt-1`}>
          <View style={[tw`flex-row items-center rounded-full px-4 py-2`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="location-outline" size={14} color="#fff" />
            <Text style={[tw`text-[12px] ml-2 font-bold text-white`]}>Kakinada</Text>
          </View>
        </View>
      </View>

      {/* Client section */}
      <View style={[tw`px-6 py-4 flex-row justify-between items-center`, { backgroundColor: "rgba(0,0,0,0.05)" }]}>
        <View>
          <Text style={{ fontSize: 10, letterSpacing: 1.5, color: "rgba(255,255,255,0.6)", fontWeight: "800", marginBottom: 2 }}>CLIENT</Text>
          <Text style={tw`text-white text-[18px] font-black`}>Ty</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Ionicons name="call-outline" size={16} color="rgba(255,255,255,0.8)" />
          <Text style={[tw`text-[15px] ml-2 font-black text-white`]}>335</Text>
        </View>
      </View>
    </View>
  );
}
