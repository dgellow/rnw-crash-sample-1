import { Alert } from "react-native"
import { NativeModules } from "react-native"

const { SoundPlayer } = NativeModules
console.log("SoundPlayer", SoundPlayer)

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
	SoundPlayer.play(sound)
	// Alert.alert("Native module SoundPlayer", "Sound played!", [{ text: "OK" }], { cancelable: false })
}
