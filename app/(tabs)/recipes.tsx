import AppWrapper from "@/components/AppWrapper";
import CategoryCard from "@/components/CategoryCard";
import FeaturedCard from "@/components/FeaturedCard";
import RecipeCard from "@/components/RecipeCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Recipes() {
	const [categories, setCategories] = useState<any[]>([]);
	const [currentCategory, setCurrentCategory] = useState<string>("Beef");
	const [recipes, setRecipes] = useState<any[]>([]);
	const [randomRecipe, setRandomRecipe] = useState<{}>({});
	const [loading, setLoading] = useState(false);

	const fetchCategories = async () => {
		try {
			const res = await axios.get(
				"https://www.themealdb.com/api/json/v1/1/categories.php",
			);
			setCategories(res.data.categories);
		} catch (error) {
			console.error("Failed to fetch categories:", error);
		}
	};

	const getRecipesByCategoryName = async (name: string) => {
		try {
			setLoading(true);
			setRecipes([]);
			const res = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`,
			);
			setRecipes(res.data.meals || []);
		} catch (error) {
			console.error("Failed to fetch recipes:", error);
		} finally {
			setLoading(false);
		}
	};

	const getRandomRecipe = async () => {
		const res = await axios(
			"https://www.themealdb.com/api/json/v1/1/random.php",
		);
		setRandomRecipe(res.data.meals[0]);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		getRecipesByCategoryName(currentCategory);
	}, [currentCategory]);

	const MainHeader = () => (
		<View>
			<View className="flex-row justify-between items-center">
				<Image
					source={require("@/assets/images/lamb.png")}
					style={{ width: 100, height: 100 }}
				/>
				<Image
					source={require("@/assets/images/chicken.png")}
					style={{ width: 100, height: 100 }}
				/>
				<Image
					source={require("@/assets/images/pork.png")}
					style={{ width: 100, height: 100 }}
				/>
			</View>

			<FeaturedCard getRandomRecipe={getRandomRecipe} />

			<FlatList
				data={categories}
				horizontal
				className="mb-3"
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.idCategory}
				renderItem={({ item }) => (
					<CategoryCard
						category={item}
						currentCategory={currentCategory}
						setCurrentCategory={setCurrentCategory}
					/>
				)}
			/>

			<Text className="text-2xl text-purple-900 font-bold mb-3">
				{currentCategory}
			</Text>
		</View>
	);

	return (
		<AppWrapper>
			<FlatList
				data={recipes}
				keyExtractor={(item) => item.idMeal}
				showsVerticalScrollIndicator={false}
				numColumns={2}
				ListHeaderComponent={<MainHeader />}
				columnWrapperStyle={{
					justifyContent: "space-between",
					marginBottom: 30,
				}}
				ListEmptyComponent={
					loading ? (
						<View className="mt-20 items-center justify-center">
							<ActivityIndicator
								size="large"
								color="#581c87"
							/>
							<Text className="mt-2 text-gray-500">Loading recipes...</Text>
						</View>
					) : (
						<Text className="text-center text-gray-500 mt-10">
							No recipes found.
						</Text>
					)
				}
				renderItem={({ item }) => <RecipeCard />}
			/>
		</AppWrapper>
	);
}
