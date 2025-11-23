import AppWrapper from "@/components/AppWrapper";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput } from "react-native";

export default function VerifyEmailScreen() {
	const router = useRouter();
	return (
		<AppWrapper>
			<Image
				className="w-full h-80"
				resizeMode="stretch"
				source={require("../assets/images/i3.png")}
			/>
			<Text className="text-3xl mt-1 text-purple-900 text-center mb-8 font-bold">
				Verify Your Email
			</Text>
			<Text className="text-md mt-1 text-purple-900 text-center mb-8">
				We've sent a Verification code to example@gmail.com
			</Text>
			<TextInput
				className="border border-gray-300 p-4 rounded-lg mb-5"
				placeholder="Enter verification code"
			/>
			<Pressable
				onPress={() => console.log("Verify Email")}
				className="bg-purple-700 my-5 py-4 rounded-lg">
				<Text className="text-white font-bold text-center text-md">
					Verify Email
				</Text>
			</Pressable>
			<Pressable onPress={() => router.navigate("/(auth)/signup")}>
				<Text className="font-bold text-purple-900 text-center">
					Back to Sign Up
				</Text>
			</Pressable>
		</AppWrapper>
	);
}
