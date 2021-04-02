import { Alert, NativeModules } from "react-native"

const { FancyMath } = NativeModules
console.log("FancyMath", FancyMath)

export const Pi = FancyMath.Pi

export const E = FancyMath.E

export async function addNumbers(n1: number, n2: number) {
	return new Promise<number>((resolve, _) => {
		FancyMath.add(n1, n2, (result: number) => {
			resolve(result)
		})
	})
}
