import clsx from "clsx";
import {
	ActivityIndicator,
	Text,
	type TextProps,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

interface IButton extends TouchableOpacityProps {
	isLoading?: boolean;
}

function Button({ isLoading, className, children, ...props }: IButton) {
	return (
		<TouchableOpacity
			disabled={isLoading}
			className={clsx("flex-row flex-center custom-btn", className)}
			{...props}
		>
			{isLoading ? <ActivityIndicator size="small" color="white" /> : children}
		</TouchableOpacity>
	);
}

function Title({ className, ...props }: TextProps) {
	return (
		<Text
			className={clsx("text-white-100 paragraph-semibold", className)}
			{...props}
		/>
	);
}

Button.Title = Title;

export { Button };
