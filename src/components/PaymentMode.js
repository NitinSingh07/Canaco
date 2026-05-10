import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import tw from "../utils/tw";

const modes = [
  { key: "cash", label: "Cash", icon: <Ionicons name="cash-outline" size={16} />, activeIcon: <Ionicons name="cash" size={16} /> },
  { key: "card", label: "Card", icon: <Ionicons name="card-outline" size={16} />, activeIcon: <Ionicons name="card" size={16} /> },
  { key: "upi", label: "UPI", icon: <SimpleLineIcons name="layers" size={14} />, activeIcon: <SimpleLineIcons name="layers" size={14} /> },
  { key: "bank", label: "Bank", icon: <SimpleLineIcons name="home" size={14} />, activeIcon: <SimpleLineIcons name="home" size={14} /> },
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
      <View style={[tw`flex-row flex-wrap gap-2`, { marginLeft: 0 }]}>
        {modes.map((mode) => {
          const active = selected === mode.key;
          return (
            <TouchableOpacity
              key={mode.key}
              onPress={() => setSelected(mode.key)}
              style={[
                tw`flex-row items-center rounded-xl px-4 py-2.5 border-2`,
                active
                  ? tw`bg-red-50 border-[#C8374D]`
                  : tw`bg-white border-gray-100`,
                { flex: 1, minWidth: '22%' }
              ]}
              activeOpacity={0.7}
            >
              {React.cloneElement(active ? mode.activeIcon : mode.icon, { color: active ? "#C8374D" : "#9CA3AF" })}
              <Text style={[tw`text-[12px] ml-2 font-black`, active ? tw`text-[#C8374D]` : tw`text-[#9CA3AF]`]}>
                {mode.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
