import React from "react";
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";
import StepIndicator from "../components/StepIndicator";
import BookingCard from "../components/BookingCard";
import PaymentBreakdown from "../components/PaymentBreakdown";
import Adjustments from "../components/Adjustments";
import TotalDueCard from "../components/TotalDueCard";
import ConfirmButton from "../components/ConfirmButton";

export default function BookingConfirmScreen() {
  const { width, height } = useWindowDimensions();
  const maxW = Math.min(width, 390); 
  const isWide = width > 420;

  return (
    <View style={tw`flex-1 bg-[#dddde8] items-center justify-center`}>
      <View
        style={[
          tw`bg-surface2 overflow-hidden`,
          isWide
            ? { width: maxW, height: height * 0.95, borderRadius: 32, shadowColor: "#1a1a2e", shadowOffset: { width: 0, height: 24 }, shadowOpacity: 0.2, shadowRadius: 80, elevation: 20 }
            : { width: "100%", height: "100%" },
        ]}
      >
        {/* Header */}
        <View style={[tw`bg-surface px-5 relative`, { paddingTop: Platform.OS === "web" ? 18 : 50, paddingBottom: 0, zIndex: 10, borderBottomWidth: 1, borderBottomColor: "rgba(26,26,46,0.08)" }]}>
          <View style={tw`flex-row items-center justify-between mb-4`}>
            <TouchableOpacity style={tw`flex-row items-center absolute left-0 z-20`} activeOpacity={0.7}>
              <Ionicons name="chevron-back" size={16} color="#9898b0" />
              <Text style={tw`text-inkMuted text-[13px] font-medium ml-1`}>Back</Text>
            </TouchableOpacity>
            <View style={tw`flex-1 items-center`}>
              <Text style={[tw`text-[17px] text-ink font-semibold`, { fontFamily: Platform.OS === 'ios' ? 'Playfair Display' : 'serif' }]}>Add New Booking</Text>
            </View>
          </View>
          
          {/* Stepper inside header */}
          <View style={tw`pb-4`}>
            <StepIndicator currentStep={4} />
          </View>
        </View>

        {/* Scrollable Content */}
        <View style={tw`flex-1`}>
          <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
            <BookingCard />
            <PaymentBreakdown />
            <Adjustments />
            <View style={tw`mt-3 mb-4`}>
              <TotalDueCard />
            </View>
          </ScrollView>

          {/* Fixed Bottom Button Area */}
          <View style={[tw`absolute bottom-0 left-0 right-0 px-5 pb-8 pt-4`, { 
            backgroundColor: 'transparent',
            // Using a linear gradient look on web if possible, or just solid
          }]}>
             {/* We can use a View with specific background for the button area */}
             <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(247,247,251,0.95)', zIndex: -1 }]} />
            <ConfirmButton onPress={() => alert("Booking confirmed!")} />
          </View>
        </View>
      </View>
    </View>
  );
}
