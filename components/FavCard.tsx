import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type FavCardProps = {
	meal: {
		idMeal: string;
		strMeal: string;
		strMealThumb: string;
	};
};

export default function FavCard({ meal }: FavCardProps) {
	const router = useRouter();

	return (
		<Pressable
			onPress={() => router.navigate(`/recipe/${meal.idMeal}`)}
			className="bg-white rounded-3xl w-[48%] overflow-hidden"
			style={{ borderColor: COLORS.border }}>
			<Image
				style={{ width: "100%", height: 120, resizeMode: "cover" }}
				source={{
					uri: meal.strMealThumb,
				}}
			/>
			<View className="p-3">
				<Text
					className="line-clamp-2 text-xl font-bold mb-2"
					style={{ color: COLORS.primary }}>
					{meal.strMeal}
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
