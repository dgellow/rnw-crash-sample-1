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
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import * as FancyMath from "./src/FancyMath"
import * as SoundPlayer from "./src/SoundPlayer"

const Section: React.FC<{
  title: string
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const [sum, setSum] = useState(0)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  useEffect(() => {
    const fn = async () => {
      const result = await FancyMath.addNumbers(1, 2)
      setSum(result)
    }
    fn()
  }, [false])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{ color: "black", fontSize: 20 }}>{FancyMath.E}</Text>
          <Text style={{ color: "black", fontSize: 20 }}>{FancyMath.Pi}</Text>
          <Text style={{ color: "black", fontSize: 20 }}>{"Calculated sum: " + sum}</Text>
          <Button title="Play focus sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Focus)} />
          <Button title="Play invoke sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Invoke)} />
          <Button title="Play show sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Show)} />
          <Button title="Play hide sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.Hide)} />
          <Button title="Play move previous sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.MovePrevious)} />
          <Button title="Play move next sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.MoveNext)} />
          <Button title="Play go back sound" onPress={() => SoundPlayer.playSound(SoundPlayer.SoundKind.GoBack)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
