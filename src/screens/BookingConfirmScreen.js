import React from "react";
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";
import StepIndicator from "../components/StepIndicator";
import BookingCard from "../components/BookingCard";
import PaymentBreakdown from "../components/PaymentBreakdown";
import Adjustments from "../components/Adjustments";
import PaymentMode from "../components/PaymentMode";
import TotalDueCard from "../components/TotalDueCard";
import ConfirmButton from "../components/ConfirmButton";

export default function BookingConfirmScreen() {
  const { width, height } = useWindowDimensions();
  // Constrain width for web to match mobile aspect ratio
  const maxW = Math.min(width, 400); 
  const isWide = width > 400;

  return (
    <View style={tw`flex-1 bg-[#E2E8F0] items-center justify-center`}>
      <View
        style={[
          tw`bg-white overflow-hidden`,
          isWide
            ? { width: maxW, height: height * 0.95, borderRadius: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 30, elevation: 15 }
            : { width: "100%", height: "100%" },
        ]}
      >
        {/* Header */}
        <View style={[tw`bg-white px-5 flex-row items-center justify-between relative`, { paddingTop: Platform.OS === "web" ? 20 : 50, paddingBottom: 15, zIndex: 10 }]}>
          <TouchableOpacity style={[tw`flex-row items-center absolute left-5`, {top: Platform.OS === "web" ? 22 : 52, zIndex: 20}]} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={18} color="#9CA3AF" />
            <Text style={tw`text-[#9CA3AF] text-[14px] font-medium ml-1`}>Back</Text>
          </TouchableOpacity>
          <View style={tw`flex-1 items-center`}>
            <Text style={[tw`text-[20px] text-[#1A1A2E] font-bold`, { fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'serif' }]}>Add New Booking</Text>
          </View>
        </View>

        {/* Stepper */}
        <View style={tw`bg-white pb-4 border-b border-gray-100`}>
          <StepIndicator currentStep={4} />
        </View>

        {/* Scrollable Content */}
        <View style={tw`flex-1 bg-[#F8FAFC] relative`}>
          <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
            <View style={tw`mt-5`}>
              <BookingCard />
            </View>
            <PaymentBreakdown />
            <Adjustments />
            <PaymentMode />
            <View style={tw`mt-2`}>
              <TotalDueCard />
            </View>
          </ScrollView>

          {/* FIXED BOTTOM AREA - Just the Button */}
          <View style={[tw`absolute bottom-0 left-0 right-0 pb-6 pt-4 px-4`, { 
            // Gradient or solid background to fade out scroll content
            backgroundColor: 'rgba(248, 250, 252, 0.95)',
          }]}>
            <ConfirmButton onPress={() => alert("Booking confirmed!")} />
          </View>
        </View>
      </View>
    </View>
  );
}
