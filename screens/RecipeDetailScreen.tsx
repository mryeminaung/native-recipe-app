import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Ingredient = {
	id: string;
	name: string;
};

type Instruction = {
	id: string;
	text: string;
	step: string;
};

type Meal = {
	strMeal: string;
	strMealThumb: string;
	strArea: string;
	strInstructions: string;
	[key: string]: any;
};

type RecipeDetailScreenProps = {
	meal: Meal;
};

export default function RecipeDetailScreen({ meal }: RecipeDetailScreenProps) {
	const router = useRouter();

	const parseIngredients = (meal: Meal): Ingredient[] => {
		const ingredients: Ingredient[] = [];

		for (let i = 1; i <= 20; i++) {
			const ing = meal[`strIngredient${i}`];
			const measure = meal[`strMeasure${i}`];

			if (ing && ing.trim() !== "") {
				ingredients.push({
					id: i.toString(),
					name: `${measure || ""} ${ing}`.trim(),
				});
			}
		}

		return ingredients;
	};

	const parseInstructions = (meal: Meal): Instruction[] => {
		if (!meal.strInstructions) return [];

		return meal.strInstructions
			.split("\n")
			.filter((step) => step.trim() !== "")
			.map((step, index) => ({
				id: (index + 1).toString(),
				text: step.trim(),
				step: (index + 1).toString(),
			}));
	};

	const ingredients = parseIngredients(meal);
	const instructions = parseInstructions(meal);

	return (
		<SafeAreaView className="flex-1">
			<ScrollView
				showsVerticalScrollIndicator={false}
				className="flex-1">
				{/* Header Image */}
				<View>
					<ImageBackground
						resizeMode="stretch"
						style={{
							width: "100%",
							height: 400,
							opacity: 0.8,
						}}
						source={{ uri: meal.strMealThumb }}
					/>

					{/* Back + Bookmark */}
					<View className="absolute top-5 left-5 right-5">
						<View className="flex-row items-center justify-between my-5">
							<Ionicons
								onPress={() => router.navigate("..")}
								name="arrow-back"
								size={18}
								className="p-2 rounded-full bg-black opacity-60"
								color="white"
							/>
							<Ionicons
								name="bookmark-outline"
								size={18}
								style={{ backgroundColor: COLORS.primary }}
								className="p-2 rounded-full"
								color="white"
							/>
						</View>
					</View>

					{/* Title */}
					<View className="absolute left-5 bottom-20">
						<Text
							style={{
								backgroundColor: COLORS.primary,
								alignSelf: "flex-start",
							}}
							className="px-4 rounded-full py-1.5 text-white font-semibold text-sm uppercase ">
							{meal.strCategory}
						</Text>
						<Text className="text-2xl my-2 font-bold text-white">
							{meal.strMeal}
						</Text>
						<View className="flex-row items-center gap-x-1.5">
							<Ionicons
								name="location-outline"
								size={18}
								color={COLORS.white}
							/>
							<Text
								className="font-semibold text-md"
								style={{ color: COLORS.white }}>
								{meal.strArea}
							</Text>
						</View>
					</View>
				</View>

				{/* Content */}
				<View
					style={{ backgroundColor: COLORS.background }}
					className="rounded-3xl px-5 -mt-16">
					{/* Prep Time / Servings */}
					<View className="flex-row items-center my-5 gap-x-5">
						<View
							style={{ backgroundColor: COLORS.white, width: "48%" }}
							className="items-center py-6 rounded-3xl">
							<Ionicons
								name="time-outline"
								size={24}
								className="bg-orange-500 p-3 rounded-full"
								color="white"
							/>
							<Text
								style={{ color: COLORS.primary }}
								className="text-xl mt-3 font-bold">
								30 minutes
							</Text>
							<Text style={{ color: COLORS.textLight }}>Prep Time</Text>
						</View>

						<View
							style={{ backgroundColor: COLORS.white, width: "48%" }}
							className="items-center py-6 rounded-3xl">
							<Ionicons
								name="people-outline"
								size={24}
								className="bg-emerald-500 p-3 rounded-full"
								color="white"
							/>
							<Text
								style={{ color: COLORS.primary }}
								className="text-xl mt-3 font-bold">
								4
							</Text>
							<Text style={{ color: COLORS.textLight }}>Servings</Text>
						</View>
					</View>

					{/* Video */}
					<View className="flex-row items-center -mx-1.5 gap-x-2">
						<Ionicons
							name="play-circle"
							size={40}
							color="red"
						/>
						<Text
							style={{ color: COLORS.primary }}
							className="text-2xl font-bold">
							Video Tutorials
						</Text>
					</View>

					{/* Ingredients */}
					<Ingredients ingredients={ingredients} />

					{/* Instructions */}
					<Instructions instructions={instructions} />

					{/* Favorite */}
					<Pressable
						style={{ backgroundColor: COLORS.primary }}
						onPress={() => console.log("Save to Fav")}
						className="mb-8 mt-3 py-4 gap-x-2 rounded-2xl flex-row items-center justify-center">
						<Ionicons
							name="heart"
							size={18}
							style={{ backgroundColor: COLORS.primary }}
							color="white"
						/>
						<Text className="text-white font-bold text-center text-md">
							Add to Favorites
						</Text>
					</Pressable>

					{/* <View className="h-5" /> */}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
