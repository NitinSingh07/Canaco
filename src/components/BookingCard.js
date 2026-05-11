import React from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

export default function BookingCard() {
  return (
    <View style={[tw`mx-4 mt-4 rounded-[20px] overflow-hidden bg-brand relative`, { padding: 20 }]}>
      {/* Decorative background circles matching HTML before/after */}
      <View style={[tw`absolute rounded-full`, { top: -30, right: -30, width: 120, height: 120, backgroundColor: 'rgba(255,255,255,0.08)', zIndex: 0 }]} />
      <View style={[tw`absolute rounded-full`, { bottom: -20, left: -20, width: 80, height: 80, backgroundColor: 'rgba(255,255,255,0.06)', zIndex: 0 }]} />

      {/* Top section */}
      <View style={tw`z-10`}>
        <View style={tw`flex-row justify-between items-start mb-3.5`}>
          <View>
            <Text style={[tw`text-[10px] font-semibold uppercase text-white opacity-70 mb-1`, { letterSpacing: 1.2 }]}>
              Booking confirmation
            </Text>
            <Text style={[tw`text-white text-[22px] font-semibold`, { fontFamily: Platform.OS === 'ios' ? 'Playfair Display' : 'serif', lineHeight: 24 }]}>
              DGB Convention
            </Text>
          </View>
          <View style={[tw`rounded-lg px-2.5 py-1.5`, { backgroundColor: "rgba(255,255,255,0.18)" }]}>
            <Text style={tw`text-[11px] color-white font-semibold tracking-wider`}>
              NX-260412Z9U8
            </Text>
          </View>
        </View>

        <View style={tw`flex-row flex-wrap gap-2.5 mt-2.5`}>
          <View style={[tw`flex-row items-center rounded-lg px-2.5 py-1.5`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="calendar-outline" size={12} color="rgba(255,255,255,0.75)" />
            <Text style={[tw`text-[12px] ml-1.5 font-medium text-white opacity-90`]}>12 April 2026</Text>
          </View>
          <View style={[tw`flex-row items-center rounded-lg px-2.5 py-1.5`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="time-outline" size={12} color="rgba(255,255,255,0.75)" />
            <Text style={[tw`text-[12px] ml-1.5 font-medium text-white opacity-90`]}>3:00 AM – 8:00 PM</Text>
          </View>
          <View style={[tw`flex-row items-center rounded-lg px-2.5 py-1.5`, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Ionicons name="location-outline" size={12} color="rgba(255,255,255,0.75)" />
            <Text style={[tw`text-[12px] ml-1.5 font-medium text-white opacity-90`]}>Kakinada</Text>
          </View>
        </View>
      </View>

      <View style={[tw`h-px w-full my-3.5`, { backgroundColor: 'rgba(255,255,255,0.15)' }]} />

      {/* Client section */}
      <View style={tw`flex-row justify-between items-center z-10`}>
        <View>
          <Text style={[tw`text-[10px] font-semibold uppercase text-white opacity-60 mb-1`, { letterSpacing: 1 }]}>Client</Text>
          <Text style={tw`text-white text-[15px] font-semibold`}>Ty</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Ionicons name="call-outline" size={12} color="rgba(255,255,255,0.6)" />
          <Text style={[tw`text-[13px] ml-1.5 font-medium text-white opacity-75`]}>335</Text>
        </View>
      </View>
    </View>
  );
}
