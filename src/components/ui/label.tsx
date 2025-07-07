import clsx from "clsx";
import { Text, type TextProps } from "react-native";

export function Label({ className, ...props }: TextProps) {
	return <Text className={clsx("label", className)} {...props} />;
}
