import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function FavCard() {
	return (
		<View
			className="bg-white rounded-3xl w-[48%] overflow-hidden"
			style={{ borderColor: COLORS.border }}>
			<Image
				style={{ width: "100%", height: 120, resizeMode: "cover" }}
				source={{
					uri: "https://www.themealdb.com/images/media/meals/li30ck1763281992.jpg",
				}}
			/>
			<View className="p-3">
				<Text
					className="line-clamp-2 text-xl font-bold mb-2"
					style={{ color: COLORS.primary }}>
					Creamy Tomato Soup
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
		</View>
	);
}
