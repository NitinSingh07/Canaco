import React, { useState } from "react";
import { View, Text, TextInput, Platform, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import tw from "../utils/tw";

const modes = [
  { key: "Cash", icon: "cash-outline" },
  { key: "Card", icon: "card-outline" },
  { key: "UPI", icon: "layers-outline" },
  { key: "Bank", icon: "business-outline" },
];

function FieldRow({ icon, iconBg, iconColor, label, sublabel, value, onChangeText, isLast }) {
  return (
    <View style={[tw`flex-row items-center py-3 px-4.5`, !isLast && tw`border-b border-gray-50`]}>
      <View style={[tw`w-8 h-8 rounded-lg items-center justify-center mr-2.5`, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={15} color={iconColor} />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-[13px] text-inkSoft`}>{label}</Text>
        <Text style={tw`text-[11px] text-inkMuted mt-0.5`}>{sublabel}</Text>
      </View>
      <TextInput
        style={[tw`w-28 h-10 border-[1.5px] border-gray-100 rounded-lg bg-surface2 text-ink text-[14px] font-semibold text-right px-3`, { outlineStyle: 'none' }]}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder="₹"
      />
    </View>
  );
}

export default function Adjustments() {
  const [gst, setGst] = useState("0");
  const [discount, setDiscount] = useState("0");
  const [amountPaid, setAmountPaid] = useState("0");
  const [selectedMode, setSelectedMode] = useState("Cash");

  return (
    <View style={tw`mt-3`}>
      <Text style={[tw`text-[10px] text-inkMuted font-semibold px-5 mb-2 uppercase`, { letterSpacing: 1.2 }]}>
        Adjustments
      </Text>
      <View style={[tw`mx-4 bg-white rounded-[18px] border border-gray-100 overflow-hidden`]}>
        <FieldRow
          icon="calculator-outline"
          iconColor="#F59B00"
          iconBg="#fff8ec"
          label="GST"
          sublabel="₹0 on ₹2,77,000"
          value={gst}
          onChangeText={setGst}
        />
        <FieldRow
          icon="gift-outline"
          iconColor="#E8365D"
          iconBg="#ffeef3"
          label="Discount"
          sublabel="No discount applied"
          value={discount}
          onChangeText={setDiscount}
        />
        <FieldRow
          icon="cash-outline"
          iconColor="#1DAA6B"
          iconBg="#e8f8f1"
          label="Amount paid"
          sublabel="Balance: ₹2,77,000"
          value={amountPaid}
          onChangeText={setAmountPaid}
        />

        {/* Payment Mode inside the same card */}
        <View style={tw`px-4.5 py-3`}>
          <View style={tw`flex-row items-center mb-2.5`}>
            <View style={[tw`w-8 h-8 rounded-lg items-center justify-center mr-2.5`, { backgroundColor: "#e8f1fd" }]}>
              <Ionicons name="card-outline" size={15} color="#1A73E8" />
            </View>
            <Text style={tw`text-[13px] text-inkSoft`}>Payment mode</Text>
          </View>
          <View style={tw`flex-row gap-1.5`}>
            {modes.map((mode) => {
              const active = selectedMode === mode.key;
              return (
                <TouchableOpacity
                  key={mode.key}
                  onPress={() => setSelectedMode(mode.key)}
                  style={[
                    tw`flex-1 h-9 rounded-lg border-[1.5px] flex-row items-center justify-center gap-1.5`,
                    active ? tw`bg-brandLight border-brandMuted` : tw`bg-surface2 border-gray-100`
                  ]}
                >
                  <Ionicons name={mode.icon} size={13} color={active ? "#E8365D" : "#9898B0"} />
                  <Text style={[tw`text-[12px] font-medium`, active ? tw`text-brand font-semibold` : tw`text-inkMuted`]}>
                    {mode.key}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}
