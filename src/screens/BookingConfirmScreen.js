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
  const { width } = useWindowDimensions();
  const maxW = Math.min(width, 450);
  const isWide = width > 500;

  return (
    <View style={tw`flex-1 bg-[#F5F5F7]`}>
      <View
        style={[
          tw`flex-1`,
          isWide
            ? { alignSelf: "center", width: maxW, backgroundColor: "#FFFFFF", shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 30, elevation: 15, borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#E5E7EB" }
            : { width: "100%" },
        ]}
      >
        {/* Header */}
        <View style={[tw`bg-white px-6 flex-row items-center`, { paddingTop: Platform.OS === "web" ? 20 : 56, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: "#F3F4F6" }]}>
          <TouchableOpacity style={tw`flex-row items-center mr-3`} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={24} color="#C8374D" />
            <Text style={tw`text-[#C8374D] text-[15px] font-bold ml-1`}>Back</Text>
          </TouchableOpacity>
          <Text style={tw`text-[20px] text-[#1A1A2E] font-black flex-1`}>Add New Booking</Text>
        </View>

        {/* Stepper */}
        <View style={tw`bg-white pb-4`}>
          <StepIndicator currentStep={4} />
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
          <View style={tw`mt-5`}>
            <BookingCard />
          </View>
          <PaymentBreakdown />
          <Adjustments />
          <PaymentMode />
          <TotalDueCard />
          <ConfirmButton onPress={() => alert("Booking confirmed!")} />
        </ScrollView>
      </View>
    </View>
  );
}
