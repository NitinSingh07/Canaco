import React from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

function LineItem({ icon, iconBg, iconColor, label, sublabel, amount }) {
  return (
    <View style={tw`flex-row items-center py-3.5 px-4.5 border-b border-gray-100`}>
      <View style={[tw`w-8 h-8 rounded-lg items-center justify-center mr-2.5`, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={15} color={iconColor} />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-[13px] text-inkSoft font-normal`}>{label}</Text>
        <Text style={tw`text-[11px] text-inkMuted mt-0.5`}>{sublabel}</Text>
      </View>
      <Text style={tw`text-[14px] text-ink font-semibold`}>{amount}</Text>
    </View>
  );
}

export default function PaymentBreakdown() {
  return (
    <View style={tw`mt-4`}>
      <Text style={[tw`text-[10px] text-inkMuted font-semibold px-5 mb-2 uppercase`, { letterSpacing: 1.2 }]}>
        Payment breakdown
      </Text>
      <View style={[tw`mx-4 bg-white rounded-[18px] border border-gray-100 overflow-hidden`]}>
        <LineItem
          icon="home"
          iconColor="#1A73E8"
          iconBg="#e8f1fd"
          label="Venue cost"
          sublabel="DGB Convention Hall"
          amount="₹2,25,000"
        />
        <LineItem
          icon="star"
          iconColor="#1DAA6B"
          iconBg="#e8f8f1"
          label="Services cost"
          sublabel="Add-ons & extras"
          amount="₹52,000"
        />
        
        <View style={tw`bg-surface2 px-4.5 py-3.5 flex-row justify-between items-center`}>
          <Text style={tw`text-[13px] text-ink font-semibold`}>Subtotal</Text>
          <Text style={[tw`text-[20px] text-ink font-semibold`, { fontFamily: Platform.OS === 'ios' ? 'Playfair Display' : 'serif' }]}>₹2,77,000</Text>
        </View>
      </View>
    </View>
  );
}
