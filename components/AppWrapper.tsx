import { COLORS } from "@/constants/colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppWrapper({ children }: any) {
	return (
		<SafeAreaView
			style={{ backgroundColor: COLORS.background }}
			className="pt-5 px-5 flex-1">
			{children}
		</SafeAreaView>
	);
}
