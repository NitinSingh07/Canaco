import React from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

export default function BookingCard() {
  return (
    <View style={[tw`mx-4 rounded-3xl overflow-hidden bg-[#DE4A5C]`, { shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 }]}>
      {/* Top section */}
      <View style={tw`px-5 pt-6 pb-4`}>
        <View style={tw`flex-row justify-between items-center mb-3`}>
          <Text style={{ fontSize: 9, letterSpacing: 1.2, color: "rgba(255,255,255,0.9)", fontWeight: "700" }}>
            BOOKING CONFIRMATION
          </Text>
          <View style={[tw`rounded-lg px-2.5 py-1`, { backgroundColor: "rgba(255,255,255,0.2)" }]}>
            <Text style={{ fontSize: 10, color: "#fff", fontWeight: "700" }}>
              NX-260412Z9U8
            </Text>
          </View>
        </View>

        <Text style={[tw`text-white text-[28px] font-bold mb-4`, { letterSpacing: 0, fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'serif' }]}>
          DGB Convention
        </Text>

        <View style={tw`flex-row flex-wrap gap-2 mb-2`}>
          <View style={[tw`flex-row items-center rounded-xl px-3 py-1.5`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="calendar-outline" size={14} color="#fff" />
            <Text style={[tw`text-[11px] ml-1.5 font-medium text-white`]}>12 April 2026</Text>
          </View>
          <View style={[tw`flex-row items-center rounded-xl px-3 py-1.5`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="time-outline" size={14} color="#fff" />
            <Text style={[tw`text-[11px] ml-1.5 font-medium text-white`]}>3:00 AM – 8:00 PM</Text>
          </View>
        </View>
        <View style={tw`flex-row`}>
          <View style={[tw`flex-row items-center rounded-xl px-3 py-1.5`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="location-outline" size={14} color="#fff" />
            <Text style={[tw`text-[11px] ml-1.5 font-medium text-white`]}>Kakinada</Text>
          </View>
        </View>
      </View>

      {/* Client section */}
      <View style={[tw`px-5 py-4 flex-row justify-between items-center`, { backgroundColor: "rgba(0,0,0,0.08)" }]}>
        <View>
          <Text style={{ fontSize: 9, letterSpacing: 1.5, color: "rgba(255,255,255,0.7)", fontWeight: "700", marginBottom: 2 }}>CLIENT</Text>
          <Text style={tw`text-white text-[16px] font-bold`}>Ty</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Ionicons name="call-outline" size={16} color="#fff" />
          <Text style={[tw`text-[14px] ml-1.5 font-medium text-white`]}>335</Text>
        </View>
      </View>
    </View>
  );
}
