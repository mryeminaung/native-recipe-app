import { COLORS } from "@/constants/colors";
import { useFavStore } from "@/stores/useFavStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";
export default function TabLayout() {
	const favRecipes = useFavStore((state) => state.favorites).length;
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: true,
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.textLight,
				tabBarStyle: {
					borderTopWidth: 1,
					borderTopColor: COLORS.border,
					backgroundColor: COLORS.white,
					height: 70,
					// paddingBottom: 10,
					paddingTop: 5,
				},
				tabBarLabelStyle: {
					marginTop: 2,
					fontSize: 12,
					fontWeight: "bold",
				},
			}}>
			<Tabs.Screen
				name="recipes"
				options={{
					headerShown: false,
					title: "Recipes",
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name="silverware-variant"
							size={30}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="search"
				options={{
					headerShown: false,
					title: "Search",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "search-sharp" : "search-outline"}
							size={30}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="favorites"
				options={{
					headerShown: false,
					title: "Favorites",
					tabBarBadge: favRecipes > 0 ? favRecipes : undefined,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "heart-sharp" : "heart-outline"}
							size={30}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
