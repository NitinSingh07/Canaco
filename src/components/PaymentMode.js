import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "../utils/tw";

const modes = [
  { key: "cash", label: "Cash", icon: "cash-outline", type: 'ion' },
  { key: "card", label: "Card", icon: "card-outline", type: 'ion' },
  { key: "upi", label: "UPI", icon: "phone-portrait-outline", type: 'ion' },
  { key: "bank", label: "Bank", icon: "bank-outline", type: 'mat' },
];

export default function PaymentMode() {
  const [selected, setSelected] = useState("cash");

  return (
    <View style={tw`mx-4 mt-6`}>
      <View style={tw`flex-row items-center mb-4`}>
        <View style={tw`w-9 h-9 rounded-xl bg-blue-50 items-center justify-center mr-3`}>
          <Ionicons name="card" size={20} color="#6366F1" />
        </View>
        <Text style={tw`text-[15px] text-[#1A1A2E] font-bold`}>Payment mode</Text>
      </View>
      <View style={[tw`flex-row flex-wrap gap-2.5`, { marginLeft: 0 }]}>
        {modes.map((mode) => {
          const active = selected === mode.key;
          return (
            <TouchableOpacity
              key={mode.key}
              onPress={() => setSelected(mode.key)}
              style={[
                tw`flex-row items-center rounded-xl px-5 py-3 border-2`,
                active
                  ? tw`bg-red-50 border-[#C8374D]`
                  : tw`bg-white border-gray-100`,
                { flex: 1, minWidth: '22%' }
              ]}
              activeOpacity={0.7}
            >
              {mode.type === 'ion' ? (
                <Ionicons name={mode.icon} size={16} color={active ? "#C8374D" : "#9CA3AF"} />
              ) : (
                <MaterialCommunityIcons name={mode.icon} size={16} color={active ? "#C8374D" : "#9CA3AF"} />
              )}
              <Text style={[tw`text-[13px] ml-2 font-bold`, active ? tw`text-[#C8374D]` : tw`text-[#9CA3AF]`]}>
                {mode.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
