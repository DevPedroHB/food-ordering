import clsx from "clsx";
import { useState } from "react";
import { TextInput, type TextInputProps } from "react-native";

export function Input({ className, ...props }: TextInputProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<TextInput
			onFocus={() => setIsFocused(!isFocused)}
			onBlur={() => setIsFocused(!isFocused)}
			placeholderTextColor="#888"
			className={clsx(
				"input",
				isFocused ? "border-primary" : "border-gray-300",
				className,
			)}
			{...props}
		/>
	);
}
