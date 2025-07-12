import clsx from "clsx";
import { Text, View } from "react-native";

interface IPaymentInfoStripe {
	label: string;
	value: string;
	labelStyle?: string;
	valueStyle?: string;
}

export function PaymentInfoStripe({
	label,
	value,
	labelStyle,
	valueStyle,
}: IPaymentInfoStripe) {
	return (
		<View className="flex-row flex-between my-1">
			<Text className={clsx("text-gray-200 paragraph-medium", labelStyle)}>
				{label}
			</Text>
			<Text className={clsx("text-dark-100 paragraph-bold", valueStyle)}>
				{value}
			</Text>
		</View>
	);
}
