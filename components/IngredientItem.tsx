import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

type IngredientItemProps = {
	ingredient: { id: string; name: string };
};

export default function IngredientItem({ ingredient }: IngredientItemProps) {
	return (
		<View
			style={{
				backgroundColor: COLORS.card,
			}}
			className="py-3.5 mb-4 px-5 rounded-2xl flex-row items-center justify-between elevation-lg">
			<View className="flex-row items-center flex-1 mr-2">
				<Text
					style={{
						color: COLORS.text,
						backgroundColor: COLORS.background,
					}}
					className="text-sm font-bold rounded-full py-1.5 px-3 mr-3">
					{ingredient.id}
				</Text>
				<Text
					style={{ color: COLORS.primary, fontWeight: "400" }}
					className="flex-1">
					{ingredient.name}
				</Text>
			</View>
			<Ionicons
				name="checkmark-circle-outline"
				size={20}
				color={COLORS.textLight}
			/>
		</View>
	);
}
