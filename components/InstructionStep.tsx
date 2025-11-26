import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

type InstructionStepProps = {
	instruction: { id: string; step: string; text: string };
};

export default function InstructionStep({ instruction }: InstructionStepProps) {
	return (
		<View
			style={{
				backgroundColor: COLORS.card,
			}}
			className="py-3.5 mb-4 px-5 rounded-2xl flex-row items-start justify-between elevation-lg">
			<View className="flex-row items-start flex-1">
				<Text
					style={{
						color: COLORS.white,
						backgroundColor: COLORS.primary,
					}}
					className="text-md font-bold rounded-full py-2.5 px-4 mr-3">
					{instruction.step}
				</Text>
				<View className="flex-1">
					<Text
						style={{
							color: COLORS.primary,
							fontWeight: "400",
						}}>
						{instruction.text}
					</Text>
					<View className="flex-row items-center justify-between mt-2">
						<Text
							style={{ color: COLORS.textLight }}
							className="font-bold text-sm">
							Step {instruction.step}
						</Text>
						<Ionicons
							name="checkmark"
							size={15}
							style={{
								backgroundColor: COLORS.background,
								borderRadius: 50,
								padding: 3,
							}}
							color={COLORS.primary}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}
