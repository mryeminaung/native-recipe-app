import AppWrapper from "@/components/AppWrapper";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function SignUpScreen() {
	const router = useRouter();

	return (
		<AppWrapper>
			<Image
				className="w-full h-80"
				resizeMode="stretch"
				source={require("../assets/images/i2.png")}
			/>
			<Text className="text-3xl mt-1 text-purple-900 text-center mb-8 font-bold">
				Create Account
			</Text>
			<TextInput
				className="border border-gray-300 p-4 rounded-lg mb-6"
				placeholder="Enter email"
			/>
			<TextInput
				className="border border-gray-300 p-4 rounded-lg mb-3"
				placeholder="Enter password"
			/>
			<Pressable
				onPress={() => console.log("Sign Up")}
				className="bg-purple-700 my-5 py-4 rounded-lg">
				<Text className="text-white font-bold text-center text-md">
					Sign Up
				</Text>
			</Pressable>
			<View className="justify-center flex-row items-center">
				<Text className="mr-2">Already have an account?</Text>
				<Pressable onPress={() => router.navigate("/(auth)/signin")}>
					<Text className="font-semibold">Sign In</Text>
				</Pressable>
			</View>
		</AppWrapper>
	);
}
