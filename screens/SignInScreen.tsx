import AppWrapper from "@/components/AppWrapper";
import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function SignInScreen() {
	const router = useRouter();

	return (
		<AppWrapper>
			<Image
				className="w-full h-80"
				resizeMode="stretch"
				source={require("../assets/images/i1.png")}
			/>
			<Text
				style={{ color: COLORS.primary }}
				className="text-3xl mt-1 text-center mb-8 font-bold">
				Welcome Back
			</Text>
			<TextInput
				style={{ borderColor: COLORS.border }}
				className="border p-4 rounded-xl mb-6"
				placeholder="Enter email"
			/>
			<TextInput
				style={{ borderColor: COLORS.border }}
				className="border p-4 rounded-xl mb-3"
				placeholder="Enter password"
			/>
			<Pressable
				style={{ backgroundColor: COLORS.primary }}
				onPress={() => router.navigate("/(auth)/verify-email")}
				className="my-5 py-4 rounded-lg">
				<Text className="text-white font-bold text-center text-md">
					Sign In
				</Text>
			</Pressable>
			<View className="justify-center flex-row items-center">
				<Text className="mr-2">Don't have an account?</Text>
				<Pressable onPress={() => router.navigate("/(auth)/signup")}>
					<Text
						style={{ color: COLORS.primary }}
						className="font-bold">
						Sign Up
					</Text>
				</Pressable>
			</View>
		</AppWrapper>
	);
}
