import React, { useState } from "react";
import { View, Text, TextInput, Platform } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import tw from "../utils/tw";

function AdjustmentRow({ icon, iconBg, label, sublabel, value, onChangeText }) {
  return (
    <View style={tw`flex-row items-center py-3.5`}>
      <View style={[tw`w-10 h-10 rounded-xl items-center justify-center mr-3`, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-[14px] text-[#334155] font-semibold`}>{label}</Text>
        <Text style={tw`text-[11px] text-[#94A3B8] font-medium mt-0.5`}>{sublabel}</Text>
      </View>
      <View style={[tw`bg-white rounded-xl px-4 py-2.5 items-center border border-gray-200`, { width: 90 }]}>
        <TextInput
          style={[tw`text-[14px] text-[#0F172A] font-bold text-center`, { padding: 0, margin: 0, width: "100%", outlineStyle: "none" }]}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#0F172A"
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
      <Text style={[tw`text-[10px] text-[#94A3B8] font-bold mb-3 uppercase`, { letterSpacing: 1 }]}>ADJUSTMENTS</Text>
      <View style={[tw`bg-white rounded-2xl px-4`, { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }]}>
        <AdjustmentRow
          icon={<MaterialCommunityIcons name="target" size={20} color="#F59E0B" />}
          iconBg="#FFFBEB"
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
          icon={<FontAwesome5 name="dollar-sign" size={16} color="#10B981" />}
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
