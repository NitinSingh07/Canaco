import React from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

function LineItem({ icon, iconBg, label, sublabel, amount }) {
  return (
    <View style={tw`flex-row items-center py-3.5`}>
      <View style={[tw`w-10 h-10 rounded-xl items-center justify-center mr-3`, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-[14px] text-[#334155] font-semibold`}>{label}</Text>
        <Text style={tw`text-[11px] text-[#94A3B8] font-medium mt-0.5`}>{sublabel}</Text>
      </View>
      <Text style={[tw`text-[15px] text-[#0F172A] font-bold`, { fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif' }]}>{amount}</Text>
    </View>
  );
}

export default function PaymentBreakdown() {
  return (
    <View style={tw`mx-4 mt-6`}>
      <Text style={[tw`text-[10px] text-[#94A3B8] font-bold mb-3 uppercase`, { letterSpacing: 1 }]}>PAYMENT BREAKDOWN</Text>
      <View style={[tw`bg-white rounded-2xl px-4`, { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 }]}>
        <LineItem
          icon={<Ionicons name="home-outline" size={18} color="#6366F1" />}
          iconBg="#EEF2FF"
          label="Venue cost"
          sublabel="DGB Convention Hall"
          amount="₹2,25,000"
        />
        <View style={tw`h-px bg-gray-100`} />
        <LineItem
          icon={<Ionicons name="star-outline" size={18} color="#10B981" />}
          iconBg="#ECFDF5"
          label="Services cost"
          sublabel="Add-ons & extras"
          amount="₹52,000"
        />
      </View>
      
      {/* Subtotal is outside the white card in my previous design, but in the reference image it is in its OWN white card or part of the same one? Let's look closely.
          Actually, the reference image shows Subtotal is in a light grey area? No, it's inside a slightly darker white/grey block, or maybe just the container. It looks like it's inside a white container that has rounded bottoms. Wait, the Adjustments are below. Let's put Subtotal in its own rounded container or just keep it simple.
          Actually, in the reference, Subtotal seems to be on the same white background as the breakdown items! Wait, no, there is a line separator, and Subtotal is below it. Yes, it's one big card.
       */}
       <View style={[tw`bg-[#F8FAFC] rounded-2xl px-4 py-4 mt-2 flex-row justify-between items-center`, { shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.02, shadowRadius: 4, elevation: 1 }]}>
          <Text style={tw`text-[14px] text-[#1E293B] font-bold`}>Subtotal</Text>
          <Text style={[tw`text-[20px] text-[#0F172A] font-bold`, { fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'serif' }]}>₹2,77,000</Text>
       </View>
    </View>
  );
}
