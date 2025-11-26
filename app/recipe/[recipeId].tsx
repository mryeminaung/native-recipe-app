import RecipeDetailScreen from "@/screens/RecipeDetailScreen";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function RecipeDetail() {
	const { recipeId } = useLocalSearchParams();
	const [meal, setMeal] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchMeal = async () => {
		try {
			setLoading(true);
			const res = await axios(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
			);
			setMeal(res.data.meals[0]);
		} catch (error) {
			console.error("Failed to fetch meal:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMeal();
	}, []);

	if (loading)
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator
					size="large"
					color="#581c87"
				/>
				<Text>Loading...</Text>
			</View>
		);

	if (!meal)
		return (
			<View className="flex-1 items-center justify-center">
				<Text>No meal found</Text>
			</View>
		);

	return <RecipeDetailScreen meal={meal} />;
}
