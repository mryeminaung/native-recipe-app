import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

type featuredCardProps = {
	randomRecipe: any;
	getRandomRecipe: () => void;
};

export default function FeaturedCard({
	randomRecipe,
	getRandomRecipe,
}: featuredCardProps) {
	return (
		<Pressable
			onPress={getRandomRecipe}
			style={{ borderColor: COLORS.background }}
			className="border my-3 rounded-3xl overflow-hidden">
			<View className="absolute bg-black w-full bottom-0 top-0 left-0 right-0" />
			<ImageBackground
				style={{
					width: "100%",
					height: 220,
					opacity: 0.8,
				}}
				source={{
					uri: randomRecipe.strMealThumb,
				}}
			/>
			<Text
				style={{ backgroundColor: COLORS.primary }}
				className="absolute top-5 px-4 rounded-full py-1.5 left-5 text-white font-semibold text-sm">
				Featured
			</Text>
			<View className="absolute left-5 bottom-5">
				<Text className="text-2xl line-clamp-1 font-bold text-white mb-3 self-start">
					{randomRecipe.strMeal}
				</Text>
				<View className="flex-row items-center gap-x-5">
					<View className="flex-row items-center gap-x-1.5">
						<Ionicons
							name="time-outline"
							size={18}
							color={COLORS.white}
						/>
						<Text
							style={{ color: COLORS.white }}
							className="font-semibold text-sm">
							30 minutes
						</Text>
					</View>
					<View className="flex-row items-center gap-x-1.5">
						<Ionicons
							name="people-outline"
							size={18}
							color={COLORS.white}
						/>
						<Text
							className="font-semibold text-sm"
							style={{ color: COLORS.white }}>
							4
						</Text>
					</View>
					<View className="flex-row items-center gap-x-1.5">
						<Ionicons
							name="location-outline"
							size={18}
							color={COLORS.white}
						/>
						<Text
							className="font-semibold text-sm"
							style={{ color: COLORS.white }}>
							{randomRecipe.strArea}
						</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
}
