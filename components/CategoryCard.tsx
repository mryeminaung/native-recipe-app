import { COLORS } from "@/constants/colors";
import React from "react";
import { Image, Pressable, Text } from "react-native";

type CategoryCardProps = {
	category: {
		idCategory: string;
		strCategory: string;
		strCategoryThumb: string;
		strCategoryDescription: string;
	};
	currentCategory: string;
	setCurrentCategory: (name: string) => void;
};

export default function CategoryCard({
	category,
	currentCategory,
	setCurrentCategory,
}: CategoryCardProps) {
	const isActive = category.strCategory === currentCategory;
	return (
		<Pressable
			onPress={() => setCurrentCategory(category.strCategory)}
			className="py-3 px-5 items-center mr-4 rounded-3xl border"
			style={{
				backgroundColor: isActive ? COLORS.primary : COLORS.card,
				borderColor: isActive ? COLORS.primary : COLORS.border,
			}}>
			<Image
				style={{
					width: 45,
					height: 45,
					borderWidth: 2.5,
					borderColor: "white",
					borderRadius: 50,
					backgroundColor: COLORS.border,
					padding: 3,
				}}
				source={{ uri: category.strCategoryThumb }}
				resizeMode="stretch"
			/>
			<Text
				style={{ color: isActive ? COLORS.white : COLORS.text }}
				className=" font-semibold text-sm mt-1">
				{category.strCategory}
			</Text>
		</Pressable>
	);
}
