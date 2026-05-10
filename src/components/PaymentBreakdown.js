import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

function LineItem({ icon, iconBg, label, sublabel, amount }) {
  return (
    <View style={tw`flex-row items-center py-4`}>
      <View style={[tw`w-9 h-9 rounded-full items-center justify-center mr-3`, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-[14px] text-[#1A1A2E] font-semibold`}>{label}</Text>
        <Text style={tw`text-[11px] text-[#9CA3AF] mt-0.5`}>{sublabel}</Text>
      </View>
      <Text style={tw`text-[15px] text-[#1A1A2E] font-bold`}>{amount}</Text>
    </View>
  );
}

export default function PaymentBreakdown() {
  return (
    <View style={tw`mx-4 mt-6`}>
      <Text style={[tw`text-[10px] text-[#9CA3AF] font-bold mb-3`, { letterSpacing: 1.5 }]}>PAYMENT BREAKDOWN</Text>
      <View style={[tw`bg-white rounded-2xl px-4`, { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 }]}>
        <LineItem
          icon={<Ionicons name="business-outline" size={18} color="#6366F1" />}
          iconBg="#EEF2FF"
          label="Venue cost"
          sublabel="DGB Convention Hall"
          amount="₹2,25,000"
        />
        <View style={tw`h-px bg-gray-100`} />
        <LineItem
          icon={<Ionicons name="settings-outline" size={18} color="#F59E0B" />}
          iconBg="#FFFBEB"
          label="Services cost"
          sublabel="Add-ons & extras"
          amount="₹52,000"
        />
      </View>
      <View style={tw`flex-row justify-between items-center mt-6 px-1`}>
        <Text style={tw`text-[16px] text-[#1A1A2E] font-bold`}>Subtotal</Text>
        <Text style={tw`text-[20px] text-[#1A1A2E] font-extrabold`}>₹2,77,000</Text>
      </View>
    </View>
  );
}
