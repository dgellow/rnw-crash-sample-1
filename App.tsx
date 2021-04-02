/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import * as FancyMath from "./src/FancyMath"
import * as SoundPlayer from "./src/SoundPlayer"

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [sum, setSum] = useState(0)

  useEffect(() => {
    const fn = async () => {
      const result = await FancyMath.addNumbers(1, 2)
      setSum(result)
    }
    fn()
  }, [false])

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic"      >
        <View
          style={{ padding: 20 }}>
          <Text style={{ color: "black", fontSize: 30 }}>FancyMath native module</Text>
          <Text style={{ color: "black", fontSize: 20 }}>{FancyMath.E}</Text>
          <Text style={{ color: "black", fontSize: 20 }}>{FancyMath.Pi}</Text>
          <Text style={{ color: "black", fontSize: 20 }}>{"Calculated sum: " + sum}</Text>

          <Text style={{ color: "black", fontSize: 30, marginTop: 20 }}>SoundPlayer native module</Text>
          <Text style={{ color: "black", fontSize: 20 }}>Press any button below to crash the application:</Text>
          <View style={{ alignItems: "center" }}>
            <View style={{ marginBottom: 10 }}><Button title="Play focus sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Focus)} /></View>
            <View style={{ marginBottom: 10 }}><Button title="Play invoke sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Invoke)} /></View>
            <View style={{ marginBottom: 10 }}><Button title="Play show sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Show)} /></View>
            <View style={{ marginBottom: 10 }}><Button title="Play hide sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Hide)} /></View>
            <View style={{ marginBottom: 10 }}><Button title="Play move previous sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.MovePrevious)} /></View>
            <View style={{ marginBottom: 10 }}><Button title="Play move next sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.MoveNext)} /></View>
            <View style={{ marginBottom: 10 }}><Button title="Play go back sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.GoBack)} /></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
