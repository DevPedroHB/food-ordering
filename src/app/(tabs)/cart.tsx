import { CartItem } from "@/components/cart-item";
import { CustomHeader } from "@/components/custom-header";
import { PaymentInfoStripe } from "@/components/payment-info-stripe";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { FlatList, SafeAreaView, Text, View } from "react-native";

export default function Cart() {
	const { items, getTotalItems, getTotalPrice } = useCartStore();
	const totalItems = getTotalItems();
	const totalPrice = getTotalPrice();

	return (
		<SafeAreaView className="bg-white h-full">
			<FlatList
				data={items}
				renderItem={({ item }) => <CartItem item={item} />}
				keyExtractor={(item) => item.id}
				contentContainerClassName="pb-28 px-5 pt-5"
				ListHeaderComponent={() => <CustomHeader title="Your Cart" />}
				ListEmptyComponent={() => <Text>Cart Empty</Text>}
				ListFooterComponent={() =>
					totalItems > 0 && (
						<View className="gap-5">
							<View className="mt-6 p-5 border border-gray-200 rounded-2xl">
								<Text className="mb-5 text-dark-100 h3-bold">
									Payment Summary
								</Text>
								<PaymentInfoStripe
									label={`Total Items (${totalItems})`}
									value={`$${totalPrice.toFixed(2)}`}
								/>
								<PaymentInfoStripe label={`Delivery Fee`} value={`$5.00`} />
								<PaymentInfoStripe
									label={`Discount`}
									value={`- $0.50`}
									valueStyle="!text-success"
								/>
								<View className="my-2 border-gray-300 border-t" />
								<PaymentInfoStripe
									label={`Total`}
									value={`$${(totalPrice + 5 - 0.5).toFixed(2)}`}
									labelStyle="base-bold !text-dark-100"
									valueStyle="base-bold !text-dark-100 !text-right"
								/>
							</View>
							<Button>
								<Button.Title>Order Now</Button.Title>
							</Button>
						</View>
					)
				}
			/>
		</SafeAreaView>
	);
}
