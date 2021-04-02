import { Alert } from "react-native"
import { NativeModules } from "react-native"

const { SoundPlayer } = NativeModules


export enum SoundKind {
	Focus = 0,
	Invoke,
	Show,
	Hide,
	MovePrevious,
	MoveNext,
	GoBack,
}


export function playSound(sound: SoundKind) {
	// debugger
	// FancyMath.play(sound, () => {
	SoundPlayer.play(sound)
	Alert.alert("FancyMath", "Sound player!", [{ text: "OK" }], { cancelable: false })
	// })
	// debugger
}