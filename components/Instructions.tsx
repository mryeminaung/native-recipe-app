import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import InstructionStep from "./InstructionStep";

type InstructionsProps = {
	instructions: { id: string; step: string; text: string }[];
};

export default function Instructions({ instructions }: InstructionsProps) {
	return (
		<>
			<View className="flex-row items-center justify-between my-5">
				<View className="items-center flex-row gap-x-3">
					<Ionicons
						name="book"
						size={18}
						style={{ backgroundColor: COLORS.primary }}
						className="p-2 rounded-full"
						color="white"
					/>
					<Text
						style={{ color: COLORS.primary }}
						className="text-2xl font-bold">
						Instructions
					</Text>
				</View>
				<Text
					style={{
						color: COLORS.background,
						backgroundColor: COLORS.textLight,
					}}
					className="text-md font-bold rounded-full px-3 py-1">
					{instructions.length}
				</Text>
			</View>

			{instructions.length > 0 &&
				instructions.map((instruction) => (
					<InstructionStep
						key={instruction.id}
						instruction={instruction}
					/>
				))}
		</>
	);
}
