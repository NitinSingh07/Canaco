import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tw";

const steps = [
  { label: "Event", step: 1 },
  { label: "Venue", step: 2 },
  { label: "Date & Time", step: 3 },
  { label: "Confirm", step: 4 },
];

export default function StepIndicator({ currentStep = 4 }) {
  return (
    <View style={tw`flex-row items-center justify-center px-5 py-3`}>
      {steps.map((item, index) => {
        const isCompleted = item.step < currentStep;
        const isActive = item.step === currentStep;
        return (
          <React.Fragment key={item.step}>
            {index > 0 && (
              <View
                style={[
                  tw`flex-1 mx-0.5`,
                  { height: 1.5, backgroundColor: item.step <= currentStep ? "#C8374D" : "#D1D5DB" },
                ]}
              />
            )}
            <View style={[tw`items-center`, { width: 56 }]}>
              {isCompleted ? (
                <View style={tw`w-[26px] h-[26px] rounded-full bg-[#C8374D] items-center justify-center`}>
                  <Ionicons name="checkmark" size={14} color="#fff" />
                </View>
              ) : isActive ? (
                <View style={tw`w-[26px] h-[26px] rounded-full bg-[#C8374D] items-center justify-center`}>
                  <Text style={tw`text-white text-[11px] font-bold`}>{item.step}</Text>
                </View>
              ) : (
                <View style={tw`w-[26px] h-[26px] rounded-full bg-gray-300 items-center justify-center`}>
                  <Text style={tw`text-gray-500 text-[11px] font-semibold`}>{item.step}</Text>
                </View>
              )}
              <Text
                style={[
                  tw`text-[10px] mt-1`,
                  isActive
                    ? tw`text-[#C8374D] font-bold`
                    : isCompleted
                    ? tw`text-[#C8374D] font-semibold`
                    : tw`text-gray-400 font-medium`,
                ]}
                numberOfLines={1}
              >
                {item.label}
              </Text>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
}
