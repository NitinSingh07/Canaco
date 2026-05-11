import React from "react";
import { View, Text, Platform } from "react-native";
import tw from "../utils/tw";

export default function TotalDueCard() {
  return (
    <View style={[tw`mx-4 rounded-[18px] bg-ink`, { padding: 16, paddingHorizontal: 20 }]}>
      <View style={tw`flex-row justify-between items-center`}>
        <View>
          <Text style={[tw`text-[11px] font-semibold uppercase opacity-50 text-white mb-1`, { letterSpacing: 1 }]}>
            Total due
          </Text>
          <Text style={[tw`text-white text-[28px] font-semibold`, { fontFamily: Platform.OS === 'ios' ? 'Playfair Display' : 'serif', lineHeight: 28 }]}>
            ₹2,77,000
          </Text>
          <Text style={[tw`text-[11px] font-medium mt-1 opacity-45 text-white`]}>
            Full amount pending
          </Text>
        </View>
        <View style={[tw`rounded-xl border border-[rgba(232,54,93,0.3)] items-center justify-center`, { backgroundColor: 'rgba(232,54,93,0.2)', paddingVertical: 8, paddingHorizontal: 14 }]}>
          <Text style={[tw`text-[10px] font-semibold uppercase text-brandMuted`, { letterSpacing: 0.8 }]}>
            Balance
          </Text>
          <Text style={[tw`text-[#ff8fa8] text-[15px] font-semibold mt-0.5`]}>
            ₹2,77,000
          </Text>
        </View>
      </View>
    </View>
  );
}
