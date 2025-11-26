import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import IngredientItem from "./IngredientItem";

type IngredientsProps = {
	ingredients: { id: string; name: string }[];
};

export default function Ingredients({ ingredients }: IngredientsProps) {
	return (
		<>
			<View className="flex-row items-center justify-between my-5">
				<View className="items-center flex-row gap-x-3">
					<Ionicons
						name="list"
						size={18}
						style={{ backgroundColor: COLORS.primary }}
						className="p-2 rounded-full"
						color="white"
					/>
					<Text
						style={{ color: COLORS.primary }}
						className="text-2xl font-bold">
						Ingredients
					</Text>
				</View>
				<Text
					style={{
						color: COLORS.white,
						backgroundColor: COLORS.textLight,
					}}
					className="text-sm font-bold rounded-full px-3 py-1">
					{ingredients.length}
				</Text>
			</View>

			{ingredients.length > 0 &&
				ingredients.map((ingredient) => (
					<IngredientItem
						key={ingredient.id}
						ingredient={ingredient}
					/>
				))}
		</>
	);
}
