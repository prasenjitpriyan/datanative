import FetchMenuItems from '@/components/FetchMenuItems'
import MenuItemComponent from '@/components/MenuItem'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const App: React.FC = () => {
  return (
    <View style={menuStyles.container}>
      <MenuItemComponent />
    </View>
  )
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
