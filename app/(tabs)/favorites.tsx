import AppWrapper from "@/components/AppWrapper";
import FavCard from "@/components/FavCard";
import { COLORS } from "@/constants/colors";
import { useFavStore } from "@/stores/useFavStore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function favorites() {
	const router = useRouter();
	const favRecipes = useFavStore((state) => state.favorites);

	return (
		<AppWrapper>
			<View className="mb-5 flex-row items-center justify-between">
				<Text className="text-3xl  text-purple-900 font-bold">Favorites</Text>
				<MaterialIcons
					onPress={() => router.navigate("/signin")}
					name="logout"
					size={20}
					color={COLORS.primary}
					className="rounded-full p-2 bg-white"
				/>
			</View>
			<FlatList
				columnWrapperStyle={{
					justifyContent: "space-between",
					marginBottom: 30,
				}}
				data={favRecipes}
				numColumns={2}
				renderItem={({ item }) => <FavCard meal={item} />}
			/>
		</AppWrapper>
	);
}
