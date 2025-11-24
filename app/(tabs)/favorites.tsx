import AppWrapper from "@/components/AppWrapper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function favorites() {
	const router = useRouter();
	return (
		<AppWrapper>
			<View className="mb-3 flex-row items-center justify-between">
				<Text className="text-3xl  text-purple-900 font-bold">Favorites</Text>
				<MaterialIcons
					onPress={() => router.navigate("/signin")}
					name="logout"
					size={18}
					color="black"
					className="border rounded-full p-2 shadow-transparent"
				/>
			</View>
		</AppWrapper>
	);
}
