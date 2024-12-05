import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Constants from 'expo-constants'
import { Switch } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useUpdateEffect from '@/Hooks/useUpdateEffect'

interface Preferences {
  pushNotifications: boolean
  emailMarketing: boolean
  latestNews: boolean
}

export default function App() {
  const [preferences, setPreferences] = useState<Preferences>({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false
  })

  useEffect(() => {
    // Populating preferences from storage using AsyncStorage.multiGet
    ;(async () => {
      try {
        const keys = Object.keys(preferences)
        const values = await AsyncStorage.multiGet(keys)
        const initialState = values.reduce<Preferences>(
          (acc, [key, value]) => {
            if (key && value !== null) {
              acc[key as keyof Preferences] = JSON.parse(value)
            }
            return acc
          },
          { ...preferences }
        )
        setPreferences(initialState)
      } catch (e) {
        Alert.alert(`An error occurred: ${(e as Error).message}`)
      }
    })()
  }, [])

  // This effect only runs when the preferences state updates, excluding initial mount
  useUpdateEffect(() => {
    ;(async () => {
      const keyValues: [string, string][] = Object.entries(preferences).map(
        ([key, value]) => [key, JSON.stringify(value)]
      )
      try {
        await AsyncStorage.multiSet(keyValues)
      } catch (e) {
        Alert.alert(`An error occurred: ${(e as Error).message}`)
      }
    })()
  }, [preferences])

  const updateState = (key: keyof Preferences) => () => {
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16
  },
  text: {
    fontSize: 18
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
