import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "../utils/tw";

function AdjustmentRow({ icon, iconBg, label, sublabel, value, onChangeText }) {
  return (
    <View style={tw`flex-row items-center py-4`}>
      <View style={[tw`w-9 h-9 rounded-full items-center justify-center mr-3`, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-[14px] text-[#1A1A2E] font-semibold`}>{label}</Text>
        <Text style={tw`text-[11px] text-[#9CA3AF] mt-0.5`}>{sublabel}</Text>
      </View>
      <View style={[tw`bg-[#F3F4F6] rounded-xl px-4 py-2 items-center`, { minWidth: 80 }]}>
        <TextInput
          style={[tw`text-[15px] text-[#1A1A2E] font-bold text-center`, { padding: 0, margin: 0, minWidth: 40, outlineStyle: "none" }]}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </View>
  );
}

export default function Adjustments() {
  const [gst, setGst] = useState("0");
  const [discount, setDiscount] = useState("0");
  const [amountPaid, setAmountPaid] = useState("0");

  return (
    <View style={tw`mx-4 mt-6`}>
      <Text style={[tw`text-[10px] text-[#9CA3AF] font-bold mb-3`, { letterSpacing: 1.5 }]}>ADJUSTMENTS</Text>
      <View style={[tw`bg-white rounded-2xl px-4`, { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 }]}>
        <AdjustmentRow
          icon={<MaterialCommunityIcons name="scissors-cutting" size={18} color="#EF4444" />}
          iconBg="#FEF2F2"
          label="GST"
          sublabel="₹0 on ₹2,77,000"
          value={gst}
          onChangeText={setGst}
        />
        <View style={tw`h-px bg-gray-100`} />
        <AdjustmentRow
          icon={<Ionicons name="gift-outline" size={18} color="#EF4444" />}
          iconBg="#FEF2F2"
          label="Discount"
          sublabel="No discount applied"
          value={discount}
          onChangeText={setDiscount}
        />
        <View style={tw`h-px bg-gray-100`} />
        <AdjustmentRow
          icon={<MaterialCommunityIcons name="currency-usd" size={18} color="#10B981" />}
          iconBg="#ECFDF5"
          label="Amount paid"
          sublabel="Balance: ₹2,77,000"
          value={amountPaid}
          onChangeText={setAmountPaid}
        />
      </View>
    </View>
  );
}
