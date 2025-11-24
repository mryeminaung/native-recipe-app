import AppWrapper from "@/components/AppWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TextInput, View } from "react-native";

export default function search() {
	return (
		<AppWrapper>
			<View className="flex-row px-4 gap-x-2 py-0.5 border border-gray-500 rounded-2xl items-center">
				<Ionicons
					name="search-sharp"
					size={20}
					className="text-purple-900"
					color="purple"
				/>
				<TextInput
					className=""
					placeholder="Search recipes, ingredients..."
				/>
			</View>
			<View className="my-5 flex-row items-center justify-between">
				<Text className="text-xl  text-purple-900 font-bold">
					Popular Recipes
				</Text>
				<Text className="text-base text-purple-700 font-bold">12 Found</Text>
			</View>
		</AppWrapper>
	);
}
