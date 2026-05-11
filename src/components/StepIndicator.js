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
    <View style={tw`flex-row items-center justify-between`}>
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
                    height: 2, 
                    backgroundColor: isCompleted ? "#f9c9d6" : "rgba(26,26,46,0.08)", 
                    marginHorizontal: -10,
                    zIndex: 0,
                    top: -10 // Align with center of circles
                  },
                ]}
              />
            )}
            <View style={[tw`items-center`, { zIndex: 1, flex: 1 }]}>
              <View 
                style={[
                  tw`w-7 h-7 rounded-full items-center justify-center mb-1.5`, 
                  isCompleted ? tw`bg-brandMuted` : isActive ? tw`bg-brand` : tw`bg-surface3`,
                  isActive && { shadowColor: "#E8365D", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 12, elevation: 5 }
                ]}
              >
                {isCompleted ? (
                  <Ionicons name="checkmark" size={14} color="#E8365D" />
                ) : isActive ? (
                  <Text style={tw`text-white text-[11px] font-bold`}>{item.step}</Text>
                ) : (
                  <Text style={tw`text-inkMuted text-[11px] font-bold`}>{item.step}</Text>
                )}
              </View>
              <Text
                style={[
                  tw`text-[10px] font-medium`,
                  isActive ? tw`text-brand` : isCompleted ? tw`text-inkSoft` : tw`text-inkMuted`,
                ]}
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
