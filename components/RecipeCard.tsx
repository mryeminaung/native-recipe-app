import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

type RecipeCardProps = {
	recipe: {
		strMeal: string;
		strMealThumb: string;
		idMeal: string;
	};
};

type Instruction = {
	text: string;
};

type Meal = {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
	strArea: string;
	strInstructions: string;
	text: Instruction;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
	const router = useRouter();
	const [meal, setMeal] = useState<Meal | undefined>();
	const [loading, setLoading] = useState(false);

	const parseInstructions = (meal: any): Instruction[] => {
		if (!meal.strInstructions) return [];

		const rawInstructions = meal.strInstructions;

		const stepBlocks: string[] = rawInstructions.split("\r\n\r\n");

		const instructions: Instruction[] = stepBlocks
			.map((block: string) => {
				const firstNewlineIndex = block.indexOf("\r\n");

				let instructionText = block.trim();

				if (firstNewlineIndex !== -1) {
					instructionText = block.substring(firstNewlineIndex + 2).trim();
				} else if (instructionText.startsWith("step")) {
					instructionText = instructionText
						.replace(/^step\s\d+\s*/i, "")
						.trim();
				}

				return {
					text: instructionText,
				};
			})
			.filter((step) => step.text !== "");

		return instructions;
	};

	const fetchMeal = async () => {
		try {
			setLoading(true);
			const res = await axios(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`,
			);
			const mealData = res.data.meals[0];

			if (mealData) {
				const instruction = parseInstructions(mealData)[0];

				setMeal({
					...mealData,
					idMeal: recipe.idMeal,
					text: instruction,
				});
			}
		} catch (error) {
			console.error("Failed to fetch meal:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMeal();
	}, [recipe]);

	return (
		<Pressable
			onPress={() => router.navigate(`/recipe/${recipe.idMeal}`)}
			className="bg-white rounded-3xl w-[48%] overflow-hidden"
			style={{ borderColor: COLORS.border }}>
			<Image
				style={{ width: "100%", height: 120, resizeMode: "cover" }}
				source={{
					uri: meal?.strMealThumb,
				}}
			/>
			<View className="p-3">
				<Text
					className="line-clamp-2 text-xl font-bold"
					style={{ color: COLORS.primary }}>
					{meal?.strMeal}
				</Text>
				<Text
					className="line-clamp-2 my-1.5"
					style={{ color: COLORS.textLight }}>
					{meal?.text?.text}
				</Text>
				<View className="flex-row items-center justify-between">
					<View className="flex-row items-center gap-x-1.5">
						<Ionicons
							name="time-outline"
							size={15}
							color={COLORS.textLight}
						/>
						<Text
							style={{ color: COLORS.textLight }}
							className="font-semibold text-sm">
							30 minutes
						</Text>
					</View>
					<View className="flex-row items-center gap-x-1.5">
						<Ionicons
							name="people-outline"
							size={15}
							color={COLORS.textLight}
						/>
						<Text
							className="font-semibold text-sm"
							style={{ color: COLORS.textLight }}>
							4
						</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
}
