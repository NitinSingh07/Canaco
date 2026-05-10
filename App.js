import React from "react";
import { StatusBar } from "expo-status-bar";
import BookingConfirmScreen from "./src/screens/BookingConfirmScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <BookingConfirmScreen />
    </>
  );
}
