import AppWrapper from "@/components/AppWrapper";
import RecipeCard from "@/components/RecipeCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	View,
} from "react-native";

type Meal = {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	[key: string]: any;
};

export default function Search() {
	const [popularRecipes, setPopularRecipes] = useState<Meal[]>([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	const getRandomMeals = async (count = 12) => {
		try {
			// If refreshing, don't show main loading
			if (!refreshing) setLoading(true);

			const calls = Array.from({ length: count }, () =>
				axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
			);

			const results = await Promise.all(calls);
			const meals: Meal[] = results.map((res) => res.data.meals[0]);

			setPopularRecipes(meals);
		} finally {
			setLoading(false);
			setRefreshing(false);
		}
	};

	useEffect(() => {
		getRandomMeals();
	}, []);

	return (
		<AppWrapper>
			{/* Search Input */}
			<View className="flex-row px-4 gap-x-2 py-0.5 border border-gray-500 rounded-2xl items-center">
				<Ionicons
					name="search-sharp"
					size={20}
					color="purple"
				/>
				<TextInput placeholder="Search recipes, ingredients..." />
			</View>

			{/* Header */}
			<View className="my-5 flex-row items-center justify-between">
				<Text className="text-xl text-purple-900 font-bold">
					Popular Recipes
				</Text>
				<Text className="text-base text-purple-700 font-bold">
					{popularRecipes.length} Found
				</Text>
			</View>

			<FlatList
				data={popularRecipes}
				keyExtractor={(item) => item.idMeal}
				showsVerticalScrollIndicator={false}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
					marginBottom: 30,
				}}
				renderItem={({ item }) => <RecipeCard recipe={item} />}
				refreshing={refreshing}
				onRefresh={() => {
					setRefreshing(true);
					getRandomMeals();
				}}
				ListEmptyComponent={
					loading ? (
						<View className="mt-20 items-center justify-center">
							<ActivityIndicator
								size="large"
								color="purple"
							/>
							<Text className="mt-3 text-purple-700 font-semibold">
								Loading recipes...
							</Text>
						</View>
					) : null
				}
			/>
		</AppWrapper>
	);
}
