import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppWrapper({ children }: any) {
	return <SafeAreaView className="flex-1 py-8 px-8">{children}</SafeAreaView>;
}
