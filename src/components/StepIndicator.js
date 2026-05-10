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
    <View style={tw`flex-row items-center justify-between px-8 py-3`}>
      {steps.map((item, index) => {
        const isCompleted = item.step < currentStep;
        const isActive = item.step === currentStep;
        const isPastOrActive = item.step <= currentStep;
        
        return (
          <React.Fragment key={item.step}>
            {index > 0 && (
              <View
                style={[
                  tw`flex-1`,
                  { 
                    height: 1, 
                    backgroundColor: isPastOrActive ? "#DB445A" : "#E5E7EB", 
                    marginHorizontal: -4,
                    zIndex: -1
                  },
                ]}
              />
            )}
            <View style={[tw`items-center`]}>
              <View 
                style={[
                  tw`w-7 h-7 rounded-full items-center justify-center`, 
                  isCompleted ? tw`bg-[#FCE7E9]` : isActive ? tw`bg-[#DB445A]` : tw`bg-gray-200`,
                  { zIndex: 10 }
                ]}
              >
                {isCompleted ? (
                  <Ionicons name="checkmark" size={16} color="#DB445A" />
                ) : isActive ? (
                  <Text style={tw`text-white text-[12px] font-bold`}>{item.step}</Text>
                ) : (
                  <Text style={tw`text-gray-500 text-[12px] font-bold`}>{item.step}</Text>
                )}
              </View>
              <Text
                style={[
                  tw`text-[10px] mt-2 font-bold absolute`,
                  { top: 28, width: 60, textAlign: 'center' },
                  isPastOrActive ? tw`text-[#DB445A]` : tw`text-[#64748B]`,
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
